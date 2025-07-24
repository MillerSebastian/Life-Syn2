<template>
  <nav
    class="navbar top-navbar"
    :class="{ 'notification-flash': flashActive }"
    role="navigation"
    aria-label="main navigation"
    :style="navbarStyle"
  >
    <div class="navbar-brand">
      <div class="navbar-item is-hidden-desktop">
        <span class="icon">
          <i class="bx bx-search"></i>
        </span>
      </div>
      <div
        class="navbar-item is-hidden-mobile"
        style="width: 350px; position: relative"
      >
        <div class="control has-icons-left is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Buscar..."
            v-model="searchQuery"
            @focus="showResults = true"
            @input="showResults = true"
            @blur="handleBlur"
          />
          <span class="icon is-left">
            <i class="bx bx-search"></i>
          </span>
        </div>
        <div v-if="showResults && results.length" class="search-dropdown">
          <div
            v-for="(result, idx) in results"
            :key="result.type + result.id + idx"
            class="search-result-item"
            @mousedown.prevent="goToResult(result)"
          >
            <span class="tag">{{ result.type }}</span>
            <span
              v-html="highlightMatch(result.label, result.highlight)"
            ></span>
            <small v-if="result.extra">
              -
              <span
                v-html="highlightMatch(result.extra, result.highlight)"
              ></span
            ></small>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item" style="position: relative">
          <button class="button nav-button" @click="openNotifications">
            <span class="icon">
              <i class="bx bx-bell"></i>
            </span>
            <span v-if="notificationCount > 0" class="notification-badge">{{
              notificationCount
            }}</span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button nav-button" @click.prevent="cambiarTema">
            <span class="icon">
              <i class="bx bx-moon"></i>
            </span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button nav-button">
            <span class="icon">
              <i class="bx bx-globe"></i>
            </span>
          </button>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <figure class="image is-32x32 is-rounded">
              <img
                class="is-rounded"
                :src="
                  user.photo
                    ? user.photo
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.name || 'U'
                      )}&size=64`
                "
                :alt="`Foto de ${user.name}`"
                @error="onPhotoError"
              />
            </figure>
          </a>
          <div class="navbar-dropdown is-right">
            <a class="navbar-item" @click="profile">
              <span class="icon"><i class="bx bx-user"></i></span>
              Perfil
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item" @click="logout">
              <span class="icon"><i class="bx bx-log-out"></i></span>
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de notificaciones -->
    <div class="modal" :class="{ 'is-active': showNotifications }">
      <div class="modal-background" @click="showNotifications = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Notificaciones</p>
          <button
            class="delete"
            aria-label="close"
            @click="showNotifications = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <div
            v-if="
              eventNotifications.length === 0 &&
              completedTaskNotifications.length === 0
            "
            class="content has-text-centered"
          >
            <span class="icon is-large mb-2">
              <i class="bx bx-bell is-size-2"></i>
            </span>
            <p>No hay notificaciones nuevas.</p>
          </div>
          <div v-else>
            <div
              v-for="(notif, idx) in eventNotifications"
              :key="notif.id"
              class="notification"
              :class="notif.color || 'is-link is-light'"
            >
              <button
                class="delete"
                @click="dismissNotification(notif.id)"
              ></button>
              <strong>¡Recuerda tu evento de mañana!</strong><br />
              <b>{{ notif.title }}</b> —
              {{ notif.description || "Sin descripción" }}<br />
              <span
                ><b>Fecha:</b> {{ notif.date }} <b>Hora:</b>
                {{ notif.time }}</span
              >
            </div>
            <div
              v-for="(notif, idx) in completedTaskNotifications"
              :key="notif.id"
              class="notification"
              :class="notif.color || 'is-warning is-light'"
            >
              <button
                class="delete"
                @click="dismissCompletedTaskNotification(notif.id)"
              ></button>
              <strong v-if="notif.type === 'tarea'">¡Tarea completada!</strong>
              <strong v-else-if="notif.type === 'proxima'"
                >¡Tarea próxima a vencer!</strong
              >
              <strong v-else-if="notif.type === 'vencida'"
                >¡Tarea vencida!</strong
              >
              <strong v-else-if="notif.type === 'reabierta'"
                >¡Tarea reabierta!</strong
              >
              <br />
              <b>{{ notif.title }}</b>
              <span v-if="notif.description"> — {{ notif.description }}</span
              ><br />
              <span v-if="notif.message">{{ notif.message }}</span>
              <span v-else-if="notif.type === 'tarea'"
                >Recuerda que puedes borrar esta tarea si ya no la
                necesitas.</span
              >
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <button class="button" @click="showNotifications = false">
            Cerrar
          </button>
        </footer>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Profile from "@/views/Profile.vue";
import { getAuth, signOut } from "firebase/auth";
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSearchStore } from "@/stores/search";
import { auth, db } from "@/../firebase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  onSnapshot,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { reactive } from "vue";
import { alertError, alertSuccess } from "./alert";

// Boton para Modo dark y light
const btnTheme = document.getElementById("btnTheme");

const showNotifications = ref(false);
const router = useRouter();

// Búsqueda global
const searchStore = useSearchStore();
const searchQuery = ref("");
const showResults = ref(false);

function cambiarTema() {
  const body = document.body;
  if (body.id === "theme-light") {
    body.id = "theme-dark";
  } else {
    body.id = "theme-light";
  }
}

function handleBlur() {
  setTimeout(() => (showResults.value = false), 200);
}

// Esperar a que el usuario esté autenticado antes de sincronizar
watch(
  () => auth.currentUser,
  (user) => {
    if (user) {
      searchStore.syncAll();
    }
  },
  { immediate: true }
);

const results = computed(() => {
  if (!searchQuery.value.trim()) return [];
  const q = searchQuery.value.toLowerCase();
  const res = [];
  // Wallet
  searchStore.transactions.forEach((t) => {
    if (
      (t.title && t.title.toLowerCase().includes(q)) ||
      (t.notes && t.notes.toLowerCase().includes(q))
    ) {
      res.push({
        type: "Transacción",
        label: t.title,
        id: t.id,
        route: "/wallet",
        extra: t.notes,
        highlight: q,
      });
    }
  });
  // Meals
  searchStore.meals.forEach((m) => {
    if (
      (m.name && m.name.toLowerCase().includes(q)) ||
      (m.description && m.description.toLowerCase().includes(q))
    ) {
      res.push({
        type: "Comida",
        label: m.name,
        id: m.id,
        route: "/meals",
        extra: m.description,
        highlight: q,
      });
    }
  });
  // Tasks
  searchStore.tasks.forEach((t) => {
    if (
      (t.title && t.title.toLowerCase().includes(q)) ||
      (t.description && t.description.toLowerCase().includes(q))
    ) {
      res.push({
        type: "Tarea",
        label: t.title,
        id: t.id,
        route: "/tasks",
        extra: t.description,
        highlight: q,
      });
    }
  });
  // Notes
  searchStore.notes.forEach((n) => {
    if (
      (n.title && n.title.toLowerCase().includes(q)) ||
      (n.content && n.content.toLowerCase().includes(q))
    ) {
      res.push({
        type: "Nota",
        label: n.title,
        id: n.id,
        route: "/tasks", // Notas están en la vista de tareas
        extra: n.content,
        highlight: q,
        isNote: true,
      });
    }
  });
  // Events
  searchStore.events &&
    searchStore.events.forEach((e) => {
      if (
        (e.title && e.title.toLowerCase().includes(q)) ||
        (e.description && e.description.toLowerCase().includes(q))
      ) {
        res.push({
          type: "Evento",
          label: e.title,
          id: e.id,
          route: "/calendar",
          extra: e.description,
          highlight: q,
        });
      }
    });
  return res;
});

function goToResult(result) {
  router.push({
    path: result.route,
    query: { highlight: result.id, type: result.type },
  });
  showResults.value = false;
  searchQuery.value = "";
}

const props = defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false,
  },
});

function highlightMatch(text, q) {
  if (!text || !q) return text;
  const regex = new RegExp(`(${q})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

const navbarStyle = computed(() => {
  if (window.innerWidth <= 768) {
    return {};
  }
  const left = props.sidebarCollapsed ? "70px" : "250px";
  const width = props.sidebarCollapsed
    ? "calc(100% - 70px)"
    : "calc(100% - 250px)";
  return {
    left,
    width,
    position: "fixed",
    top: "0",
    zIndex: 20,
    transition: "left 0.3s, width 0.3s",
  };
});

const profile = () => {
  router.push({ name: "profile" });
};

const logout = async () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.setItem("isLoggedIn", "false");
      alertSuccess("sesion finalizada");
      router.push("/login");
    })
    .catch((error) => {
      console.log(`Error al cerrar la sesion: ${error.message}`);
    });
};

const user = reactive({
  name: "",
  photo: "",
});

async function fetchUserProfile() {
  const currentUser = auth.currentUser;
  if (!currentUser) return;
  const userDoc = await getDoc(doc(db, "users", currentUser.uid));
  if (userDoc.exists()) {
    const data = userDoc.data();
    user.name = data.name || "";
    user.photo = data.photo || "";
  }
}

const notifications = ref([]);

// Escuchar notificaciones en tiempo real para el usuario
function listenNotifications() {
  watch(
    () => auth.currentUser,
    (user) => {
      if (!user) return;
      const q = query(
        collection(db, "notifications"),
        where("userId", "==", user.uid)
      );
      if (notifications._unsubscribe) notifications._unsubscribe();
      notifications._unsubscribe = onSnapshot(q, (snapshot) => {
        notifications.value = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },
    { immediate: true }
  );
}

onMounted(() => {
  fetchUserProfile();
  listenNotifications();
});

const eventNotifications = computed(() =>
  notifications.value.filter((n) => n.type === "evento")
);
const completedTaskNotifications = computed(() =>
  notifications.value.filter((n) => n.type === "tarea")
);

async function dismissNotification(id) {
  await deleteDoc(doc(db, "notifications", id));
}
async function dismissCompletedTaskNotification(id) {
  await deleteDoc(doc(db, "notifications", id));
}

const notificationCount = computed(
  () =>
    eventNotifications.value.length + completedTaskNotifications.value.length
);

const lastNotificationCount = ref(0);
const flashActive = ref(false);

watch(
  notificationCount,
  (newVal, oldVal) => {
    if (newVal > oldVal && !showNotifications.value) {
      flashActive.value = true;
      setTimeout(() => {
        flashActive.value = false;
      }, 700);
    }
    lastNotificationCount.value = newVal;
  },
  { immediate: true }
);

function openNotifications() {
  showNotifications.value = true;
}
</script>

<style scoped>
.top-navbar {
  background: var(--background);
  box-shadow: 0 2px 8px var(--shadow);
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border);
  transition: box-shadow 0.3s, background 0.3s;
}
.top-navbar.notification-flash {
  animation: flash-yellow 0.7s;
}
@keyframes flash-yellow {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 221, 51, 0.7);
    background: var(--background);
  }
  30% {
    box-shadow: 0 0 24px 12px rgba(255, 221, 51, 0.7);
    background: #fffbe6;
  }
  100% {
    box-shadow: 0 2px 8px var(--shadow);
    background: var(--background);
  }
}

.nav-button {
  background: transparent;
  border: none;
  color: var(--text);
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}

.nav-button:hover,
.navbar-item.has-dropdown.is-hoverable > .navbar-link:hover {
  background: var(--primary-light);
  color: var(--primary-dark);
  transform: translateY(-2px) scale(1.08);
  box-shadow: 0 2px 8px var(--shadow-hover);
}

.navbar-item .icon {
  font-size: 1.3rem;
}

.image.is-32x32 {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid var(--border);
  transition: all 0.3s ease;
}

.image.is-32x32:hover {
  border-color: var(--primary);
  transform: scale(1.05);
}

.navbar-dropdown {
  min-width: 170px;
  background: var(--background-secondary);
  border: 1px solid var(--border);
  border-radius: 10px;
  box-shadow: 0 4px 16px var(--shadow-hover);
  padding: 0.5rem 0;
  transition: background 0.2s, border 0.2s;
}

.navbar-item {
  color: var(--text);
  transition: background 0.2s, color 0.2s;
}

.navbar-dropdown .navbar-item {
  padding: 0.7rem 1.2rem;
  border-radius: 6px;
  margin: 0 0.3rem;
}

.navbar-dropdown .navbar-item:hover {
  background: var(--primary-light);
  color: var(--primary-dark);
  box-shadow: 0 2px 8px var(--shadow-hover);
}

.navbar-divider {
  background: var(--border);
  margin: 0.5rem 0;
}

.input {
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
}

.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 4px 16px var(--shadow-hover);
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
}

.search-result-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.search-result-item:hover {
  /* Quitar sombra negra, dejar solo fondo suave */
  background: var(--primary-light);
  box-shadow: none;
  color: var(--primary-dark);
}

.search-result-item mark {
  background: var(--primary-light);
  color: var(--primary);
  border-radius: 3px;
  padding: 0 2px;
}

/* Ajustar el icono de búsqueda */
.icon.is-left {
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 10px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  height: 100%;
}

.input {
  padding-left: 2.5rem;
}

@media (max-width: 1024px) {
  .top-navbar {
    left: 70px !important;
    width: calc(100% - 70px) !important;
  }
}

@media (max-width: 768px) {
  .navbar-item.is-hidden-mobile {
    display: none !important;
  }

  .navbar-item.is-hidden-desktop {
    display: block !important;
  }

  .top-navbar {
    left: 0 !important;
    width: 100% !important;
    position: static !important;
  }
}

@media (min-width: 769px) {
  .navbar-item.is-hidden-desktop {
    display: none !important;
  }
}
#theme-dark .modal-card {
  background: #23262f;
  color: #f1f1f1;
  border: 1.5px solid #4f8cff;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.1);
}
#theme-dark .modal-card-head {
  background: #1a4d99;
  color: #f1f1f1;
  border-bottom: 1px solid #4f8cff;
}
#theme-dark .modal-card-title {
  color: #a3c8ff;
}
#theme-dark .modal-card-body {
  background: #23262f;
  color: #f1f1f1;
}
#theme-dark .modal-card-foot {
  background: #23262f;
  border-top: 1px solid #4f8cff;
}
#theme-dark .modal-background {
  background: rgba(24, 26, 32, 0.85) !important;
}
.notification-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  background: #ff3860;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 10;
  min-width: 22px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
