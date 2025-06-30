<template>
  <div class="file-upload">
    <div
      class="upload-area"
      :class="{ dragover: isDragOver, 'has-files': uploadedFiles.length > 0 }"
      @drop="handleDrop"
      @dragover.prevent="isDragOver = true"
      @dragleave.prevent="isDragOver = false"
      @click="triggerFileInput"
    >
      <div class="upload-content">
        <i class="bx bx-cloud-upload"></i>
        <h3>Subir Archivos</h3>
        <p>Arrastra archivos aquí o haz clic para seleccionar</p>
        <input
          ref="fileInput"
          type="file"
          multiple
          @change="handleFileSelect"
          style="display: none"
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
        />
      </div>
    </div>

    <div v-if="uploadedFiles.length > 0" class="files-list">
      <h4>Archivos Seleccionados:</h4>
      <div
        class="file-item"
        v-for="(file, index) in uploadedFiles"
        :key="index"
      >
        <div class="file-info">
          <i class="bx bx-file"></i>
          <div class="file-details">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-size">{{ formatFileSize(file.size) }}</span>
          </div>
        </div>
        <button class="remove-btn" @click="removeFile(index)">
          <i class="bx bx-x"></i>
        </button>
      </div>

      <div class="upload-actions">
        <button class="btn-upload" @click="uploadFiles" :disabled="uploading">
          <i class="bx bx-upload"></i>
          {{ uploading ? "Subiendo..." : "Subir Archivos" }}
        </button>
        <button class="btn-clear" @click="clearFiles">Limpiar Lista</button>
      </div>
    </div>

    <div v-if="uploadProgress.length > 0" class="upload-progress">
      <div
        class="progress-item"
        v-for="(progress, index) in uploadProgress"
        :key="index"
      >
        <div class="progress-info">
          <span>{{ progress.fileName }}</span>
          <span>{{ progress.percentage }}%</span>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: progress.percentage + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["files-uploaded", "upload-error"]);

const fileInput = ref(null);
const isDragOver = ref(false);
const uploadedFiles = ref([]);
const uploading = ref(false);
const uploadProgress = ref([]);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileSelect = (event) => {
  const files = Array.from(event.target.files);
  addFiles(files);
};

const handleDrop = (event) => {
  isDragOver.value = false;
  const files = Array.from(event.dataTransfer.files);
  addFiles(files);
};

const addFiles = (files) => {
  files.forEach((file) => {
    if (!uploadedFiles.value.find((f) => f.name === file.name)) {
      uploadedFiles.value.push(file);
    }
  });
};

const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1);
};

const clearFiles = () => {
  uploadedFiles.value = [];
  uploadProgress.value = [];
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const uploadFiles = async () => {
  if (uploadedFiles.value.length === 0) return;

  uploading.value = true;
  uploadProgress.value = uploadedFiles.value.map((file) => ({
    fileName: file.name,
    percentage: 0,
  }));

  try {
    for (let i = 0; i < uploadedFiles.value.length; i++) {
      const file = uploadedFiles.value[i];
      const formData = new FormData();
      formData.append("file", file);

      // Simular progreso de subida
      const interval = setInterval(() => {
        if (uploadProgress.value[i].percentage < 90) {
          uploadProgress.value[i].percentage += 10;
        }
      }, 100);

      // Aquí iría la llamada real a la API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación

      clearInterval(interval);
      uploadProgress.value[i].percentage = 100;
    }

    emit("files-uploaded", uploadedFiles.value);
    clearFiles();
  } catch (error) {
    emit("upload-error", error);
  } finally {
    uploading.value = false;
  }
};
</script>

<style scoped>
.file-upload {
  width: 100%;
}

.upload-area {
  border: 2px dashed #ddd;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  background: #f9f9f9;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.upload-area:hover {
  border-color: #667eea;
  background: #f0f4ff;
}

.upload-area.dragover {
  border-color: #667eea;
  background: #e8f2ff;
  transform: scale(1.02);
}

.upload-area.has-files {
  border-color: #28a745;
  background: #f0fff4;
}

.upload-content i {
  font-size: 48px;
  color: #667eea;
  margin-bottom: 15px;
}

.upload-content h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.upload-content p {
  margin: 0;
  color: #666;
}

.files-list {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.files-list h4 {
  margin: 0 0 15px 0;
  color: #333;
}

.file-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}

.file-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-info i {
  font-size: 20px;
  color: #667eea;
}

.file-details {
  display: flex;
  flex-direction: column;
}

.file-name {
  font-weight: 500;
  color: #333;
}

.file-size {
  font-size: 12px;
  color: #666;
}

.remove-btn {
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.remove-btn:hover {
  background: #c0392b;
}

.upload-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-upload,
.btn-clear {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn-upload {
  background: #667eea;
  color: white;
}

.btn-upload:hover:not(:disabled) {
  background: #5a6fd8;
}

.btn-upload:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.btn-clear {
  background: #6c757d;
  color: white;
}

.btn-clear:hover {
  background: #5a6268;
}

.upload-progress {
  margin-top: 20px;
}

.progress-item {
  margin-bottom: 10px;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 14px;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #667eea;
  transition: width 0.3s ease;
}
</style>
