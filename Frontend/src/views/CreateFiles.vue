<template>
  <div class="create-files">
    <h1>Crear Documentos con IA</h1>
    <div class="create-content">
      <div class="info-section">
        <div class="info-card">
          <i class="bx bx-brain"></i>
          <h3>Generación Inteligente</h3>
          <p>
            Utiliza IA para crear documentos profesionales basados en tus
            descripciones
          </p>
        </div>
        <div class="info-card">
          <i class="bx bx-time"></i>
          <h3>Rápido y Eficiente</h3>
          <p>
            Genera documentos completos en segundos con solo una descripción
          </p>
        </div>
        <div class="info-card">
          <i class="bx bx-customize"></i>
          <h3>Personalizable</h3>
          <p>Adapta el contenido según tus necesidades específicas</p>
        </div>
      </div>

      <div class="create-section">
        <CreateFiles />
      </div>

      <div class="templates-section">
        <h2>Plantillas Disponibles</h2>
        <div class="templates-grid">
          <div
            class="template-card"
            v-for="template in templates"
            :key="template.id"
          >
            <div class="template-icon">
              <i :class="template.icon"></i>
            </div>
            <h4>{{ template.name }}</h4>
            <p>{{ template.description }}</p>
            <button class="btn-template" @click="useTemplate(template)">
              Usar Plantilla
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CreateFiles from "../components/CreateFiles.vue";

const templates = ref([
  {
    id: 1,
    name: "Informe Ejecutivo",
    description: "Informe profesional para presentaciones ejecutivas",
    icon: "bx bx-file-doc",
    prompt:
      "Crear un informe ejecutivo sobre [tema] con análisis detallado y recomendaciones",
  },
  {
    id: 2,
    name: "Propuesta Comercial",
    description: "Propuesta comercial atractiva para clientes",
    icon: "bx bx-briefcase",
    prompt:
      "Desarrollar una propuesta comercial para [servicio/producto] con beneficios y precios",
  },
  {
    id: 3,
    name: "Manual de Usuario",
    description: "Manual técnico para usuarios finales",
    icon: "bx bx-book-open",
    prompt:
      "Crear un manual de usuario para [producto/sistema] con instrucciones paso a paso",
  },
  {
    id: 4,
    name: "Análisis de Mercado",
    description: "Análisis completo del mercado objetivo",
    icon: "bx bx-trending-up",
    prompt:
      "Realizar un análisis de mercado para [industria/sector] con datos y tendencias",
  },
  {
    id: 5,
    name: "Plan de Marketing",
    description: "Estrategia de marketing integral",
    icon: "bx bx-bullseye",
    prompt:
      "Desarrollar un plan de marketing para [producto/empresa] con estrategias y tácticas",
  },
  {
    id: 6,
    name: "Contrato Legal",
    description: "Contrato legal estándar y profesional",
    icon: "bx bx-gavel",
    prompt:
      "Generar un contrato legal para [tipo de acuerdo] con cláusulas estándar",
  },
]);

const useTemplate = (template) => {
  // Aquí puedes implementar la lógica para usar la plantilla
  console.log("Usando plantilla:", template.name);
  // Podrías emitir un evento o usar un store para comunicar con el componente CreateFiles
};
</script>

<style scoped>
.create-files {
  padding: 20px;
  width: 100%;
}

.create-files h1 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.create-content {
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

.create-section {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.templates-section {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.templates-section h2 {
  margin: 0 0 20px 0;
  color: #333;
  text-align: center;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.template-card {
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.template-card:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.template-icon {
  margin-bottom: 15px;
}

.template-icon i {
  font-size: 36px;
  color: #667eea;
}

.template-card h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.template-card p {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 14px;
  line-height: 1.4;
}

.btn-template {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease;
}

.btn-template:hover {
  background: #5a6fd8;
}

/* Responsive */
@media (max-width: 768px) {
  .info-section {
    grid-template-columns: 1fr;
  }

  .templates-grid {
    grid-template-columns: 1fr;
  }
}
</style>
