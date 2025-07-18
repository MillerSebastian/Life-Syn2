<template>
  <div class="iachat-layout">
    <!-- Sidebar de historial de chats -->
    <aside class="chat-sidebar">
      <div class="sidebar-header">
        <span class="logo">🤖</span>
        <span class="sidebar-title">Chat IA</span>
      </div>
      <div class="sidebar-chats">
        <div
          v-for="chat in chats"
          :key="chat.id"
          :class="['sidebar-chat', { active: chat.id === activeChatId }]"
          @click="selectChat(chat.id)"
        >
          <span class="chat-name" @dblclick.stop="editChatName(chat)">
            <template v-if="editingChatId === chat.id">
              <input
                v-model="editingChatName"
                @blur="saveChatName(chat)"
                @keydown.enter="saveChatName(chat)"
                class="input is-small"
                maxlength="30"
                autofocus
              />
            </template>
            <template v-else>{{ chat.name }}</template>
          </span>
          <button class="delete-btn" @click.stop="deleteChat(chat.id)">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div class="sidebar-footer">
        <button
          class="button is-fullwidth is-dark is-small"
          @click="createNewChat"
        >
          <i class="fas fa-plus mr-1"></i> Nuevo Chat
        </button>
        <button
          class="button is-fullwidth is-danger is-small mt-2"
          @click="clearAllChats"
        >
          <i class="fas fa-trash-alt mr-1"></i> Borrar Todo
        </button>
      </div>
    </aside>

    <!-- Área principal de chat -->
    <section class="chat-main">
      <div class="chat-header-main">
        <h1 class="title is-4 has-text-white mb-0">
          <i class="fas fa-robot mr-2"></i>
          {{ currentChat.name }}
        </h1>
        <p class="subtitle is-6 has-text-white-ter mb-0">
          {{ isTyping ? "Escribiendo..." : "En línea" }}
        </p>
      </div>
      <div class="chat-messages-main" ref="messagesContainer">
        <transition-group name="fade" tag="div">
          <div
            v-for="message in currentChat.messages"
            :key="message.id"
            class="message-bubble-wrapper"
            :class="message.type"
          >
            <div class="message-bubble" :class="message.type">
              <div class="avatar" v-if="message.type === 'ai'">
                <i class="fas fa-robot"></i>
              </div>
              <div class="bubble-content" :class="message.type">
                <div v-html="formatMessage(message.content)"></div>
                <div class="bubble-time">
                  {{ formatTime(message.timestamp) }}
                </div>
              </div>
              <div class="avatar user-avatar" v-if="message.type === 'user'">
                <i class="fas fa-user"></i>
              </div>
            </div>
          </div>
        </transition-group>
        <!-- Indicador de escritura -->
        <div v-if="isTyping" class="typing-indicator-main">
          <div class="avatar">
            <i class="fas fa-robot"></i>
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
        <!-- Sugerencias -->
        <div
          v-if="currentChat.messages.length === 0 && !isTyping"
          class="chat-actions-main"
        >
          <button
            v-for="action in suggestedActions"
            :key="action"
            class="button is-dark is-light action-button-main"
            @click="sendMessage(action)"
          >
            {{ action }}
          </button>
        </div>
      </div>
      <div class="chat-input-main">
        <div class="field has-addons">
          <div class="control is-expanded">
            <textarea
              class="input input-field-main"
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
          </div>
          <div class="control">
            <button
              class="button is-primary send-button-main"
              @click="sendMessage()"
              :disabled="!newMessage.trim() || isTyping"
            >
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <!-- Botones de acciones rápidas -->
        <div class="quick-actions">
          <button
            class="button is-info is-light is-small mr-2"
            @click="createTaskExample"
          >
            Crear Tarea
          </button>
          <button
            class="button is-success is-light is-small mr-2"
            @click="createEventExample"
          >
            Crear Evento
          </button>
          <button
            class="button is-warning is-light is-small mr-2"
            @click="createNoteExample"
          >
            Crear Nota
          </button>
          <button
            class="button is-primary is-light is-small mr-2"
            @click="createMealExample"
          >
            Crear Comida
          </button>
          <button
            class="button is-danger is-light is-small"
            @click="createTransactionExample"
          >
            Crear Movimiento Wallet
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick, onMounted, watch } from "vue";

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
    messages: [],
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

// --- Mensajes y lógica de chat ---
const newMessage = ref("");
const isTyping = ref(false);
const messagesContainer = ref(null);

const suggestedActions = [
  "¿Qué puedes hacer?",
  "Explícame sobre IA",
  "Ayúdame con código",
  "Cuéntame un chiste",
];

const sendMessage = async (messageText = null) => {
  const content = messageText || newMessage.value.trim();
  if (!content) return;

  // Agregar mensaje del usuario
  const userMessage = {
    id: Date.now() + Math.random(),
    type: "user",
    content: content,
    timestamp: new Date(),
  };
  currentChat.value.messages.push(userMessage);
  newMessage.value = "";
  saveChats();

  // Scroll al fondo
  await nextTick();
  scrollToBottom();

  // Mostrar indicador de escritura
  isTyping.value = true;

  // Simular respuesta de IA
  setTimeout(() => {
    const aiMessage = {
      id: Date.now() + Math.random(),
      type: "ai",
      content: generateAIResponse(content),
      timestamp: new Date(),
    };
    currentChat.value.messages.push(aiMessage);
    isTyping.value = false;
    saveChats();
    nextTick(() => {
      scrollToBottom();
    });
  }, 1000 + Math.random() * 2000);
};

const generateAIResponse = (userMessage) => {
  const responses = [
    `Entiendo tu pregunta sobre "${userMessage}". Aquí tienes información útil que puede ayudarte.`,
    `Gracias por tu mensaje. Basándome en "${userMessage}", puedo sugerir lo siguiente...`,
    `Es una pregunta interesante sobre "${userMessage}". Déjame explicarte mi perspectiva.`,
    `He procesado tu consulta sobre "${userMessage}". Aquí tienes una respuesta detallada.`,
    `Perfecto, sobre "${userMessage}" puedo decirte que es un tema fascinante. Te explico...`,
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};

const formatMessage = (content) => {
  return content.replace(/\n/g, "<br>");
};

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const userId = "demo-user"; // Cambia esto por el userId real si tienes autenticación

// Funciones para acciones rápidas
async function createTaskExample() {
  const data = {
    title: "Tarea de ejemplo",
    description: "Esta es una tarea creada desde el chat",
    priority: "alta",
    dueDate: new Date().toISOString().split("T")[0],
    category: "prueba",
    progress: 0,
    status: "todo",
    userId,
  };
  await sendActionToBackend("/api/tasks", data, "Tarea creada");
}

async function createEventExample() {
  const data = {
    title: "Evento de ejemplo",
    description: "Evento creado desde el chat",
    date: new Date().toISOString().split("T")[0],
    time: "10:00",
    type: "personal",
    duration: 60,
    location: "Oficina",
    userId,
  };
  await sendActionToBackend("/api/events", data, "Evento creado");
}

async function createNoteExample() {
  const data = {
    title: "Nota de ejemplo",
    content: "Esta es una nota creada desde el chat",
    color: "#06d6a0",
    userId,
  };
  await sendActionToBackend("/api/notes", data, "Nota creada");
}

async function createMealExample() {
  const data = {
    name: "Comida de ejemplo",
    description: "Comida creada desde el chat",
    type: "lunch",
    time: "13:00",
    calories: 500,
    ingredients: ["Arroz", "Pollo"],
    nutrition: { protein: 30, carbs: 60, fat: 10 },
    date: new Date().toISOString().split("T")[0],
    userId,
  };
  await sendActionToBackend("/api/meals", data, "Comida creada");
}

async function createTransactionExample() {
  const data = {
    type: "income",
    title: "Ingreso de ejemplo",
    category: "Salario",
    amount: 1000,
    date: new Date().toISOString().split("T")[0],
    notes: "Pago mensual",
    userId,
  };
  await sendActionToBackend("/api/transactions", data, "Transacción creada");
}

async function sendActionToBackend(endpoint, data, successMsg) {
  // Mostrar mensaje de usuario en el chat
  currentChat.value.messages.push({
    id: Date.now() + Math.random(),
    type: "user",
    content: `Solicitando acción: ${successMsg}`,
    timestamp: new Date(),
  });
  saveChats();
  await nextTick();
  scrollToBottom();
  isTyping.value = true;
  try {
    const res = await fetch(`http://localhost:3001${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    isTyping.value = false;
    currentChat.value.messages.push({
      id: Date.now() + Math.random(),
      type: "ai",
      content: res.ok
        ? `${successMsg} correctamente en Firebase. ID: ${result.id}`
        : `Error: ${result.error}`,
      timestamp: new Date(),
    });
    saveChats();
    nextTick(() => scrollToBottom());
  } catch (err) {
    isTyping.value = false;
    currentChat.value.messages.push({
      id: Date.now() + Math.random(),
      type: "ai",
      content: `Error de conexión con el backend: ${err.message}`,
      timestamp: new Date(),
    });
    saveChats();
    nextTick(() => scrollToBottom());
  }
}

onMounted(() => {
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
</script>

<style scoped>
.iachat-layout {
  display: flex;
  height: 100%;
  background: var(--background-secondary);
}

.chat-sidebar {
  width: 300px;
  background: var(--primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 2px solid var(--primary-dark);
  box-shadow: 2px 0 8px rgba(99, 102, 241, 0.08);
  z-index: 2;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 1.5rem 1rem 1rem 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.logo {
  font-size: 2rem;
}
.sidebar-title {
  font-size: 1.2rem;
  color: #e0e7ff;
}
.sidebar-chats {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 0.5rem 0 0.5rem;
}
.sidebar-chat {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  color: var(--primary-dark);
  border-radius: 10px;
  padding: 0.7rem 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.04);
}
.sidebar-chat.active {
  background: linear-gradient(135deg, var(--primary-light) 60%, #fff 100%);
  border: 2px solid var(--primary);
  color: var(--primary-dark);
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.12);
}
.chat-name {
  flex: 1;
  color: inherit;
  font-size: 1rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.delete-btn {
  background: none;
  border: none;
  color: var(--primary-dark);
  font-size: 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: color 0.2s;
}
.delete-btn:hover {
  color: #ef4444;
}
.sidebar-footer {
  padding: 1rem;
  border-top: 2px solid var(--primary-dark);
  background: var(--primary);
}

/* Área principal de chat */
.chat-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f7f8fa;
}
.chat-header-main {
  padding: 2.5rem 2.5rem 1rem 2.5rem;
  background: var(--primary);
  color: #fff;
  border-bottom: 2px solid var(--primary-dark);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}
.chat-messages-main {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 2.5rem 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  background: #f7f8fa;
}
.message-bubble-wrapper {
  display: flex;
  margin-bottom: 1.2rem;
}
.message-bubble-wrapper.user {
  justify-content: flex-end;
}
.message-bubble-wrapper.ai {
  justify-content: flex-start;
}
.message-bubble {
  display: flex;
  align-items: flex-end;
  max-width: 70%;
}
.message-bubble.user {
  flex-direction: row-reverse;
}
.bubble-content {
  background: #fff;
  color: var(--primary-dark);
  padding: 0.9rem 1.2rem;
  border-radius: 18px 18px 5px 18px;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.08);
  min-width: 60px;
  max-width: 100%;
  word-break: break-word;
  position: relative;
  border: 1.5px solid #e0e7ff;
}
.message-bubble.ai .bubble-content {
  background: var(--primary-light);
  color: var(--primary-dark);
  border-radius: 18px 18px 18px 5px;
  border: 1.5px solid var(--primary);
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}
.avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  margin: 0 0.7rem;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
}
.user-avatar {
  background: var(--primary);
  color: #fff;
}
.bubble-time {
  font-size: 0.75rem;
  color: #a0aec0;
  margin-top: 0.25rem;
  text-align: right;
}
.typing-indicator-main {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  color: var(--primary-dark);
}
.typing-dots {
  display: flex;
  gap: 4px;
  margin-left: 10px;
}
.typing-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  animation: typing 1.4s infinite;
}
.typing-dot:nth-child(2) {
  animation-delay: 0.2s;
}
.typing-dot:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes typing {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}
.chat-actions-main {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.action-button-main {
  border-radius: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
  background: #fff;
  color: var(--primary-dark);
  border: 1.5px solid var(--primary-light);
  transition: background 0.2s, color 0.2s;
}
.action-button-main:hover {
  background: var(--primary-light);
  color: var(--primary-dark);
}
.chat-input-main {
  padding: 1.2rem 2.5rem;
  background: #fff;
  border-top: 2px solid var(--primary-light);
  box-shadow: 0 4px 24px 0 rgba(102, 126, 234, 0.1),
    0 1.5px 8px 0 rgba(99, 102, 241, 0.08);
  position: relative;
  z-index: 1;
}
.input-field-main {
  border-radius: 25px;
  border: 2px solid #e0e7ff;
  padding: 0.75rem 1rem;
  resize: none;
  min-height: 50px;
  max-height: 150px;
  font-family: inherit;
  background: #f7f8fa;
  color: var(--primary-dark);
  font-size: 1.05rem;
  box-shadow: 0 2px 16px 0 rgba(102, 126, 234, 0.08);
  transition: box-shadow 0.3s, border-color 0.3s;
}
.input-field-main.input-glow {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.18),
    0 2px 16px 0 rgba(102, 126, 234, 0.12);
  background: #fff;
}
.input-field-main:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.18),
    0 2px 16px 0 rgba(102, 126, 234, 0.12);
  background: #fff;
}
.send-button-main {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.08);
  transition: all 0.3s;
  background: var(--primary);
  color: #fff;
  border: none;
}
.send-button-main:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.send-button-main:hover {
  background: var(--primary-light);
  color: var(--primary-dark);
  transform: scale(1.05);
  box-shadow: 0 0 16px 2px rgba(102, 126, 234, 0.18);
}
.quick-actions {
  margin-top: 0.7rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
@media (max-width: 1024px) {
  .iachat-layout {
    flex-direction: column;
  }
  .chat-sidebar {
    width: 100%;
    min-height: 80px;
    flex-direction: row;
    border-right: none;
    border-bottom: 2px solid var(--primary-dark);
    box-shadow: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 0;
  }
  .sidebar-header,
  .sidebar-footer {
    display: none;
  }
  .sidebar-chats {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .sidebar-chat {
    min-width: 120px;
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
  .chat-main {
    padding: 0;
  }
  .chat-header-main,
  .chat-messages-main,
  .chat-input-main {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
@media (max-width: 768px) {
  .iachat-layout {
    flex-direction: column;
  }
  .chat-sidebar {
    width: 100%;
    min-height: 60px;
    flex-direction: row;
    border-right: none;
    border-bottom: 2px solid var(--primary-dark);
    box-shadow: none;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 0;
  }
  .sidebar-header,
  .sidebar-footer {
    display: none;
  }
  .sidebar-chats {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 0.5rem;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .sidebar-chat {
    min-width: 100px;
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
  .chat-main {
    padding: 0;
  }
  .chat-header-main,
  .chat-messages-main,
  .chat-input-main {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
</style>
