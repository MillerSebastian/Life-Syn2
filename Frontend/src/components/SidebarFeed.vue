<template>
  <aside class="feed-sidebar" :class="{ collapsed: isSidebarCollapsed }">
    <div class="sidebar-header">
      <h2 v-if="!isSidebarCollapsed">Comunidad</h2>
      <span v-else>CM</span>
      <button class="toggle-btn" @click="$emit('toggle-sidebar')">
        <i class="bx" :class="isSidebarCollapsed ? 'bx-menu' : 'bx-menu-alt-left'"></i>
      </button>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">MENÚ</div>
      <div class="nav-item" :class="{ active: activeSection === 'feed' }" @click="$emit('update:activeSection', 'feed')">
        <i class="bx bx-group"></i>
        <span v-if="!isSidebarCollapsed">Comunidad</span>
      </div>
      <div class="nav-item" :class="{ active: activeSection === 'chats' }" @click="$emit('update:activeSection', 'chats')">
        <i class="bx bx-chat"></i>
        <span v-if="!isSidebarCollapsed">Chats</span>
      </div>
    </nav>
    <div class="user-profile">
      <div class="avatar">
        <img :src="user.avatar" alt="avatar" />
      </div>
      <div class="user-info">
        <div class="user-name">{{ user.name }}</div>
        <div class="user-email">{{ user.email || '' }}</div>
      </div>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps({
  user: { type: Object, required: true },
  isSidebarCollapsed: { type: Boolean, default: false },
  activeSection: { type: String, default: 'feed' }
});
</script>

<style scoped>
.feed-sidebar {
  width: 300px;
  min-width: 70px;
  max-width: 300px;
  background: linear-gradient(180deg, #6366f1 0%, #553c9a 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: width 0.3s cubic-bezier(.4,2,.6,1);
  box-shadow: 2px 0 20px rgba(0,0,0,0.08);
  position: relative;
  z-index: 10;
  height: 92.5vh;
  max-height: 100dvh;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0;
  padding: 0;
}
.feed-sidebar.collapsed {
  width: 70px;
  min-width: 70px;
  max-width: 70px;
  transition: width 0.3s cubic-bezier(.4,2,.6,1);
}
.feed-sidebar.collapsed .sidebar-header {
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 6em;
  padding: 20px 8px 0 8px;
}
.feed-sidebar.collapsed .sidebar-header h2,
.feed-sidebar.collapsed .sidebar-header span {
  text-align: center;
  width: 100%;
}
.feed-sidebar.collapsed .toggle-btn {
  margin: 10px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.feed-sidebar.collapsed .nav-item span {
  display: none;
}
.feed-sidebar.collapsed .nav-item {
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 18px 0;
  margin: 0 auto 5px auto;
  width: 100%;
}
.feed-sidebar.collapsed .nav-item i {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 24px;
}
.feed-sidebar.collapsed .nav-section {
  text-align: center;
  width: 100%;
  font-size: 0.7rem;
  margin-left: 0;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.feed-sidebar.collapsed .user-profile {
  flex-direction: column;
  align-items: center;
  left: 0;
  padding: 10px 0;
}
.feed-sidebar.collapsed .user-info {
  display: none;
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  background: #4338ca;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  height: 6em;
}
.toggle-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.3s;
}
.toggle-btn:hover {
  background: rgba(255,255,255,0.1);
}
.sidebar-nav {
  padding: 24px 0 0 0;
  flex: 1;
}
.nav-section {
  font-size: 0.8rem;
  font-weight: 700;
  color: #b3b3ff;
  margin-left: 24px;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 14px 20px;
  border-radius: 8px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 10px 5px 10px;
  transition: background 0.2s, color 0.2s;
}
.nav-item.active, .nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}
.nav-item i {
  font-size: 20px;
}
.user-profile {
  margin-top: 24px;
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 16px;
  position: relative;
  left: 0.5em;
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
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
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
#theme-dark .feed-sidebar {
  background: linear-gradient(180deg, #23262F 0%, #181A20 100%) !important;
  color: #F1F1F1;
  box-shadow: 2px 0 20px rgba(79, 140, 255, 0.10);
  border-right: 1.5px solid #26334d;
}
#theme-dark .sidebar-header {
  background: #1A1D23 !important;
  border-bottom: 1px solid #26334d;
}
#theme-dark .toggle-btn {
  color: #A3C8FF;
}
#theme-dark .toggle-btn:hover {
  background: rgba(79, 140, 255, 0.10);
}
#theme-dark .nav-item {
  color: #B0B3B8 !important;
  background: transparent !important;
}
#theme-dark .nav-item.active,
#theme-dark .nav-item:hover {
  background: rgba(79, 140, 255, 0.10) !important;
  color: #4F8CFF !important;
}
#theme-dark .user-profile {
  border-top: 1px solid #26334d;
  border-bottom: 1px solid #26334d;
}
#theme-dark .avatar {
  background: linear-gradient(45deg, #4F8CFF, #06d6a0) !important;
}
#theme-dark .user-name {
  color: #A3C8FF !important;
}
#theme-dark .user-email {
  color: #85C1E9 !important;
}
</style> 