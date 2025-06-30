<template>
  <nav
    class="navbar is-white is-shadow top-navbar"
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
          <button class="button is-white" @click="showNotifications = true">
            <span class="icon">
              <i class="bx bx-bell"></i>
            </span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-white">
            <span class="icon">
              <i class="bx bx-moon"></i>
            </span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-white">
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
            <a class="navbar-item">
              <span class="icon"><i class="bx bx-user"></i></span>
              Perfil
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
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
import { ref, computed } from "vue";

const showNotifications = ref(false);

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
</script>

<style scoped>
.top-navbar {
  /* El estilo principal ahora se controla por :style */
}
.navbar.is-shadow {
  box-shadow: 0 2px 8px rgba(50, 115, 220, 0.07);
  padding: 0.5rem 1.5rem;
}
.navbar-item .button.is-white {
  box-shadow: none;
}
.navbar-item .icon {
  font-size: 1.3rem;
}
.image.is-32x32 {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #eaeaea;
}
.navbar-dropdown {
  min-width: 150px;
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
