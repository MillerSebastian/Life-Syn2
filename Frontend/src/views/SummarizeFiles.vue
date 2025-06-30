<template>
  <div class="summarize-files">
    <h1>Resumir Archivos con IA</h1>
    <div class="summarize-content">
      <div class="info-section">
        <div class="info-card">
          <i class="bx bx-git-repo-forked"></i>
          <h3>Análisis Inteligente</h3>
          <p>Extrae información clave de documentos largos y complejos</p>
        </div>
        <div class="info-card">
          <i class="bx bx-time"></i>
          <h3>Procesamiento Rápido</h3>
          <p>Obtén resúmenes precisos en segundos</p>
        </div>
        <div class="info-card">
          <i class="bx bx-target-lock"></i>
          <h3>Precisión Alta</h3>
          <p>Mantiene la información más importante del documento original</p>
        </div>
      </div>

      <div class="summarize-section">
        <SummarizeFiles />
      </div>

      <div class="recent-summaries">
        <h2>Resúmenes Recientes</h2>
        <div class="summaries-grid">
          <div
            class="summary-card"
            v-for="summary in recentSummaries"
            :key="summary.id"
          >
            <div class="summary-header">
              <div class="file-info">
                <i class="bx bx-file"></i>
                <div>
                  <h4>{{ summary.fileName }}</h4>
                  <span class="file-date">{{ summary.date }}</span>
                </div>
              </div>
              <div class="summary-stats">
                <span class="stat">
                  <i class="bx bx-text"></i>
                  {{ summary.originalWords }} → {{ summary.summaryWords }}
                </span>
                <span class="stat">
                  <i class="bx bx-time"></i>
                  {{ summary.processingTime }}
                </span>
              </div>
            </div>
            <div class="summary-content">
              <p>{{ summary.summary }}</p>
            </div>
            <div class="summary-actions">
              <button class="btn-action">
                <i class="bx bx-copy"></i>
                Copiar
              </button>
              <button class="btn-action">
                <i class="bx bx-download"></i>
                Descargar
              </button>
              <button class="btn-action">
                <i class="bx bx-show"></i>
                Ver Original
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="supported-formats">
        <h2>Formatos Soportados</h2>
        <div class="formats-grid">
          <div
            class="format-item"
            v-for="format in supportedFormats"
            :key="format.type"
          >
            <i :class="format.icon"></i>
            <span>{{ format.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SummarizeFiles from "../components/SummarizeFiles.vue";

const recentSummaries = ref([
  {
    id: 1,
    fileName: "Informe_Anual_2023.pdf",
    date: "2024-01-15",
    originalWords: 2500,
    summaryWords: 250,
    processingTime: "2.3s",
    summary:
      "El informe anual muestra un crecimiento del 15% en ventas, con mejoras significativas en eficiencia operativa y expansión a nuevos mercados...",
  },
  {
    id: 2,
    fileName: "Manual_Usuario.docx",
    date: "2024-01-14",
    originalWords: 1800,
    summaryWords: 180,
    processingTime: "1.8s",
    summary:
      "El manual incluye instrucciones de instalación, configuración inicial, funciones principales y solución de problemas comunes...",
  },
  {
    id: 3,
    fileName: "Propuesta_Comercial.pdf",
    date: "2024-01-13",
    originalWords: 3200,
    summaryWords: 320,
    processingTime: "3.1s",
    summary:
      "La propuesta presenta una solución integral con beneficios claros, precios competitivos y cronograma de implementación detallado...",
  },
]);

const supportedFormats = ref([
  { type: "pdf", name: "PDF", icon: "bx bxs-file-pdf" },
  { type: "doc", name: "Word (.doc)", icon: "bx bxs-file-doc" },
  { type: "docx", name: "Word (.docx)", icon: "bx bxs-file-doc" },
  { type: "txt", name: "Texto (.txt)", icon: "bx bxs-file-txt" },
  { type: "rtf", name: "RTF", icon: "bx bxs-file" },
  { type: "odt", name: "OpenDocument", icon: "bx bxs-file" },
]);
</script>

<style scoped>
.summarize-files {
  padding: 20px;
  width: 100%;
}

.summarize-files h1 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.summarize-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
}

.info-card i {
  font-size: 48px;
  color: #667eea;
  margin-bottom: 15px;
}

.info-card h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.info-card p {
  margin: 0;
  color: #666;
  line-height: 1.5;
}

.summarize-section {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recent-summaries {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recent-summaries h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.summaries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.summary-card {
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.summary-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.file-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.file-info i {
  font-size: 24px;
  color: #667eea;
}

.file-info h4 {
  margin: 0 0 5px 0;
  color: #333;
  font-size: 16px;
}

.file-date {
  font-size: 12px;
  color: #666;
}

.summary-stats {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stat {
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 5px;
}

.summary-content {
  margin-bottom: 15px;
}

.summary-content p {
  margin: 0;
  color: #333;
  line-height: 1.5;
  font-size: 14px;
}

.summary-actions {
  display: flex;
  gap: 10px;
}

.btn-action {
  background: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.btn-action:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.supported-formats {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.supported-formats h2 {
  margin: 0 0 20px 0;
  color: #333;
  text-align: center;
}

.formats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
}

.format-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.format-item:hover {
  background: #e9ecef;
  transform: translateY(-2px);
}

.format-item i {
  font-size: 24px;
  color: #667eea;
}

.format-item span {
  font-weight: 500;
  color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .info-section {
    grid-template-columns: 1fr;
  }

  .summaries-grid {
    grid-template-columns: 1fr;
  }

  .formats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .summary-header {
    flex-direction: column;
    gap: 10px;
  }

  .summary-actions {
    flex-wrap: wrap;
  }
}
</style>
