<template>
  <nav
    class="navbar top-navbar"
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
      <div class="navbar-item is-hidden-mobile" style="width: 350px">
        <div class="control has-icons-left is-expanded">
          <input class="input" type="text" placeholder="Buscar..." />
          <span class="icon is-left">
            <i class="bx bx-search"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button nav-button" @click="showNotifications = true">
            <span class="icon">
              <i class="bx bx-bell"></i>
            </span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button nav-button">
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
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Perfil"
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
          <div class="content has-text-centered">
            <span class="icon is-large mb-2">
              <i class="bx bx-bell is-size-2"></i>
            </span>
            <p>No hay notificaciones nuevas.</p>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const showNotifications = ref(false);

const router = useRouter();

const props = defineProps({
  sidebarCollapsed: {
    type: Boolean,
    default: false,
  },
});

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

const logout = () => {
  // Aquí puedes agregar la lógica de logout
  router.push("/login");
};
</script>

<style scoped>
.top-navbar {
  background: var(--background);
  box-shadow: 0 2px 8px var(--shadow);
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid var(--border);
}

.nav-button {
  background: transparent;
  border: none;
  color: var(--text);
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background: var(--background-secondary);
  color: var(--primary);
  transform: translateY(-1px);
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
  min-width: 150px;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 4px 16px var(--shadow-hover);
}

.navbar-item {
  color: var(--text);
  transition: all 0.3s ease;
}

.navbar-item:hover {
  background: var(--background-secondary);
  color: var(--primary);
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
</style>
