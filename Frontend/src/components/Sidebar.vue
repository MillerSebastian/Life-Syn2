<template>
  <div class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
    <div class="sidebar-header">
      <div class="logo">
        <h2 v-if="!isCollapsed">EatherDocs</h2>
        <span v-else>ED</span>
      </div>
      <button class="toggle-btn" @click="toggleSidebar">
        <i class="bx" :class="isCollapsed ? 'bx-menu' : 'bx-menu-alt-left'"></i>
      </button>
    </div>

    <nav class="sidebar-nav">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: $route.path === item.path }"
      >
        <i :class="item.icon"></i>
        <span v-if="!isCollapsed">{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button class="logout-btn" @click="logout">
        <i class="bx bx-log-out"></i>
        <span v-if="!isCollapsed">Cerrar Sesión</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isCollapsed = ref(false);

const emit = defineEmits(["toggle"]);

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: "bx bx-home-alt",
  },
  {
    name: "Archivos",
    path: "/files",
    icon: "bx bx-folder",
  },
  {
    name: "Crear Archivos",
    path: "/crear-archivos",
    icon: "bx bx-plus-circle",
  },
  {
    name: "Resume archivos",
    path: "/resumir-archivos",
    icon: "bx bx-bot",
  },
  {
    name: "Análisis",
    path: "/analytics",
    icon: "bx bx-bar-chart-alt-2",
  },
  {
    name: "Configuración",
    path: "/settings",
    icon: "bx bx-cog",
  },
];

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
  emit("toggle", isCollapsed.value);
};

const logout = () => {
  // Aquí puedes agregar la lógica de logout
  router.push("/login");
};

// Emitir el estado inicial
watch(
  isCollapsed,
  (newValue) => {
    emit("toggle", newValue);
  },
  { immediate: true }
);
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}

.sidebar-collapsed {
  width: 70px;
}

.sidebar-header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #34495e;
}

.logo h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.logo span {
  font-size: 24px;
  font-weight: bold;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
}

.toggle-btn:hover {
  background: #34495e;
  border-radius: 5px;
}

.sidebar-nav {
  flex: 1;
  padding: 20px 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: #bdc3c7;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 15px;
}

.nav-item:hover {
  background: #34495e;
  color: white;
}

.nav-item.active {
  background: #667eea;
  color: white;
}

.nav-item i {
  font-size: 20px;
  min-width: 20px;
}

.nav-item span {
  font-size: 14px;
  font-weight: 500;
}

.sidebar-footer {
  padding: 20px;
  border-top: 1px solid #34495e;
}

.logout-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.logout-btn:hover {
  background: #c0392b;
}

.logout-btn i {
  font-size: 18px;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
  }

  .sidebar:not(.sidebar-collapsed) {
    width: 250px;
  }
}
</style>
