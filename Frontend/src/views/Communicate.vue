<template>
  <div class="communicate-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <h1 class="title is-2 text-primary">CommunitySync</h1>
        <p class="subtitle is-6 text-secondary">
          Conecta y colabora con tu equipo
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="content-section">
        <div class="card">
          <div class="card-content">
            <h2 class="title is-4">Bienvenido a la sección de comunicación</h2>
            <p class="subtitle is-6">
              Aquí podrás gestionar tus comunicaciones y colaboraciones.
            </p>
            <div class="features-grid">
              <div class="feature-item">
                <i class="bx bx-message-square-detail"></i>
                <h3>Mensajes</h3>
                <p>Gestiona tus conversaciones</p>
              </div>
              <div class="feature-item">
                <i class="bx bx-group"></i>
                <h3>Equipos</h3>
                <p>Colabora con tu equipo</p>
              </div>
              <div class="feature-item">
                <i class="bx bx-calendar-check"></i>
                <h3>Reuniones</h3>
                <p>Programa y gestiona reuniones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica del componente aquí
</script>

<style scoped>
.communicate-page {
  padding: 2rem 0;
  min-height: 100vh;
  background: var(--background-secondary);
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.content-section {
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: var(--background);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
  overflow: hidden;
}

.card-content {
  padding: 2rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.feature-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--background-secondary);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-item i {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.feature-item h3 {
  margin-bottom: 0.5rem;
  color: var(--text);
}

.feature-item p {
  color: var(--secondary);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .communicate-page {
    padding: 1rem 0;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>