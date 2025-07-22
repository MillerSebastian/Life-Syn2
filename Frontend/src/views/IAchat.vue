<template>
  <div class="iachat-layout">
    <!-- Sidebar de chats -->
    <aside class="chat-sidebar" :class="{ collapsed: isSidebarCollapsed }">
      <div class="sidebar-header">
        <h2 v-if="!isSidebarCollapsed">Chat IA</h2>
        <span v-else>IA</span>
        <button class="toggle-btn" @click="toggleSidebar">
          <i
            class="bx"
            :class="isSidebarCollapsed ? 'bx-menu' : 'bx-menu-alt-left'"
          ></i>
        </button>
      </div>
      <div class="sidebar-actions">
        <button class="btn btn-accent w-100 mb-2" @click="newChat">
          <i class="bx bx-plus mr-2"></i>
          <span v-if="!isSidebarCollapsed">Nuevo chat</span>
        </button>
      </div>
      <nav class="chat-list">
        <div
          v-for="chat in chats"
          :key="chat.id"
          :class="['chat-item', { active: chat.id === activeChatId }]"
          @click="selectChat(chat.id)"
        >
          <i class="bx bx-message-square-dots"></i>
          <span v-if="!isSidebarCollapsed">{{ chat.title }}</span>
        </div>
      </nav>
    </aside>

    <!-- Zona principal del chat -->
    <section class="chat-main">
      <div class="chat-header">
        <h3>{{ activeChatTitle }}</h3>
      </div>
      <div class="chat-messages" ref="messagesContainer">
        <div
          v-for="(msg, idx) in activeChatMessages"
          :key="idx"
          :class="['message', msg.role]"
        >
          <div class="message-content">
            <span v-if="msg.role === 'user'" class="user-label">Tú:</span>
            <span v-if="msg.role === 'bot'" class="bot-label">IA:</span>
            <span>{{ msg.content }}</span>
          </div>
        </div>
      </div>
      <form class="chat-input" @submit.prevent="sendMessage">
        <input
          v-model="input"
          type="text"
          placeholder="Escribe tu mensaje..."
          autocomplete="off"
        />
        <button
          class="btn btn-primary"
          type="submit"
          :disabled="loading || !input.trim()"
        >
          <i class="bx bx-send"></i>
        </button>
      </form>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, onUnmounted } from "vue";
import axios from "axios";
import {
  DEEPSEEK_API_KEY,
  DEEPSEEK_API_URL,
  DEEPSEEK_MODEL,
  DEEPSEEK_MAX_TOKENS,
  DEEPSEEK_TEMPERATURE,
} from "@/config/api";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  where,
  deleteDoc,
  query as fsQuery,
  orderBy,
} from "firebase/firestore";

// Estado del sidebar
const isSidebarCollapsed = ref(false);
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value;
};

// Estado de chats (dummy, luego conectar a Firestore)
const chats = ref([
  {
    id: 1,
    title: "Chat principal",
    messages: [
      {
        role: "bot",
        content: "¡Hola! Soy tu asistente IA. ¿En qué puedo ayudarte hoy?",
      },
    ],
  },
]);
const activeChatId = ref(1);
const input = ref("");
const loading = ref(false);

const newChat = () => {
  const newId = Date.now();
  chats.value.unshift({
    id: newId,
    title: `Chat ${chats.value.length + 1}`,
    messages: [
      { role: "bot", content: "¡Nuevo chat iniciado! ¿Qué deseas hacer?" },
    ],
  });
  activeChatId.value = newId;
  nextTick(() => scrollToBottom());
};

const selectChat = (id) => {
  activeChatId.value = id;
  nextTick(() => scrollToBottom());
};

const activeChat = computed(() =>
  chats.value.find((c) => c.id === activeChatId.value)
);
const activeChatTitle = computed(() => activeChat.value?.title || "Chat");
const activeChatMessages = computed(() => activeChat.value?.messages || []);

const messagesContainer = ref(null);
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

// Llamada a DeepSeek
const callDeepSeek = async (userMessage) => {
  try {
    const response = await axios.post(
      DEEPSEEK_API_URL,
      {
        model: DEEPSEEK_MODEL,
        messages: [
          {
            role: "system",
            content: `Eres un asistente para gestión de tareas. Según la instrucción del usuario, responde SIEMPRE en formato JSON así:\n\nPara crear una tarea:\n{\n  \"intencion\": \"crear_tarea\",\n  \"title\": \"...\",\n  \"description\": \"...\",\n  \"dueDate\": \"...\",\n  \"priority\": \"baja|media|alta\"\n}\n\nPara editar una tarea (incluye cambio de estado o cualquier campo):\n{\n  \"intencion\": \"editar_tarea\",\n  \"title\": \"nombre o parte del nombre de la tarea\",\n  \"status\": \"todo|progress|completed\", // si el usuario lo pide\n  \"priority\": \"...\", // si el usuario lo pide\n  \"description\": \"...\", // si el usuario lo pide\n  \"dueDate\": \"...\" // si el usuario lo pide\n}\n\nPara eliminar una tarea:\n{\n  \"intencion\": \"eliminar_tarea\",\n  \"title\": \"nombre o parte del nombre de la tarea\"\n}\n\nNo uses sinónimos en los nombres de los campos ni en la intención. Si el usuario solo quiere cambiar el estado, responde como editar_tarea con el campo status.`,
          },
          { role: "user", content: userMessage },
        ],
        max_tokens: DEEPSEEK_MAX_TOKENS,
        temperature: DEEPSEEK_TEMPERATURE,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
      }
    );
    // DeepSeek responde en response.data.choices[0].message.content
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error llamando a DeepSeek:", error);
    return "Ocurrió un error al consultar la IA.";
  }
};

// Función para crear tarea en Firestore
const crearTareaEnFirestore = async (tarea) => {
  try {
    const userId = auth.currentUser?.uid || localStorage.getItem("uid");
    if (!userId) throw new Error("No se encontró el usuario autenticado.");
    const now = new Date().toISOString();
    const docRef = await addDoc(collection(db, "tasks"), {
      title: tarea.title,
      description: tarea.description || "",
      category: tarea.category || "sin categoría",
      completedDate: null,
      createdAt: now,
      updatedAt: now,
      dueDate: tarea.dueDate || "",
      priority: tarea.priority || "baja",
      progress: 0,
      status: tarea.status || "todo",
      userId,
    });
    return { ok: true, id: docRef.id };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

// Función para editar tarea en Firestore
const editarTareaEnFirestore = async (datos) => {
  try {
    const userId = auth.currentUser?.uid || localStorage.getItem("uid");
    if (!userId) throw new Error("No se encontró el usuario autenticado.");
    let tareaEncontrada = null;
    let tareaId = datos.id || null;
    // Buscar por id si existe
    if (tareaId) {
      const tareaRef = doc(db, "tasks", tareaId);
      const tareaSnap = await import("firebase/firestore").then(({ getDoc }) =>
        getDoc(tareaRef)
      );
      if (tareaSnap.exists() && tareaSnap.data().userId === userId) {
        tareaEncontrada = { ...tareaSnap.data(), id: tareaSnap.id };
      }
    }
    // Si no hay id o no se encontró, buscar por coincidencia de título
    if (!tareaEncontrada && datos.title) {
      const tareasQuery = query(
        collection(db, "tasks"),
        where("userId", "==", userId)
      );
      const snapshot = await getDocs(tareasQuery);
      const coincidencias = [];
      snapshot.forEach((docSnap) => {
        const t = docSnap.data();
        if (
          t.title &&
          t.title.toLowerCase().includes(datos.title.toLowerCase())
        ) {
          coincidencias.push({ ...t, id: docSnap.id });
        }
      });
      if (coincidencias.length === 1) {
        tareaEncontrada = coincidencias[0];
        tareaId = tareaEncontrada.id;
      } else if (coincidencias.length > 1) {
        // Si hay varias coincidencias, pedir aclaración
        return {
          ok: false,
          multiple: true,
          coincidencias: coincidencias.map(
            (t) => `${t.title} (${t.status}) - ${t.dueDate || ""}`
          ),
        };
      }
    }
    if (!tareaEncontrada || !tareaId) {
      return { ok: false, error: "No se encontró la tarea a editar." };
    }
    // Construir el objeto de actualización solo con los campos presentes
    const updateFields = {};
    [
      "title",
      "description",
      "dueDate",
      "priority",
      "status",
      "category",
    ].forEach((campo) => {
      if (typeof datos[campo] !== "undefined") {
        updateFields[campo] = datos[campo];
      }
    });
    updateFields.updatedAt = new Date().toISOString();
    await updateDoc(doc(db, "tasks", tareaId), updateFields);
    return { ok: true, tarea: { ...tareaEncontrada, ...updateFields } };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

// Función para eliminar tarea en Firestore
const eliminarTareaEnFirestore = async (datos) => {
  try {
    const userId = auth.currentUser?.uid || localStorage.getItem("uid");
    if (!userId) throw new Error("No se encontró el usuario autenticado.");
    let tareaEncontrada = null;
    let tareaId = datos.id || null;
    // Buscar por id si existe
    if (tareaId) {
      const tareaRef = doc(db, "tasks", tareaId);
      const tareaSnap = await import("firebase/firestore").then(({ getDoc }) =>
        getDoc(tareaRef)
      );
      if (tareaSnap.exists() && tareaSnap.data().userId === userId) {
        tareaEncontrada = { ...tareaSnap.data(), id: tareaSnap.id };
      }
    }
    // Si no hay id o no se encontró, buscar por coincidencia de título
    if (!tareaEncontrada && datos.title) {
      const tareasQuery = query(
        collection(db, "tasks"),
        where("userId", "==", userId)
      );
      const snapshot = await getDocs(tareasQuery);
      const coincidencias = [];
      snapshot.forEach((docSnap) => {
        const t = docSnap.data();
        if (
          t.title &&
          t.title.toLowerCase().includes(datos.title.toLowerCase())
        ) {
          coincidencias.push({ ...t, id: docSnap.id });
        }
      });
      if (coincidencias.length === 1) {
        tareaEncontrada = coincidencias[0];
        tareaId = tareaEncontrada.id;
      } else if (coincidencias.length > 1) {
        // Si hay varias coincidencias, pedir aclaración
        return {
          ok: false,
          multiple: true,
          coincidencias: coincidencias.map(
            (t) => `${t.title} (${t.status}) - ${t.dueDate || ""}`
          ),
        };
      }
    }
    if (!tareaEncontrada || !tareaId) {
      return { ok: false, error: "No se encontró la tarea a eliminar." };
    }
    await deleteDoc(doc(db, "tasks", tareaId));
    return { ok: true, tarea: tareaEncontrada };
  } catch (e) {
    return { ok: false, error: e.message };
  }
};

// Guardar mensaje en Firestore (subcolección por usuario)
const guardarMensajeEnFirestore = async (mensaje) => {
  const userId = auth.currentUser?.uid || localStorage.getItem("uid");
  if (!userId) return;
  try {
    await addDoc(collection(db, "user_chats", userId, "messages"), {
      userId,
      role: mensaje.role,
      content: mensaje.content,
      timestamp: new Date().toISOString(),
    });
  } catch (e) {
    console.error("Error guardando mensaje en Firestore:", e);
  }
};

const sendMessage = async () => {
  if (!input.value.trim()) return;
  const msg = { role: "user", content: input.value };
  activeChat.value.messages.push(msg);
  await guardarMensajeEnFirestore(msg);
  const userInput = input.value;
  input.value = "";
  loading.value = true;
  scrollToBottom();
  // Llamada real a DeepSeek
  const iaResponse = await callDeepSeek(userInput);
  let parsed;
  try {
    parsed = JSON.parse(iaResponse.replace(/^```json|```$/g, "").trim());
  } catch (e) {
    const botMsg = { role: "bot", content: iaResponse };
    activeChat.value.messages.push(botMsg);
    await guardarMensajeEnFirestore(botMsg);
    loading.value = false;
    scrollToBottom();
    return;
  }
  // Log para depuración
  console.log("Respuesta IA parseada:", parsed);
  let botMsg = null;
  if (parsed.intencion === "crear_tarea") {
    // Validar que haya título
    if (
      !parsed.title ||
      typeof parsed.title !== "string" ||
      !parsed.title.trim()
    ) {
      activeChat.value.messages.push({
        role: "bot",
        content: "¿Cuál es el título de la tarea que quieres crear?",
      });
      loading.value = false;
      scrollToBottom();
      return;
    }
    // Asegurar valores por defecto para los campos opcionales
    const tarea = {
      title: parsed.title,
      description: parsed.description || "",
      category: parsed.category || "sin categoría",
      completedDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      dueDate: parsed.dueDate || "",
      priority: parsed.priority || "baja",
      progress: 0,
      status: parsed.status || "todo",
    };
    const resultado = await crearTareaEnFirestore(tarea);
    if (resultado.ok) {
      botMsg = {
        role: "bot",
        content: parsed.respuesta || `✅ Tarea creada: ${parsed.title}`,
      };
      activeChat.value.messages.push(botMsg);
      await guardarMensajeEnFirestore(botMsg);
    } else {
      activeChat.value.messages.push({
        role: "bot",
        content: `❌ Error al crear la tarea: ${resultado.error}`,
      });
    }
  } else if (parsed.intencion === "editar_tarea") {
    const resultado = await editarTareaEnFirestore(parsed);
    if (resultado.ok) {
      botMsg = {
        role: "bot",
        content:
          parsed.respuesta || `✅ Tarea editada: ${resultado.tarea.title}`,
      };
    } else if (resultado.multiple) {
      botMsg = {
        role: "bot",
        content: `Se encontraron varias tareas con ese nombre. Por favor, especifica a cuál te refieres:\n- ${resultado.coincidencias.join(
          "\n- "
        )}`,
      };
    } else {
      botMsg = {
        role: "bot",
        content: `❌ Error al editar la tarea: ${resultado.error}`,
      };
    }
    activeChat.value.messages.push(botMsg);
    await guardarMensajeEnFirestore(botMsg);
  } else if (parsed.intencion === "eliminar_tarea") {
    const resultado = await eliminarTareaEnFirestore(parsed);
    if (resultado.ok) {
      botMsg = {
        role: "bot",
        content:
          parsed.respuesta || `🗑️ Tarea eliminada: ${resultado.tarea.title}`,
      };
    } else if (resultado.multiple) {
      botMsg = {
        role: "bot",
        content: `Se encontraron varias tareas con ese nombre. Por favor, especifica a cuál te refieres:\n- ${resultado.coincidencias.join(
          "\n- "
        )}`,
      };
    } else {
      botMsg = {
        role: "bot",
        content: `❌ Error al eliminar la tarea: ${resultado.error}`,
      };
    }
    activeChat.value.messages.push(botMsg);
    await guardarMensajeEnFirestore(botMsg);
  } else {
    botMsg = { role: "bot", content: parsed.respuesta || iaResponse };
    activeChat.value.messages.push(botMsg);
    await guardarMensajeEnFirestore(botMsg);
  }
  loading.value = false;
  scrollToBottom();
};

// Bloquear scroll global solo en la vista de chat
onMounted(async () => {
  const userId = auth.currentUser?.uid || localStorage.getItem("uid");
  if (!userId) return;
  const mensajesRef = collection(db, "user_chats", userId, "messages");
  const mensajesQuery = fsQuery(mensajesRef, orderBy("timestamp"));
  const snapshot = await getDocs(mensajesQuery);
  const mensajes = [];
  snapshot.forEach((doc) => {
    mensajes.push(doc.data());
  });
  // Si usas chats múltiples, puedes adaptar esto para el chat activo
  if (activeChat.value) {
    activeChat.value.messages = mensajes;
  }
  const main = document.querySelector(".main-content");
  if (main) main.classList.add("no-scroll-main");
});
onUnmounted(() => {
  const main = document.querySelector(".main-content");
  if (main) main.classList.remove("no-scroll-main");
});
</script>

<style scoped>
.iachat-layout {
  display: flex;
  min-height: 100vh;
  background: var(--background-secondary);
}

.chat-sidebar {
  width: 300px;
  background: var(--primary);
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s;
  min-width: 70px;
  max-width: 100vw;
  height: 100vh;
  max-height: none;
  border-radius: 0;
  padding-top: 160px; /* Altura del TopNavBar */
  box-sizing: border-box;
  position: relative;
}
.chat-sidebar.collapsed {
  width: 70px;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 100px;
  background: var(--primary-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s;
}
.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}
.sidebar-actions {
  padding: 16px 20px 0 20px;
}
.chat-list {
  flex: 1;
  padding: 10px 0;
  overflow-y: auto;
}
.chat-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  color: rgba(255, 255, 255, 0.85);
  margin: 0 10px 5px 10px;
}
.chat-item.active,
.chat-item:hover {
  background: var(--accent);
  color: white;
}
.chat-item i {
  font-size: 20px;
}

/* Zona principal del chat */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100vh;
  padding-top: 88px;
  background: var(--background-primary);
}
.chat-header {
  padding: 24px 32px 12px 32px;
  border-bottom: 1px solid var(--border-color);
  background: var(--background);
}
.chat-header h3 {
  margin: 0;
  font-size: 1.3rem;
  color: var(--primary);
  font-weight: 600;
}
.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 32px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: var(--background-primary);
}
.message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.message.user {
  flex-direction: row-reverse;
  justify-content: flex-end;
}

.message.user .message-content {
  background: var(--primary-light);
  color: var(--primary-dark);
  align-self: flex-end;
  margin-left: 40px;
  margin-right: 0;
  text-align: right;
}

.message.bot {
  justify-content: flex-start;
}

.message.bot .message-content {
  background: var(--background-secondary);
  color: var(--text-secondary);
  align-self: flex-start;
  margin-right: 40px;
  margin-left: 0;
  text-align: left;
}
.message-content {
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 1rem;
  max-width: 70vw;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.06);
  word-break: break-word;
}
.user-label {
  font-weight: 600;
  margin-right: 6px;
  color: var(--primary-dark);
}
.bot-label {
  font-weight: 600;
  margin-right: 6px;
  color: var(--accent);
}
.chat-input {
  display: flex;
  align-items: center;
  padding: 18px 32px;
  border-top: 1px solid var(--border-color);
  background: var(--background);
  gap: 12px;
}
.chat-input input {
  flex: 1;
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  font-size: 1rem;
  background: var(--background-primary);
  color: var(--text-primary);
  transition: border 0.2s;
}
.chat-input input:focus {
  border-color: var(--primary);
}
.chat-input button {
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.w-100 {
  width: 100%;
}
.mb-2 {
  margin-bottom: 0.75rem;
}
.mr-2 {
  margin-right: 0.5rem;
}

/* --- Sobrescribir Layout solo para esta vista --- */
/* (Elimina el bloque :global(.main-content) para no afectar otras vistas) */
.iachat-layout {
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden; /* Bloquea el scroll general solo en el chat */
  display: flex;
}
.chat-main,
.chat-sidebar {
  height: 100vh;
  max-height: none;
  border-radius: 0;
}
.chat-main {
  border-radius: 0;
}
</style>

<style>
.no-scroll-main.main-content {
  min-height: 100vh !important;
  padding-top: 0 !important;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  overflow: hidden !important;
}
</style>
