<template>
  <section class="section">
    <div class="container">
      <div class="hero is-info">
        <div class="hero-body">
          <h1 class="title">
            <span class="icon is-large">
              <i class="bx bx-bot"></i>
            </span>
            Asistente de Documentos - Docsito
          </h1>
          <p class="subtitle">
            Sube un documento y personaliza el análisis según tus necesidades
          </p>
        </div>
      </div>

      <!-- Sección de carga de archivos -->
      <div class="box">
        <h2 class="subtitle">
          <span class="icon">
            <i class="bx bx-upload"></i>
          </span>
          Subir Documento
        </h2>

        <div class="file has-name is-boxed is-large">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              @change="handleFile"
              accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="bx bx-upload"></i>
              </span>
              <span class="file-label">Selecciona un archivo...</span>
            </span>
            <span class="file-name" v-if="fileName">{{ fileName }}</span>
          </label>
        </div>

        <div class="field" v-if="file">
          <div class="control">
            <div class="tags">
              <span class="tag is-info">
                <span class="icon">
                  <i class="bx bx-file"></i>
                </span>
                <span>{{ getFileType() }}</span>
              </span>
              <span class="tag is-success">
                <span class="icon">
                  <i class="bx bx-check"></i>
                </span>
                <span>Listo para analizar</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de configuración del análisis -->
      <div class="box" v-if="file">
        <h2 class="subtitle">
          <span class="icon">
            <i class="bx bx-cog"></i>
          </span>
          Configurar Análisis
        </h2>

        <!-- Tipo de análisis -->
        <div class="field">
          <label class="label">Tipo de Análisis</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="analysisType">
                <option value="summary">Resumen Ejecutivo</option>
                <option value="detailed">Análisis Detallado</option>
                <option value="key_points">Puntos Clave</option>
                <option value="custom">Personalizado</option>
              </select>
            </div>
          </div>
          <p class="help">Selecciona el tipo de análisis que necesitas</p>
        </div>

        <!-- Prompt personalizado -->
        <div class="field" v-if="analysisType === 'custom' || customPrompt">
          <label class="label">
            Instrucciones Específicas
            <span class="tag is-light is-small">Opcional</span>
          </label>
          <div class="control">
            <textarea
              class="textarea"
              v-model="customPrompt"
              placeholder="Ejemplo: 'Resume los aspectos financieros', 'Extrae todas las fechas importantes', 'Analiza las conclusiones y recomendaciones', etc."
              rows="4"
            ></textarea>
          </div>
          <p class="help">
            Especifica qué quieres que Docsito analice o resuma del documento
          </p>
        </div>

        <!-- Ejemplos de prompts -->
        <div class="field" v-if="analysisType === 'custom'">
          <label class="label">Ejemplos de Instrucciones</label>
          <div class="buttons">
            <button
              class="button is-small is-outlined"
              @click="setExamplePrompt('financial')"
            >
              Análisis Financiero
            </button>
            <button
              class="button is-small is-outlined"
              @click="setExamplePrompt('timeline')"
            >
              Cronología y Fechas
            </button>
            <button
              class="button is-small is-outlined"
              @click="setExamplePrompt('conclusions')"
            >
              Conclusiones
            </button>
            <button
              class="button is-small is-outlined"
              @click="setExamplePrompt('technical')"
            >
              Aspectos Técnicos
            </button>
          </div>
        </div>

        <!-- Botón de análisis -->
        <div class="field">
          <div class="control">
            <button
              class="button is-primary is-large is-fullwidth"
              @click="analyzeDocument"
              :disabled="loading || !file"
              :class="{ 'is-loading': loading }"
            >
              <span class="icon">
                <i class="bx bx-bot"></i>
              </span>
              <span>Analizar con Docsito</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Estado de carga -->
      <div v-if="loading" class="box has-text-centered">
        <div class="content">
          <span class="icon is-large has-text-info">
            <i class="bx bx-loader-alt bx-spin bx-lg"></i>
          </span>
          <p class="title is-5">Docsito está analizando tu documento...</p>
          <p class="subtitle is-6">
            {{ getLoadingMessage() }}
          </p>
          <progress class="progress is-info" max="100">60%</progress>
        </div>
      </div>

      <!-- Resultados del análisis -->
      <div v-if="analysis && !loading" class="box">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <h2 class="title is-4">
                <span class="icon has-text-info">
                  <i class="bx bx-bot"></i>
                </span>
                Análisis de Docsito
              </h2>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="buttons">
                <button
                  class="button is-small is-info is-outlined"
                  @click="copyToClipboard"
                >
                  <span class="icon">
                    <i class="bx bx-copy"></i>
                  </span>
                  <span>Copiar</span>
                </button>
                <button
                  class="button is-small is-success is-outlined"
                  @click="downloadAnalysis"
                >
                  <span class="icon">
                    <i class="bx bx-download"></i>
                  </span>
                  <span>Descargar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Información del análisis -->
        <div class="tags mb-4">
          <span class="tag is-info">
            <span class="icon">
              <i class="bx bx-file"></i>
            </span>
            <span>{{ getAnalysisTypeLabel() }}</span>
          </span>
          <span class="tag is-success" v-if="analysisData.hasCustomPrompt">
            <span class="icon">
              <i class="bx bx-customize"></i>
            </span>
            <span>Personalizado</span>
          </span>
          <span class="tag is-light" v-if="analysisData.wordCount">
            <span class="icon">
              <i class="bx bx-text"></i>
            </span>
            <span>{{ analysisData.wordCount }} palabras</span>
          </span>
        </div>

        <!-- Contenido del análisis -->
        <div class="notification is-info is-light">
          <div class="content" v-html="formattedAnalysis"></div>
        </div>

        <!-- Opciones adicionales -->
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <span class="tag">Analizado el</span>
              <span class="tag is-info">{{
                formatDate(analysisData.processedAt)
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Historial de análisis -->
      <div v-if="analysisHistory.length > 0" class="box">
        <h2 class="subtitle">
          <span class="icon">
            <i class="bx bx-history"></i>
          </span>
          Historial de Análisis
        </h2>

        <div
          v-for="(item, index) in analysisHistory"
          :key="index"
          class="box is-small"
        >
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <div>
                  <p class="heading">{{ item.fileName }}</p>
                  <p class="title is-6">{{ item.analysisType }}</p>
                </div>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button
                  class="button is-small"
                  @click="loadPreviousAnalysis(item)"
                >
                  Ver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import * as XLSX from "xlsx";

export default {
  data() {
    return {
      file: null,
      fileName: "",
      analysis: "",
      analysisData: {},
      analysisType: "summary",
      customPrompt: "",
      loading: false,
      analysisHistory: [],
    };
  },
  computed: {
    formattedAnalysis() {
      if (!this.analysis) return "";
      return this.analysis
        .replace(/\n/g, "<br>")
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>")
        .replace(/#{3}\s*(.*?)(?=\n|$)/g, "<h4>$1</h4>")
        .replace(/#{2}\s*(.*?)(?=\n|$)/g, "<h3>$1</h3>")
        .replace(/#{1}\s*(.*?)(?=\n|$)/g, "<h2>$1</h2>");
    },
  },
  methods: {
    handleFile(event) {
      this.file = event.target.files[0];
      this.fileName = this.file.name;
      this.analysis = "";
    },

    getFileType() {
      if (!this.file) return "";
      const extension = this.fileName.split(".").pop().toLowerCase();
      const types = {
        pdf: "PDF",
        doc: "Word",
        docx: "Word",
        ppt: "PowerPoint",
        pptx: "PowerPoint",
        xls: "Excel",
        xlsx: "Excel",
        txt: "Texto",
      };
      return types[extension] || "Documento";
    },

    setExamplePrompt(type) {
      const examples = {
        financial:
          "Analiza todos los aspectos financieros del documento: números, presupuestos, costos, ingresos, rentabilidad y proyecciones económicas.",
        timeline:
          "Extrae todas las fechas importantes y crea una cronología detallada de eventos, hitos y plazos mencionados en el documento.",
        conclusions:
          "Enfócate únicamente en las conclusiones, recomendaciones, hallazgos principales y resultados finales del documento.",
        technical:
          "Analiza los aspectos técnicos: especificaciones, metodologías, procesos, tecnologías y detalles técnicos mencionados.",
      };
      this.customPrompt = examples[type];
    },

    getAnalysisTypeLabel() {
      const labels = {
        summary: "Resumen Ejecutivo",
        detailed: "Análisis Detallado",
        key_points: "Puntos Clave",
        custom: "Personalizado",
      };
      return labels[this.analysisType] || "Análisis";
    },

    getLoadingMessage() {
      const messages = [
        "Procesando el contenido del documento...",
        "Analizando la información...",
        "Generando el resumen personalizado...",
        "Casi listo...",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    },

    async analyzeDocument() {
      if (!this.file) return;

      this.loading = true;
      this.analysis = "";

      try {
        let endpoint = "/api/analyze-document";
        let requestData = {
          analysisType: this.analysisType,
          userPrompt: this.customPrompt,
        };

        // Determinar si es un archivo que necesita procesamiento especial
        const extension = this.fileName.split(".").pop().toLowerCase();

        if (["pdf"].includes(extension)) {
          // Para PDFs, usar el endpoint de archivos
          const fileData = await this.fileToBase64(this.file);
          endpoint = "/api/analyze-file";
          requestData = {
            ...requestData,
            fileData: fileData.split(",")[1], // Remover el prefijo data:
            mimeType: this.file.type,
          };
        } else {
          // Para otros archivos, convertir a texto
          let text = "";
          if (extension === "xlsx") {
            text = await this.readXLSXAsText(this.file);
          } else {
            text = await this.readFileAsText(this.file);
          }
          requestData.text = text;
        }

        const response = await axios.post(
          `http://localhost:3001${endpoint}`,
          requestData
        );

        this.analysis = response.data.analysis;
        this.analysisData = response.data;

        // Guardar en historial
        this.addToHistory();
      } catch (err) {
        console.error("Error en análisis:", err);
        this.analysis =
          "Error al analizar el archivo. Por favor, intenta de nuevo.";
      } finally {
        this.loading = false;
      }
    },

    fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },

    readFileAsText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(e);
        reader.readAsText(file);
      });
    },

    readXLSXAsText(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            let text = "";
            workbook.SheetNames.forEach((sheetName) => {
              const sheet = XLSX.utils.sheet_to_json(
                workbook.Sheets[sheetName],
                { header: 1 }
              );
              text += `Hoja: ${sheetName}\n`;
              sheet.forEach((row) => {
                text += row.join(" | ") + "\n";
              });
              text += "\n";
            });
            resolve(text);
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = (e) => reject(e);
        reader.readAsArrayBuffer(file);
      });
    },

    addToHistory() {
      const historyItem = {
        fileName: this.fileName,
        analysisType: this.getAnalysisTypeLabel(),
        analysis: this.analysis,
        analysisData: this.analysisData,
        timestamp: new Date().toISOString(),
      };

      this.analysisHistory.unshift(historyItem);
      if (this.analysisHistory.length > 5) {
        this.analysisHistory.pop();
      }
    },

    loadPreviousAnalysis(item) {
      this.analysis = item.analysis;
      this.analysisData = item.analysisData;
    },

    copyToClipboard() {
      navigator.clipboard.writeText(this.analysis).then(() => {
        // Aquí podrías mostrar una notificación de éxito
        console.log("Copiado al portapapeles");
      });
    },

    downloadAnalysis() {
      const blob = new Blob([this.analysis], { type: "text/plain" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `analisis_${this.fileName}_${
        new Date().toISOString().split("T")[0]
      }.txt`;
      a.click();
      window.URL.revokeObjectURL(url);
    },

    formatDate(dateString) {
      return new Date(dateString).toLocaleString();
    },
  },
};
</script>

<style scoped>
.hero {
  margin-bottom: 2rem;
}

.box.is-small {
  padding: 1rem;
}

.notification.is-info.is-light {
  border-left: 4px solid #3273dc;
}

.progress {
  margin-top: 1rem;
}

.tags.mb-4 {
  margin-bottom: 1.5rem !important;
}
</style>
