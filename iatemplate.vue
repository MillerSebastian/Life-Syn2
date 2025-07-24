<template>
  <div class="iachat-root">
    <aside class="sidebar">
      <div class="logo"><i class="bx bx-cog"></i> LifeSync</div>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#"><i class="bx bx-chat"></i> Chats</a>
        </li>
        <li class="nav-item">
          <a href="#"><i class="bx bx-search"></i> Buscar</a>
        </li>
        <li class="nav-item">
          <a href="#"><i class="bx bx-task"></i> Tareas</a>
        </li>
        <li class="nav-item">
          <a href="#"><i class="bx bx-cog"></i> Ajustes</a>
        </li>
      </ul>
      <div class="chat-section">Tus Chats</div>
      <ul class="chat-list">
        <li
          v-for="chat in chats"
          :key="chat.id"
          :class="['chat-item', { active: chat.id === activeChatId }]"
          @click="selectChat(chat.id)"
        >
          <span><i class="bx bx-message-rounded"></i> {{ chat.name }}</span>
          <span v-if="chat.messages.length" class="chat-count">{{
            chat.messages.length
          }}</span>
        </li>
      </ul>
      <button class="new-list-btn" @click="createNewChat">
        <i class="bx bx-plus"></i> Nuevo Chat
      </button>
      <div class="user-profile">
        <div class="avatar">
          <img
            :src="userAvatarUrl"
            alt="avatar"
            style="
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: cover;
            "
          />
        </div>
        <div class="user-info">
          <div class="user-name">{{ userName }}</div>
          <div class="user-email">{{ userEmail }}</div>
        </div>
      </div>
      <div v-if="!userEmail" class="auth-warning">
        <i class="bx bx-error-circle"></i> Debes iniciar sesión para usar la IA y gestionar tus tareas.
      </div>
      <button class="upgrade-btn">
        <i class="bx bx-rocket"></i> Upgrade Now
      </button>
    </aside>
    <main class="iachat-main-content">
      <div v-if="!currentChat.messages.length && !isTyping">
        <div class="main-logo"><i class="bx bx-bot"></i></div>
        <h1 class="main-title">LifeSync Chat</h1>
        <p class="main-subtitle">
          Organiza tus tareas, conversa con la IA y mantén tu vida sincronizada.
        </p>
        <div class="features-grid">
          <div class="feature-card">
            <span class="feature-icon"><i class="bx bx-bulb"></i></span>
            <h3 class="feature-title">Ejemplos</h3>
            <ul class="feature-examples">
              <li>¿Qué tareas tengo para hoy?</li>
              <li>Crea una tarea para mañana</li>
              <li>Muéstrame mis eventos</li>
              <li>Motívame para terminar mis pendientes</li>
            </ul>
          </div>
          <div class="feature-card">
            <span class="feature-icon"><i class="bx bx-cog"></i></span>
            <h3 class="feature-title">Capacidades</h3>
            <ul class="feature-examples">
              <li>Gestión de tareas y eventos</li>
              <li>Respuestas personalizadas</li>
              <li>Motivación y consejos</li>
              <li>Recordatorios inteligentes</li>
            </ul>
          </div>
          <div class="feature-card">
            <span class="feature-icon"><i class="bx bx-error"></i></span>
            <h3 class="feature-title">Limitaciones</h3>
            <ul class="feature-examples">
              <li>Puede cometer errores</li>
              <li>No da consejos médicos</li>
              <li>Limitado a la información de tu cuenta</li>
              <li>Privacidad garantizada</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else class="chat-area">
        <div class="chat-messages-glass" ref="messagesContainer">
          <transition-group name="fade" tag="div">
            <div
              v-for="message in currentChat.messages"
              :key="message.id"
              class="message-bubble-wrapper-glass"
              :class="message.type"
            >
              <div class="message-bubble-glass" :class="message.type">
                <div
                  v-if="message.type === 'ai'"
                  class="avatar ai-avatar-glass"
                >
                  <i class="bx bx-bot"></i>
                </div>
                <div class="bubble-content-glass" :class="message.type">
                  <div v-html="formatMessage(message.content)"></div>
                  <div class="bubble-time-glass">
                    {{ formatTime(message.timestamp) }}
                  </div>
                </div>
                <div
                  v-if="message.type === 'user'"
                  class="avatar user-avatar-glass"
                >
                  <img
                    :src="userAvatarUrl"
                    alt="avatar"
                    class="avatar-img-glass"
                  />
                </div>
              </div>
            </div>
          </transition-group>
          <div v-if="isTyping" class="typing-indicator-glass">
            <div class="avatar ai-avatar-glass">
              <i class="bx bx-bot"></i>
            </div>
            <div>
              IA está escribiendo
              <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="input-area">
          <textarea
            class="input-field"
            v-model="newMessage"
            @keydown.enter.exact.prevent="sendMessage()"
            @keydown.enter.shift.exact="newMessage += '\n'"
            placeholder="Escribe tu mensaje aquí..."
            :disabled="isTyping"
            rows="1"
            :class="{ 'input-glow': isInputFocused }"
            @focus="isInputFocused = true"
            @blur="isInputFocused = false"
          ></textarea>
          <button
            class="send-btn"
            @click="sendMessage()"
            :disabled="!newMessage.trim() || isTyping"
          >
            <i class="bx bx-send"></i>
          </button>
        </div>
      </div>
      <div class="disclaimer">
        LifeSync puede producir información inexacta sobre personas, lugares o
        hechos. Versión 2.0
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, watch } from "vue";
import { getCurrentUser } from "../../firebase";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  DEEPSEEK_API_KEY,
  DEEPSEEK_API_URL,
  DEEPSEEK_MODEL,
  DEEPSEEK_MAX_TOKENS,
  DEEPSEEK_TEMPERATURE,
} from "../config/api";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

// --- Sidebar y chats ---
const chats = ref([]);
const activeChatId = ref(null);
const editingChatId = ref(null);
const editingChatName = ref("");
const isInputFocused = ref(false);

const defaultChatName = "Nuevo Chat";

function loadChats() {
  const saved = localStorage.getItem("ia_chats");
  if (saved) {
    chats.value = JSON.parse(saved);
    if (chats.value.length > 0) {
      activeChatId.value = chats.value[0].id;
    }
  } else {
    createNewChat();
  }
}

function saveChats() {
  localStorage.setItem("ia_chats", JSON.stringify(chats.value));
}

function createNewChat() {
  const newChat = {
    id: Date.now() + Math.random(),
    name: defaultChatName,
    messages: [
      {
        id: Date.now(),
        content:
          "¡Hola! 👋 Soy tu asistente de LifeSync. Estoy aquí para ayudarte a organizar tus tareas, eventos y más. ¿En qué puedo ayudarte hoy? 💪",
        type: "ai",
        timestamp: new Date(),
      },
    ],
  };
  chats.value.unshift(newChat);
  activeChatId.value = newChat.id;
  saveChats();
}

function selectChat(id) {
  activeChatId.value = id;
}

function deleteChat(id) {
  if (confirm("¿Eliminar este chat?")) {
    const idx = chats.value.findIndex((c) => c.id === id);
    if (idx !== -1) {
      chats.value.splice(idx, 1);
      if (chats.value.length > 0) {
        activeChatId.value = chats.value[0].id;
      } else {
        createNewChat();
      }
      saveChats();
    }
  }
}

function clearAllChats() {
  if (confirm("¿Eliminar todo el historial de chats?")) {
    chats.value = [];
    createNewChat();
    saveChats();
  }
}

function editChatName(chat) {
  editingChatId.value = chat.id;
  editingChatName.value = chat.name;
}

function saveChatName(chat) {
  if (editingChatName.value.trim()) {
    chat.name = editingChatName.value.trim();
    saveChats();
  }
  editingChatId.value = null;
  editingChatName.value = "";
}

const currentChat = computed(() => {
  return (
    chats.value.find((c) => c.id === activeChatId.value) || {
      id: null,
      name: defaultChatName,
      messages: [],
    }
  );
});

// --- Nueva función para DeepSeek CRUD ---
const isTyping = ref(false);
const newMessage = ref("");
const messagesContainer = ref(null);

const suggestedActions = [
  "¿Puedes crear una tarea para mañana?",
  "Muéstrame mis tareas pendientes",
  "¿Cómo estoy con mis tareas?",
  "Ayúdame a organizar mi día",
];

// Función para hacer scroll al final
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
    }
  });
};

// Función para formatear mensajes
const formatMessage = (content) => {
  return content.replace(/\n/g, "<br>");
};

// Función para formatear tiempo
const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Función para enviar mensaje
const sendMessage = async (content = null) => {
  const messageContent = content || newMessage.value.trim();
  if (!messageContent) return;

  // Agregar mensaje del usuario
  const userMessage = {
    id: Date.now(),
    content: messageContent,
    type: "user",
    timestamp: new Date(),
  };
  currentChat.value.messages.push(userMessage);
  saveChats();
  newMessage.value = "";
  scrollToBottom();

  // Indicar que la IA está escribiendo
  isTyping.value = true;
  scrollToBottom();

  try {
    // Procesar con DeepSeek API
    const response = await processWithDeepSeek(messageContent);

    // Agregar respuesta de la IA
    const aiMessage = {
      id: Date.now() + 1,
      content: response,
      type: "ai",
      timestamp: new Date(),
    };
    currentChat.value.messages.push(aiMessage);
    saveChats();

    // Actualizar el nombre del chat según la respuesta de la IA
    await setChatNameFromAI(response);
  } catch (error) {
    console.error("Error al procesar con DeepSeek:", error);
    const errorMessage = {
      id: Date.now() + 1,
      content:
        "¡Ups! 😅 Parece que hubo un pequeño problema técnico. ¿Podrías intentar de nuevo? Si el problema persiste, puedes intentar reformular tu mensaje de una manera más simple.",
      type: "ai",
      timestamp: new Date(),
    };
    currentChat.value.messages.push(errorMessage);
    saveChats();
  } finally {
    isTyping.value = false;
    scrollToBottom();
  }
};

// Scroll automático siempre que cambien los mensajes
watch(
  () => currentChat.value.messages.length,
  () => {
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop =
          messagesContainer.value.scrollHeight;
      }
    });
  }
);

// Cambiar el nombre del chat según la respuesta de la IA
async function setChatNameFromAI(text) {
  // Usa la respuesta de la IA para sugerir un nombre
  let name = text.split(/[.!?\n]/)[0];
  if (name.length > 30) name = name.slice(0, 30) + "...";
  if (activeChatId.value) {
    const chat = chats.value.find((c) => c.id === activeChatId.value);
    if (chat) {
      chat.name = name || "Chat IA";
      saveChats();
    }
  }
}

// Función para procesar con DeepSeek API
const processWithDeepSeek = async (userMessage) => {
  const userId = getCurrentUser()?.uid;
  if (!userId) {
    return "Necesitas iniciar sesión para usar esta funcionalidad.";
  }

  // Obtener tareas actuales del usuario
  const userTasks = await getUserTasks(userId);

  const systemPrompt = `Eres un asistente de IA amigable y conversacional especializado en gestión de tareas. Tu nombre es "LifeSync Assistant" y eres muy útil, empático y motivador.

TAREAS ACTUALES DEL USUARIO:
${JSON.stringify(userTasks, null, 2)}

TU PERSONALIDAD:
- Eres cálido, amigable y motivador
- Usas emojis para hacer las respuestas más vivas
- Eres empático y entiendes las necesidades del usuario
- Das consejos útiles y sugerencias prácticas
- Celebras los logros y animas a continuar

CAPACIDADES:
Puedes crear, editar, eliminar, cambiar estado y listar tareas. Cuando el usuario te pida realizar alguna de estas acciones, responde de forma natural y amigable, y luego ejecuta la acción.

COMANDOS ESPECIALES (solo cuando sea necesario):
- Para CREAR tarea: CREATE_TASK:{"title":"Título","description":"Descripción","priority":"alta/media/baja","dueDate":"YYYY-MM-DD","category":"categoría"}
- Para EDITAR por nombre: EDIT_TASK_BY_NAME:{"title":"Nombre","newTitle":"Nuevo título","description":"Nueva descripción","priority":"alta/media/baja","dueDate":"YYYY-MM-DD","category":"categoría"}
- Para CAMBIAR ESTADO: CHANGE_STATUS:{"title":"Nombre","status":"todo/progress/completed"}
- Para ELIMINAR por nombre: DELETE_TASK_BY_NAME:{"title":"Nombre"}
- Para LISTAR: LIST_TASKS

ESTADOS: "todo", "progress", "completed"
PRIORIDADES: "alta", "media", "baja"

IMPORTANTE: Sé natural, conversacional y amigable. Solo usa comandos cuando sea absolutamente necesario para realizar una acción específica. En la mayoría de casos, responde como un asistente humano y útil.`;

  const response = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
      max_tokens: DEEPSEEK_MAX_TOKENS,
      temperature: DEEPSEEK_TEMPERATURE,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error de API: ${response.status}`);
  }

  const data = await response.json();
  const aiResponse = data.choices[0].message.content;

  // Procesar comandos especiales
  if (aiResponse.startsWith("CREATE_TASK:")) {
    return await handleCreateTask(aiResponse, userId);
  } else if (aiResponse.startsWith("EDIT_TASK_BY_NAME:")) {
    return await handleEditTaskByName(aiResponse, userId);
  } else if (aiResponse.startsWith("CHANGE_STATUS:")) {
    return await handleChangeStatus(aiResponse, userId);
  } else if (aiResponse.startsWith("DELETE_TASK_BY_NAME:")) {
    return await handleDeleteTaskByName(aiResponse, userId);
  } else if (aiResponse.startsWith("LIST_TASKS")) {
    return await handleListTasks(userId);
  }

  return aiResponse;
};

// Función para obtener tareas del usuario
const getUserTasks = async (userId) => {
  try {
    const { collection, getDocs, query, where } = await import(
      "firebase/firestore"
    );
    const { db } = await import("../../firebase");

    const tasksSnapshot = await getDocs(
      query(collection(db, "tasks"), where("userId", "==", userId))
    );
    return tasksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al obtener tareas:", error);
    return [];
  }
};

// Función para manejar creación de tareas
const handleCreateTask = async (response, userId) => {
  try {
    const taskData = JSON.parse(response.replace("CREATE_TASK:", ""));
    const { collection, addDoc } = await import("firebase/firestore");
    const { db } = await import("../../firebase");

    const newTask = {
      ...taskData,
      userId,
      status: "todo",
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    await addDoc(collection(db, "tasks"), newTask);

    return `¡Perfecto! 🎉 He creado tu nueva tarea con éxito:\n\n**${taskData.title}**\n${taskData.description}\n\n📅 Fecha límite: ${taskData.dueDate}\n🎯 Prioridad: ${taskData.priority}\n📂 Categoría: ${taskData.category}\n\n¡Ya tienes una tarea más organizada! 💪 ¿Hay algo más en lo que pueda ayudarte?`;
  } catch (error) {
    console.error("Error al crear tarea:", error);
    return "¡Ups! 😅 Parece que hubo un problema al crear la tarea. ¿Podrías intentar de nuevo? Si el problema persiste, puedes intentar con un nombre más simple.";
  }
};

// Función para manejar edición de tareas por nombre
const handleEditTaskByName = async (response, userId) => {
  try {
    const taskData = JSON.parse(response.replace("EDIT_TASK_BY_NAME:", ""));
    const { doc, updateDoc, collection, getDocs, query, where } = await import(
      "firebase/firestore"
    );
    const { db } = await import("../../firebase");

    // Buscar la tarea por nombre
    const tasksSnapshot = await getDocs(
      query(
        collection(db, "tasks"),
        where("userId", "==", userId),
        where("title", "==", taskData.title)
      )
    );

    if (tasksSnapshot.empty) {
      return `¡Hmm! 🤔 No encontré ninguna tarea con el nombre "${taskData.title}". ¿Podrías verificar el nombre exacto? También puedes decirme "mostrar mis tareas" para ver todas las que tienes.`;
    }

    const taskDoc = tasksSnapshot.docs[0];
    const taskId = taskDoc.id;

    // Actualizar la tarea
    await updateDoc(doc(db, "tasks", taskId), {
      title: taskData.newTitle || taskData.title,
      description: taskData.description,
      priority: taskData.priority,
      dueDate: taskData.dueDate,
      category: taskData.category,
      updatedAt: new Date().toISOString(),
    });

    return `¡Excelente! ✨ He actualizado tu tarea "${
      taskData.title
    }" con éxito:\n\n**${taskData.newTitle || taskData.title}**\n${
      taskData.description
    }\n\n📅 Fecha límite: ${taskData.dueDate}\n🎯 Prioridad: ${
      taskData.priority
    }\n📂 Categoría: ${
      taskData.category
    }\n\n¡Los cambios se han guardado perfectamente! 🎯 ¿Necesitas ajustar algo más?`;
  } catch (error) {
    console.error("Error al editar tarea:", error);
    return "¡Ups! 😅 Parece que hubo un problema al editar la tarea. ¿Podrías verificar el nombre y intentar de nuevo?";
  }
};

// Función para cambiar estado de tareas por nombre
const handleChangeStatus = async (response, userId) => {
  try {
    const taskData = JSON.parse(response.replace("CHANGE_STATUS:", ""));
    const { doc, updateDoc, collection, getDocs, query, where } = await import(
      "firebase/firestore"
    );
    const { db } = await import("../../firebase");

    // Buscar la tarea por nombre
    const tasksSnapshot = await getDocs(
      query(
        collection(db, "tasks"),
        where("userId", "==", userId),
        where("title", "==", taskData.title)
      )
    );

    if (tasksSnapshot.empty) {
      return `¡Hmm! 🤔 No encontré ninguna tarea con el nombre "${taskData.title}". ¿Podrías verificar el nombre exacto? También puedes decirme "mostrar mis tareas" para ver todas las que tienes.`;
    }

    const taskDoc = tasksSnapshot.docs[0];
    const taskId = taskDoc.id;

    // Validar estado
    const validStatuses = ["todo", "progress", "completed"];
    if (!validStatuses.includes(taskData.status)) {
      return `¡Ups! 😅 El estado "${
        taskData.status
      }" no es válido. Los estados disponibles son: ${validStatuses.join(
        ", "
      )}. ¿Podrías intentar con uno de estos?`;
    }

    // Actualizar el estado
    const updateData = {
      status: taskData.status,
      updatedAt: new Date().toISOString(),
    };

    // Si se marca como completada, agregar fecha de completado
    if (taskData.status === "completed") {
      updateData.completedDate = new Date().toISOString();
    } else {
      updateData.completedDate = null;
    }

    await updateDoc(doc(db, "tasks", taskId), updateData);

    const statusEmoji =
      taskData.status === "completed"
        ? "✅"
        : taskData.status === "progress"
        ? "🔄"
        : "⏳";
    const statusText =
      taskData.status === "completed"
        ? "Completada"
        : taskData.status === "progress"
        ? "En Progreso"
        : "Por Hacer";

    return `¡Perfecto! 🎯 He movido tu tarea "${taskData.title}" al estado: ${statusEmoji} ${statusText}\n\n¡Excelente progreso! 💪 ¿Hay algo más en lo que pueda ayudarte?`;
  } catch (error) {
    console.error("Error al cambiar estado:", error);
    return "¡Ups! 😅 Parece que hubo un problema al cambiar el estado. ¿Podrías verificar el nombre de la tarea e intentar de nuevo?";
  }
};

// Función para eliminar tareas por nombre
const handleDeleteTaskByName = async (response, userId) => {
  try {
    const taskData = JSON.parse(response.replace("DELETE_TASK_BY_NAME:", ""));
    const { doc, deleteDoc, collection, getDocs, query, where } = await import(
      "firebase/firestore"
    );
    const { db } = await import("../../firebase");

    // Buscar la tarea por nombre
    const tasksSnapshot = await getDocs(
      query(
        collection(db, "tasks"),
        where("userId", "==", userId),
        where("title", "==", taskData.title)
      )
    );

    if (tasksSnapshot.empty) {
      return `¡Hmm! 🤔 No encontré ninguna tarea con el nombre "${taskData.title}". ¿Podrías verificar el nombre exacto? También puedes decirme "mostrar mis tareas" para ver todas las que tienes.`;
    }

    const taskDoc = tasksSnapshot.docs[0];
    const taskId = taskDoc.id;

    // Eliminar la tarea
    await deleteDoc(doc(db, "tasks", taskId));

    return `¡Listo! 🗑️ He eliminado la tarea "${taskData.title}" de tu lista.\n\n¡Tu lista está más organizada ahora! 📝 ¿Necesitas ayuda con algo más?`;
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return "¡Ups! 😅 Parece que hubo un problema al eliminar la tarea. ¿Podrías verificar el nombre e intentar de nuevo?";
  }
};

// Función para manejar eliminación de tareas
const handleDeleteTask = async (response, userId) => {
  try {
    const taskData = JSON.parse(response.replace("DELETE_TASK:", ""));
    const { doc, deleteDoc } = await import("firebase/firestore");
    const { db } = await import("../../firebase");

    await deleteDoc(doc(db, "tasks", taskData.id));

    return `✅ Tarea eliminada exitosamente.`;
  } catch (error) {
    console.error("Error al eliminar tarea:", error);
    return "❌ Error al eliminar la tarea. Por favor, verifica el ID de la tarea.";
  }
};

// Función para listar tareas
const handleListTasks = async (userId) => {
  try {
    const tasks = await getUserTasks(userId);

    if (tasks.length === 0) {
      return "¡Hola! 👋 Veo que aún no tienes tareas creadas. ¡Es un excelente momento para empezar a organizarte! 💪\n\n¿Te gustaría que te ayude a crear tu primera tarea? Puedes decirme algo como 'Crear una tarea para revisar emails' o cualquier cosa que necesites hacer. ¡Juntos podemos hacer que tu día sea más productivo! 🚀";
    }

    let response = "¡Aquí tienes tu lista de tareas! 📋\n\n";

    tasks.forEach((task, index) => {
      const status =
        task.status === "completed"
          ? "✅"
          : task.status === "progress"
          ? "🔄"
          : "⏳";
      const priority =
        task.priority === "alta"
          ? "🔴"
          : task.priority === "media"
          ? "🟡"
          : "🟢";

      response += `${index + 1}. ${status} **${task.title}** ${priority}\n`;
      response += `   📝 ${task.description}\n`;
      response += `   📅 ${task.dueDate || "Sin fecha límite"}\n`;
      response += `   📂 ${task.category || "Sin categoría"}\n`;
      response += `   🆔 ID: ${task.id}\n\n`;
    });

    return response;
  } catch (error) {
    console.error("Error al listar tareas:", error);
    return "❌ Error al obtener las tareas. Por favor, intenta de nuevo.";
  }
};

// Funciones de ejemplo para botones rápidos
const createTaskExample = () => {
  sendMessage(
    "Crear una tarea llamada 'Revisar emails' con prioridad alta para mañana"
  );
};

const createEventExample = () => {
  sendMessage(
    "Crear un evento para mañana a las 3pm llamado 'Reunión de equipo'"
  );
};

const createNoteExample = () => {
  sendMessage(
    "Crear una nota con el título 'Ideas del proyecto' y contenido 'Implementar nuevas funcionalidades'"
  );
};

const createMealExample = () => {
  sendMessage(
    "Crear una comida para mañana al mediodía llamada 'Ensalada César' con 350 calorías"
  );
};

const createTransactionExample = () => {
  sendMessage(
    "Crear una transacción de gasto de $50 para 'Compras del supermercado'"
  );
};

// Funciones adicionales para probar edición y cambio de estado
const editTaskExample = () => {
  sendMessage(
    "Editar la tarea 'Revisar emails' con nueva descripción 'Revisar emails importantes del día' y prioridad media"
  );
};

const changeStatusExample = () => {
  sendMessage("Mover la tarea 'Revisar emails' a estado completado");
};

const deleteTaskExample = () => {
  sendMessage("Eliminar la tarea 'Revisar emails'");
};

// --- Sidebar y chats ---

// Obtener datos del usuario desde Firebase Auth y Firestore
const userName = ref("");
const userPhoto = ref("");
const userEmail = ref("");

function setUserFromAuth(user) {
  if (!user) {
    userName.value = "Usuario";
    userPhoto.value = "";
    userEmail.value = "";
    return;
  }
  userName.value = user.displayName || "Usuario";
  userPhoto.value = user.photoURL || "";
  userEmail.value = user.email || "";
}

async function fetchUserProfile(user) {
  if (!user) return;
  try {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      if (data.photo) userPhoto.value = data.photo;
      if (data.name) userName.value = data.name;
      if (data.email) userEmail.value = data.email;
    }
  } catch (e) {}
}

onMounted(() => {
  // Reactivo a cambios de sesión
  onAuthStateChanged(auth, async (user) => {
    setUserFromAuth(user);
    await fetchUserProfile(user);
  });
  loadChats();
  nextTick(() => {
    scrollToBottom();
  });
});

watch(
  () => activeChatId.value,
  () => {
    nextTick(() => {
      scrollToBottom();
    });
  }
);

// Computed para el avatar del usuario
const userAvatarUrl = computed(() => {
  if (userPhoto.value) return userPhoto.value;
  // Si no hay foto, usar ui-avatars
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(
    userName.value || "U"
  )}&size=128&background=4f46e5&color=fff&rounded=true`;
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.iachat-root {
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  position: relative;
}
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #6b46c1 0%, #553c9a 100%);
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.logo {
  display: flex;
  align-items: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
}
.nav-menu {
  list-style: none;
  margin-bottom: 30px;
}
.nav-item {
  margin-bottom: 15px;
}
.nav-item a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.nav-item a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
.nav-item a::before {
  margin-right: 12px;
  font-size: 18px;
}

.chat-section {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-bottom: 15px;
  margin-top: 20px;
}
.chat-list {
  flex: 1;
  list-style: none;
}
.chat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0;
  font-size: 14px;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}
.chat-item.active,
.chat-item:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.chat-count {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
}
.new-list-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.new-list-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
.user-profile {
  margin-top: auto;
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  overflow: hidden;
}
.user-info {
  flex: 1;
}
.user-name {
  color: white;
  font-weight: 500;
  font-size: 14px;
}
.user-email {
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
}
.upgrade-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  transition: all 0.3s ease;
}
.upgrade-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
.iachat-main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
  padding: 0;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.main-logo {
  font-size: 48px;
  margin-bottom: 10px;
}
.main-title {
  color: white;
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 20px;
}
.main-subtitle {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 50px;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 900px;
}
.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}
.feature-icon {
  font-size: 40px;
  margin-bottom: 15px;
  display: block;
}
.feature-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}
.feature-examples {
  list-style: none;
  text-align: left;
}
.feature-examples li {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  margin-bottom: 8px;
  padding-left: 15px;
  position: relative;
}
.feature-examples li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
}
.chat-area {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  min-height: 0;
}
.chat-messages-glass {
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 120px;
  margin-bottom: 10px;
  min-height: 0;
  max-height: calc(100vh - 120px);
}
.message-bubble-wrapper-glass {
  display: flex;
  margin-bottom: 1.3rem;
}
.message-bubble-wrapper-glass.user {
  justify-content: flex-end;
  align-items: flex-start;
}
.message-bubble-wrapper-glass.ai {
  justify-content: flex-start;
  align-items: flex-start;
}
.message-bubble-glass {
  display: flex;
  align-items: flex-start;
  max-width: 70%;
}
.message-bubble-glass.user {
  flex-direction: row-reverse;
}
.avatar {
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 1rem 0 0;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
  overflow: hidden;
  flex-shrink: 0;
  flex-grow: 0;
  align-self: flex-start;
}
.user-avatar-glass {
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  color: #fff;
  margin: 0 0 0 1rem;
}
.ai-avatar-glass {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #fff;
  margin: 0 1rem 0 0;
}
.avatar-img-glass {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.bubble-content-glass {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  padding: 1.1rem 1.4rem;
  border-radius: 18px 18px 5px 18px;
  font-size: 1.08rem;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
  min-width: 60px;
  max-width: 100%;
  word-break: break-word;
  position: relative;
  border: 1.5px solid #ede9fe;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.2s;
}
.message-bubble-glass.ai .bubble-content-glass {
  background: rgba(102, 126, 234, 0.18);
  color: #fff;
  border-radius: 18px 18px 18px 5px;
  border: 1.5px solid #a78bfa;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}
.message-bubble-glass.user .bubble-content-glass {
  background: rgba(139, 92, 246, 0.18);
  color: #fff;
  border-radius: 18px 18px 5px 18px;
  border: 1.5px solid #ede9fe;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.08);
}
.bubble-time-glass {
  font-size: 0.8rem;
  color: #a0aec0;
  margin-top: 0.3rem;
  text-align: right;
}
.input-area {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 80px);
  max-width: 600px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 15px 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.input-field {
  flex: 1;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  outline: none;
}
.input-field::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.send-btn {
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.send-btn:hover {
  transform: scale(1.1);
}
.disclaimer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.4);
  font-size: 12px;
  text-align: center;
}
.auth-warning {
  color: #ffe066;
  background: rgba(255, 193, 7, 0.12);
  border: 1px solid #ffe066;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 10px 0 0 0;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (max-width: 1024px) {
  .iachat-root {
    flex-direction: column;
    border-radius: 0;
    min-width: 100vw;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
  }
  .sidebar {
    width: 100vw;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 5px;
    min-width: 0;
    border-radius: 0;
  }
  .iachat-main-content {
    padding: 10px;
    min-height: 100vh;
    height: 100vh;
    width: 100vw;
  }
  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .input-area {
    width: 95vw;
    max-width: 98vw;
    left: 2.5vw;
    transform: none;
  }
}
</style>
