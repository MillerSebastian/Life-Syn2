<template>
  <div class="files">
    <h1>Gestión de Archivos</h1>
    <div class="files-content">
      <div class="upload-section">
        <h2>Subir Archivos</h2>
        <div class="upload-area">
          <input type="file" multiple @change="handleFileUpload" />
          <p>Arrastra archivos aquí o haz clic para seleccionar</p>
        </div>
      </div>

      <div class="files-list">
        <h2>Archivos Subidos</h2>
        <div class="file-item" v-for="file in files" :key="file.name">
          <div class="file-info">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-size">{{ formatFileSize(file.size) }}</span>
          </div>
          <div class="file-actions">
            <button class="btn-action">Ver</button>
            <button class="btn-action delete">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const files = ref([]);

const handleFileUpload = (event) => {
  const uploadedFiles = Array.from(event.target.files);
  files.value = [...files.value, ...uploadedFiles];
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};
</script>

<style scoped>
.files {
  padding: 20px;
  width: 100%;
}

.files h1 {
  color: #333;
  margin-bottom: 30px;
}

.files-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.upload-section,
.files-list {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.upload-section h2,
.files-list h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  background: #f9f9f9;
}

.upload-area input[type="file"] {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  cursor: pointer;
}

.upload-area p {
  margin: 0;
  color: #666;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.file-item:last-child {
  border-bottom: none;
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.file-name {
  font-weight: 500;
  color: #333;
}

.file-size {
  font-size: 12px;
  color: #666;
}

.file-actions {
  display: flex;
  gap: 10px;
}

.btn-action {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  background: #667eea;
  color: white;
}

.btn-action.delete {
  background: #e74c3c;
}

.btn-action:hover {
  opacity: 0.8;
}
</style>
