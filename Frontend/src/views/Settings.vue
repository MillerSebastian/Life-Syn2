<template>
  <div class="settings">
    <h1>Configuraciones</h1>
    <div class="settings-content">
      <div class="settings-section">
        <h2>Perfil de Usuario</h2>
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            v-model="userProfile.name"
            placeholder="Tu nombre"
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            v-model="userProfile.email"
            placeholder="tu@email.com"
          />
        </div>
        <div class="form-group">
          <label>Organización</label>
          <input
            type="text"
            v-model="userProfile.organization"
            placeholder="Tu organización"
          />
        </div>
        <button class="btn-save">Guardar Cambios</button>
      </div>

      <div class="settings-section">
        <h2>Preferencias</h2>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="preferences.notifications" />
            Notificaciones por email
          </label>
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" v-model="preferences.autoSave" />
            Guardado automático
          </label>
        </div>
        <div class="form-group">
          <label>Idioma</label>
          <select v-model="preferences.language">
            <option value="es">Español</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <button class="btn-save">Guardar Preferencias</button>
      </div>

      <div class="settings-section">
        <h2>Seguridad</h2>
        <div class="form-group">
          <label>Contraseña Actual</label>
          <input type="password" placeholder="Contraseña actual" />
        </div>
        <div class="form-group">
          <label>Nueva Contraseña</label>
          <input type="password" placeholder="Nueva contraseña" />
        </div>
        <div class="form-group">
          <label>Confirmar Contraseña</label>
          <input type="password" placeholder="Confirmar contraseña" />
        </div>
        <button class="btn-save">Cambiar Contraseña</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const userProfile = ref({
  name: "",
  email: "",
  organization: "",
});

const preferences = ref({
  notifications: true,
  autoSave: true,
  language: "es",
});
</script>

<style scoped>
.settings {
  padding: 20px;
  width: 100%;
}

.settings h1 {
  color: #333;
  margin-bottom: 30px;
}

.settings-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.settings-section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.settings-section h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-weight: 500;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #667eea;
}

.checkbox-label {
  display: flex !important;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.btn-save {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
}

.btn-save:hover {
  background: #5a6fd8;
}
</style>
