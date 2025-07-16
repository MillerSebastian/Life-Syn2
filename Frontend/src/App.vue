<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
</style>

<style>
@import url("https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

:root {
  /* ===== PALETA AZUL MARINO ===== */
  --navy-deep: #0f172a;
  --navy-classic: #1e3a8a;
  --navy-vibrant: #3b82f6;
  --navy-light: #60a5fa;
  --navy-pastel: #93c5fd;
  --navy-very-light: #e0e7ff;
  --navy-ice: #f1f5f9;
  
  /* ===== COLORES PRINCIPALES ===== */
  --primary: #1e3a8a;
  --primary-light: #3b82f6;
  --primary-dark: #0f172a;
  
  --secondary: #64748b;
  --secondary-light: #94a3b8;
  
  --accent: #06d6a0;
  --accent-light: #34d399;
  
  --warning: #fbbf24;
  --warning-light: #fcd34d;
  
  /* ===== COLORES DE FONDO ===== */
  --background: #ffffff;
  --background-secondary: #f1f5f9;
  --background-navy: #e0e7ff;
  
  /* ===== COLORES DE TEXTO ===== */
  --text: #0f172a;
  --text-secondary: #1e3a8a;
  --text-light: #60a5fa;
  
  /* ===== COLORES DE INTERFAZ ===== */
  --border: #93c5fd;
  --border-light: #e0e7ff;
  
  /* ===== SOMBRAS ===== */
  --shadow: rgba(30, 58, 138, 0.1);
  --shadow-hover: rgba(30, 58, 138, 0.2);
  --shadow-navy: rgba(15, 23, 42, 0.15);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--background-secondary);
  color: var(--text);
  line-height: 1.6;
}

#app {
  width: 100%;
  min-height: 100vh;
}

/* Estilos para las páginas de login */
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    var(--primary) 0%,
    var(--primary-dark) 100%
  );
}

/* Utilidades de color */
.text-primary {
  color: var(--primary) !important;
}
.text-secondary {
  color: var(--secondary) !important;
}
.text-accent {
  color: var(--accent) !important;
}
.text-warning {
  color: var(--warning) !important;
}
.text-background {
  color: var(--background) !important;
}

.bg-primary {
  background-color: var(--primary) !important;
}
.bg-secondary {
  background-color: var(--secondary) !important;
}
.bg-accent {
  background-color: var(--accent) !important;
}
.bg-warning {
  background-color: var(--warning) !important;
}
.bg-background {
  background-color: var(--background) !important;
}

/* Estilos de componentes comunes */
.card {
  background: var(--background);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 16px var(--shadow-hover);
  transform: translateY(-2px);
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.btn-primary {
  background: var(--primary);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
}

.btn-accent {
  background: var(--accent);
  color: white;
}

.btn-accent:hover {
  background: var(--accent-light);
  transform: translateY(-1px);
}

.btn-warning {
  background: var(--warning);
  color: var(--text);
}

.btn-warning:hover {
  background: var(--warning-light);
  transform: translateY(-1px);
}

/* Scrollbar personalizada */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-secondary);
}

::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-light);
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
