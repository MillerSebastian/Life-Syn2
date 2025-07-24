<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <div class="box">
        <h2 class="title is-4">Usuarios</h2>
        <div v-if="loadingUsers" class="has-text-centered py-4">
          <span class="icon is-large">
            <i class="fas fa-spinner fa-pulse"></i>
          </span>
          <p>Cargando usuarios...</p>
        </div>
        <ul v-else>
          <li
            v-for="user in filteredUsers"
            :key="user.id"
            @click="selectUser(user)"
            :class="{
              'is-active': selectedUser && selectedUser.id === user.id,
            }"
            class="is-flex is-align-items-center is-justify-content-space-between"
          >
            <div class="is-flex is-align-items-center">
              <div
                class="user-status-indicator mr-2"
                :class="{
                  'is-online': isUserOnline(user.id),
                  'is-offline': !isUserOnline(user.id),
                }"
              ></div>
              <div class="user-name">
                {{ user.name }}
              </div>
            </div>
            <div class="user-actions is-flex">
              <button
                @click.stop="viewUserProfile(user)"
                class="button is-small is-light mr-2"
                title="Ver perfil"
              >
                <span class="icon">
                  <i class="fas fa-user"></i>
                </span>
              </button>
              <span v-if="unreadMessages[user.id]" class="notification-badge">
                {{ unreadMessages[user.id] }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="column">
      <div class="box">
        <h2 class="title is-4">
          Chat con
          <span
            v-if="selectedUser"
            :style="{ color: getUserColor(selectedUser.id) }"
          >
            {{ selectedUser.name }}
          </span>
          <span v-else>...</span>
        </h2>
        <div class="messages" ref="messagesContainer">
          <div v-if="!selectedUser" class="no-chat-selected">
            <p>Selecciona un usuario para comenzar a chatear</p>
          </div>
          <div v-else-if="messages.length === 0" class="no-messages">
            <p>No hay mensajes aún. ¡Envía el primer mensaje!</p>
          </div>
          <div v-else class="messages-list">
            <div
              v-for="message in sortedMessages"
              :key="message.id"
              :class="[
                'message-wrapper',
                message.senderId === auth.currentUser?.uid
                  ? 'sent'
                  : 'received',
              ]"
            >
              <div
                class="message-bubble"
                :class="
                  message.senderId === auth.currentUser?.uid
                    ? 'sent-bubble'
                    : 'received-bubble'
                "
                :style="
                  message.senderId !== auth.currentUser?.uid
                    ? { borderColor: getUserColor(message.senderId) }
                    : {}
                "
              >
                <div class="message-header">
                  <span
                    class="message-author"
                    :style="{ color: getUserColor(message.senderId) }"
                  >
                    {{ message.author }}
                  </span>
                  <span class="message-time">
                    {{ formatTime(message.timestamp) }}
                  </span>
                </div>
                <div class="message-content">
                  <!-- Renderizar mensajes con emojis -->
                  <div
                    v-if="message.text"
                    v-html="formatMessageWithEmojis(message.text)"
                  ></div>
                </div>
              </div>
              <button
                v-if="message.senderId === auth.currentUser?.uid"
                @click="deleteMessage(message.id)"
                class="delete-button"
                title="Eliminar mensaje"
              >
                <span class="icon is-small">
                  <i class="fas fa-trash"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <form
        @submit.prevent="sendMessage"
        v-if="selectedUser"
        class="message-form"
      >
        <div class="message-input-container">
          <input
            v-model="newMessage"
            placeholder="Escribe un mensaje..."
            class="input"
          />
          <button
            type="button"
            @click="toggleEmojiPicker"
            class="emoji-button"
            title="Emojis"
          >
            <span class="icon">
              <i class="far fa-smile"></i>
            </span>
          </button>
        </div>
        <button type="submit" class="button is-primary">
          <span class="icon">
            <i class="fas fa-paper-plane"></i>
          </span>
        </button>
      </form>

      <!-- Selector de emojis -->
      <div v-if="showEmojiPicker" class="emoji-picker">
        <div class="emoji-picker-header">
          <h4>Emojis</h4>
          <button @click="toggleEmojiPicker" class="close-button">×</button>
        </div>
        <div class="emoji-list">
          <button
            v-for="emoji in commonEmojis"
            :key="emoji"
            @click="addEmoji(emoji)"
            class="emoji-item"
          >
            {{ emoji }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from "vue";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  getDocs,
  deleteDoc,
  doc,
  where,
  updateDoc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useRouter } from "vue-router";

// Interfaces actualizadas para reflejar la estructura de datos del registro
interface User {
  uid: string;
  name: string;
  email: string;
  photo: string;
  bio: string;
}

interface Message {
  id: string;
  text: string;
  author: string;
  timestamp: any;
  senderId: string;
  receiverId: string;
  read?: boolean;
}

interface ReadStatus {
  [userId: string]: {
    lastReadTimestamp: any;
  };
}

interface UserColors {
  [userId: string]: string;
}

const users = ref<User[]>([]);
const selectedUser = ref<User | null>(null);
const messages = ref<Message[]>([]);
const newMessage = ref<string>("");
const currentUser = ref<User | null>(null);
const messagesContainer = ref<HTMLElement | null>(null);
const unreadMessages = ref<Record<string, number>>({});
const readStatus = ref<ReadStatus>({});
const userColors = ref<UserColors>({});
const loadingUsers = ref<boolean>(true);
const showEmojiPicker = ref<boolean>(false);
const isUploading = ref<boolean>(false);

// Add this to your existing script setup
const router = useRouter();

// Function to check user online status (you'll need to implement this)
const isUserOnline = (userId: string): boolean => {
  // Placeholder implementation
  // In a real-world scenario, you'd track user online status
  // through Firebase presence or a similar mechanism
  return false; // Replace with actual online status logic
};

// Emojis comunes para el selector
const commonEmojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "😅",
  "😆",
  "😉",
  "😊",
  "😋",
  "😎",
  "😍",
  "😘",
  "🥰",
  "😗",
  "😙",
  "😚",
  "🙂",
  "🤗",
  "🤔",
  "🤨",
  "😐",
  "😑",
  "😶",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "🤐",
  "😯",
  "😪",
  "😫",
  "😴",
  "😌",
  "😛",
  "😜",
  "😝",
  "🤤",
  "😒",
  "😓",
  "😔",
  "😕",
  "🙃",
  "🤑",
  "😲",
  "☹️",
  "🙁",
  "😖",
  "😞",
  "😟",
  "😤",
  "😢",
  "😭",
  "😦",
  "😧",
  "😨",
  "😩",
  "🤯",
  "👍",
  "👎",
  "👏",
  "🙌",
  "👌",
  "✌️",
  "🤘",
  "🤙",
  "👋",
  "❤️",
  "💔",
  "💯",
  "🔥",
  "⚡",
  "🌟",
  "💤",
  "💭",
  "🎵",
  "🎶",
  "🎂",
];

const usersCollection = collection(db, "users");
const messagesCollection = collection(db, "messages");
const readStatusCollection = collection(db, "readStatus");
const storage = getStorage();

// Lista de colores para asignar a los usuarios
const colorPalette = [
  "#FF5733",
  "#33A8FF",
  "#33FF57",
  "#FF33A8",
  "#A833FF",
  "#FF8C33",
  "#33FFC5",
  "#FF33F5",
  "#C5FF33",
  "#337BFF",
  "#FF5E3A",
  "#3AFF8C",
  "#8C3AFF",
  "#FFD13A",
  "#3AFFD1",
  "#F5A533",
  "#33FFCC",
  "#F533FF",
  "#FF3357",
  "#33FF92",
  "#FF8CFF",
  "#C533FF",
  "#33FF57",
  "#FF335B",
  "#FF8C80",
  "#33F5A8",
  "#8CFF33",
  "#A8FF33",
  "#33FF72",
  "#FF6333",
  "#FF57E5",
  "#33C5FF",
  "#F7FF33",
  "#F533D1",
  "#FF6B33",
  "#C533A8",
  "#6CFF33",
  "#33FF6C",
  "#3AFF5C",
  "#FF3A8C",
  "#9BFF33",
  "#6B33FF",
  "#33FF48",
  "#A8FF8C",
  "#FF91A8",
  "#33FFEC",
  "#FF336B",
  "#F5FF33",
  "#FF33B3",
  "#C733FF",
  "#F533FF",
  "#FF33F7",
  "#8CFFFB",
  "#FF8CF3",
  "#7CFF33",
  "#FF33AA",
  "#C8FF33",
  "#8CFFCC",
  "#33C9FF",
  "#FF3377",
  "#A8FF75",
  "#FF75A8",
  "#FF33C5",
  "#A8336B",
  "#B333FF",
  "#3A8CFF",
  "#33FF97",
  "#FF3333",
  "#FF339D",
  "#33FFFD",
  "#FF7F33",
  "#33D1FF",
  "#8CFF57",
  "#FF33F0",
  "#A833FF",
  "#D8FF33",
  "#5733FF",
  "#FF3A8C",
  "#FF6342",
  "#4BFF33",
  "#B9FF33",
];

// Computed property para filtrar al usuario actual y verificar existencia
const filteredUsers = computed(() => {
  if (!auth.currentUser) return [];
  return users.value.filter(
    (user) => user.uid !== auth.currentUser?.uid && user.name && user.email
  );
});

// Computed property para ordenar los mensajes cronológicamente
const sortedMessages = computed(() => {
  return [...messages.value].sort((a, b) => {
    return a.timestamp.seconds - b.timestamp.seconds;
  });
});

// Función para generar un color consistente para cada usuario
const getUserColor = (userId: string): string => {
  if (!userColors.value[userId]) {
    const hashCode = userId.split("").reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);

    const colorIndex = hashCode % colorPalette.length;
    userColors.value[userId] = colorPalette[colorIndex];
  }

  return userColors.value[userId];
};

const formatTime = (timestamp: any): string => {
  if (!timestamp) return "";

  const date = timestamp.toDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

// Función para identificar y convertir emojis en el texto
const formatMessageWithEmojis = (text: string): string => {
  // Expresión regular para enlaces
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Reemplaza URLs con enlaces HTML
  const withLinks = text.replace(urlRegex, (url) => {
    return `<a href="${url}" target="_blank" class="message-link">${url}</a>`;
  });

  return withLinks;
};

const loadUsers = async () => {
  loadingUsers.value = true;
  try {
    const usersSnapshot = await getDocs(usersCollection);
    const loadedUsers: User[] = [];

    for (const doc of usersSnapshot.docs) {
      const userData = doc.data() as User;

      if (
        userData.name &&
        userData.email &&
      ) {
        loadedUsers.push({ uid: doc.uid, ...userData });
      }
    }

    users.value = loadedUsers;

    if (auth.currentUser) {
      const currentUserDoc = usersSnapshot.docs.find(
        (doc) => doc.uid === auth.currentUser?.uid
      );
      if (currentUserDoc && currentUserDoc.data().name) {
        currentUser.value = {
          uid: currentUserDoc.uid,
          ...currentUserDoc.data(),
        } as User;

        await loadReadStatus();
      }
    }

    // Asignar colores a todos los usuarios
    loadedUsers.forEach((user) => {
      getUserColor(user.id);
    });

    setupGlobalMessagesListener();
  } catch (error) {
    console.error("Error al cargar usuarios:", error);
  } finally {
    loadingUsers.value = false;
  }
};

// Cargar el estado de lectura de mensajes del usuario actual
const loadReadStatus = async () => {
  if (!auth.currentUser) return;

  try {
    const statusDoc = doc(readStatusCollection, auth.currentUser.uid);
    const statusSnapshot = await getDoc(statusDoc);

    if (statusSnapshot.exists()) {
      readStatus.value = statusSnapshot.data() as ReadStatus;
    } else {
      await setDoc(statusDoc, {});
    }

    calculateUnreadMessages();
  } catch (error) {
    console.error("Error al cargar el estado de lectura:", error);
  }
};

// Calcular mensajes recibidos no leídos
const calculateUnreadMessages = async () => {
  if (!auth.currentUser) return;

  for (const user of users.value) {
    if (user.uid === auth.currentUser.uid) continue;

    const lastReadTimestamp =
      readStatus.value[user.uid]?.lastReadTimestamp || new Timestamp(0, 0);

    const unreadQuery = query(
      messagesCollection,
      where("senderId", "==", user.id),
      where("receiverId", "==", auth.currentUser.uid),
      where("timestamp", ">", lastReadTimestamp)
    );

    const unreadSnapshot = await getDocs(unreadQuery);
    unreadMessages.value[user.id] = unreadSnapshot.size;
  }
};

const selectUser = async (user: User) => {
  selectedUser.value = user;

  loadMessages();

  // Marcar todos los mensajes como leídos para este usuario
  if (auth.currentUser) {
    const currentTimestamp = Timestamp.now();

    if (!readStatus.value[user.uid]) {
      readStatus.value[user.uid] = { lastReadTimestamp: currentTimestamp };
    } else {
      readStatus.value[user.uid].lastReadTimestamp = currentTimestamp;
    }

    const statusDoc = doc(readStatusCollection, auth.currentUser.uid);
    await updateDoc(statusDoc, {
      [user.uid]: {
        lastReadTimestamp: currentTimestamp,
      },
    }).catch(async (error) => {
      if (error.code === "not-found") {
        await setDoc(statusDoc, {
          [user.uid]: {
            lastReadTimestamp: currentTimestamp,
          },
        });
      } else {
        console.error("Error al actualizar el estado de lectura:", error);
      }
    });

    unreadMessages.value[user.uid] = 0;
  }
};

const loadMessages = () => {
  if (!selectedUser.value || !auth.currentUser) return;

  // IMPORTANTE: Ordenando por timestamp para asegurar orden cronológico
  const messagesQuery = query(messagesCollection, orderBy("timestamp"));

  onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() } as Message))
      .filter((message) => {
        const currentUserID = auth.currentUser?.uid;
        const selectedUserID = selectedUser.value?.uid;

        return (
          (message.senderId === currentUserID &&
            message.receiverId === selectedUserID) ||
          (message.senderId === selectedUserID &&
            message.receiverId === currentUserID)
        );
      });

    scrollToBottom();
  });
};

const setupGlobalMessagesListener = () => {
  if (!auth.currentUser) return;

  const messagesQuery = query(messagesCollection, orderBy("timestamp"));

  const startListeningTime = Timestamp.now();

  onSnapshot(messagesQuery, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const message = { uid: change.doc.uid, ...change.doc.data() } as Message;

        if (
          message.receiverId === auth.currentUser?.uid &&
          message.senderId !== auth.currentUser?.uid &&
          message.timestamp.toDate() > startListeningTime.toDate()
        ) {
          playNotificationSound();

          if (
            !selectedUser.value ||
            selectedUser.value.uid !== message.senderId
          ) {
            const lastReadTimestamp =
              readStatus.value[message.senderId]?.lastReadTimestamp ||
              new Timestamp(0, 0);

            if (message.timestamp > lastReadTimestamp) {
              if (!unreadMessages.value[message.senderId]) {
                unreadMessages.value[message.senderId] = 0;
              }
              unreadMessages.value[message.senderId]++;
            }
          } else {
            markMessagesAsRead(message.senderId);
          }
        }
      }
    });
  });
};

const markMessagesAsRead = async (senderId: string) => {
  if (!auth.currentUser) return;

  const currentTimestamp = Timestamp.now();

  if (!readStatus.value[senderId]) {
    readStatus.value[senderId] = { lastReadTimestamp: currentTimestamp };
  } else {
    readStatus.value[senderId].lastReadTimestamp = currentTimestamp;
  }

  const statusDoc = doc(readStatusCollection, auth.currentUser.uid);
  await updateDoc(statusDoc, {
    [senderId]: {
      lastReadTimestamp: currentTimestamp,
    },
  }).catch(async (error) => {
    if (error.code === "not-found") {
      await setDoc(statusDoc, {
        [senderId]: {
          lastReadTimestamp: currentTimestamp,
        },
      });
    } else {
      console.error("Error al actualizar el estado de lectura:", error);
    }
  });

  unreadMessages.value[senderId] = 0;
};

// Función para alternar el selector de emojis
const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value;
};

// Función para añadir un emoji al mensaje
const addEmoji = (emoji: string) => {
  newMessage.value += emoji;
};

// Desencadena el selector de archivos
const triggerFileInput = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};

const sendMessage = async () => {
  if (
    (!newMessage.value.trim() && !selectedFile.value) ||
    !selectedUser.value ||
    !currentUser.value ||
    !auth.currentUser
  )
    return;

  let fileData = null;

  // Si hay un archivo seleccionado, súbelo primero
  if (selectedFile.value) {
    fileData = await uploadFile();
    if (!fileData && !newMessage.value.trim()) {
      return; // Si falló la carga del archivo y no hay mensaje, no enviar nada
    }
  }

  // Crear mensaje con o sin archivo adjunto
  const messageData: any = {
    text: newMessage.value,
    author: currentUser.value.name,
    timestamp: Timestamp.now(),
    senderId: auth.currentUser.uid,
    receiverId: selectedUser.value.uid,
    read: false,
  };

  // Resetear campos después de enviar
  newMessage.value = "";
  selectedFile.value = null;

  scrollToBottom();
};

const deleteMessage = async (messageId: string) => {
  try {
    await deleteDoc(doc(db, "messages", messageId));
    console.log("Mensaje eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar el mensaje:", error);
  }
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

watch(messages, () => {
  scrollToBottom();
});

onMounted(() => {
  loadUsers();
});
</script>

<style scoped>
.columns {
  height: 100vh;
}

.box {
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;
  border-radius: 4px;
  margin-bottom: 5px;
}

li:hover {
  background-color: #00d1b2;
}

li.is-active {
  background-color: #00d1b2;
  color: rgb(255, 255, 255);
}

.user-name {
  font-weight: 500;
}

.notification-badge {
  background-color: #ff3860;
  color: white;
  border-radius: 50%;
  padding: 2px 8px;
  font-size: 0.8rem;
  margin-left: 5px;
  font-weight: bold;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: hsl(220deg 13.04% 9.02%);
  border-radius: 8px;
}

.messages-list {
  display: flex;
  flex-direction: column;
}

.no-chat-selected,
.no-messages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #888;
  font-style: italic;
}

.message-wrapper {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
}

.sent {
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.message-bubble {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  color: black;
}

.sent-bubble {
  background-color: #dcf8c6;
  border-top-right-radius: 2px;
}

.received-bubble {
  background-color: white;
  border-top-left-radius: 2px;
  border-left: 3px solid;
}

.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-size: 0.8rem;
}

.message-author {
  font-weight: bold;
}

.message-time {
  opacity: 0.7;
  margin-left: 8px;
}

.message-content {
  word-break: break-word;
  line-height: 1.4;
}

.message-link {
  color: #3273dc;
  text-decoration: underline;
}

.file-attachment {
  margin-top: 6px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}

.file-preview {
  display: flex;
  align-items: center;
}

.file-link {
  display: flex;
  align-items: center;
  color: #3273dc;
  text-decoration: none;
}

.file-link:hover {
  text-decoration: underline;
}

.file-link .icon {
  margin-right: 5px;
}

.delete-button {
  background-color: transparent;
  border: none;
  color: #ff3860;
  cursor: pointer;
  font-size: 0.7rem;
  padding: 0;
  opacity: 0;
  position: absolute;
  right: 4px;
  bottom: 4px;
  transition: opacity 0.2s;
}

.message-bubble:hover .delete-button {
  opacity: 0.8;
}

.delete-button:hover {
  opacity: 1;
}

.message-form {
  display: flex;
  margin-top: auto;
}

.message-input-container {
  display: flex;
  flex: 1;
  position: relative;
  margin-right: 10px;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding-right: 10px;
}

.message-input-container .input {
  flex: 1;
  border-radius: 20px;
  padding-left: 15px;
  border: none;
  box-shadow: none;
}

.emoji-button,
.file-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 5px;
  color: #888;
  transition: color 0.2s;
}

.emoji-button:hover,
.file-button:hover {
  color: #00d1b2;
}

button.is-primary {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.emoji-picker {
  position: absolute;
  bottom: 70px;
  right: 50px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 320px;
  max-height: 300px;
  z-index: 10;
  overflow-y: auto;
}

.emoji-picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

.emoji-picker-header h4 {
  margin: 0;
  font-weight: 500;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
}

.emoji-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.emoji-item {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  background: none;
  border: none;
  transition: background-color 0.2s;
  border-radius: 5px;
}

.emoji-item:hover {
  background-color: #f5f5f5;
}

.upload-indicator {
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.upload-indicator .icon {
  margin-right: 8px;
  color: #00d1b2;
}

.selected-file {
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.selected-file .file-preview {
  display: flex;
  align-items: center;
  flex: 1;
}

.selected-file .icon {
  margin-right: 8px;
  color: #3273dc;
}

.user-status-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 8px;
}

.user-status-indicator.is-online {
  background-color: #48bb78; /* Green */
}

.user-status-indicator.is-offline {
  background-color: #a0aec0; /* Gray */
}

.user-actions {
  align-items: center;
}

/* Estilo para dispositivos móviles */
@media screen and (max-width: 768px) {
  .column.is-one-quarter {
    width: 40%;
  }

  .message-bubble {
    max-width: 85%;
  }

  .emoji-picker {
    width: 280px;
    right: 20px;
  }
}
</style>
