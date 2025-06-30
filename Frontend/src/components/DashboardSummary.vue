<template>
  <section class="section dashboard-summary-section">
    <div class="container">
      <!-- Cards de resumen arriba -->
      <div class="columns is-multiline mb-3">
        <div class="column is-3" v-for="card in summaryCards" :key="card.title">
          <div class="card has-text-centered">
            <div class="card-content py-3 px-2">
              <span class="icon is-large">
                <i
                  :class="[
                    'bx',
                    card.icon,
                    'has-text-' + card.color,
                    'is-size-2',
                  ]"
                ></i>
              </span>
              <p class="title is-4">{{ card.value }}</p>
              <p class="subtitle is-6">{{ card.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Fila superior: Diario (izq) y Circular (der) -->
      <div class="columns mb-2 is-variable is-2">
        <div class="column is-6-desktop is-12-mobile">
          <div class="card dashboard-graph-card-full">
            <div
              class="card-content py-3 px-3 is-flex is-flex-direction-column is-align-items-center"
            >
              <h3 class="title is-7 mb-2">Actividad diaria</h3>
              <div class="dashboard-canvas-wrapper">
                <canvas
                  ref="lineChart"
                  id="lineChart"
                  style="width: 100%; height: 260px"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6-desktop is-12-mobile">
          <div class="card dashboard-graph-card-full">
            <div
              class="card-content py-3 px-3 is-flex is-flex-direction-column is-align-items-center"
            >
              <h3 class="title is-7 has-text-centered mb-2">
                Documentos por tipo
              </h3>
              <div class="dashboard-canvas-wrapper">
                <canvas
                  ref="pieChart"
                  id="pieChart"
                  style="width: 100%; height: 260px"
                ></canvas>
              </div>
              <div
                class="legend mt-2 is-flex is-justify-content-center is-flex-wrap-wrap"
              >
                <div
                  v-for="(label, idx) in pieLabels"
                  :key="label"
                  class="mr-2 mb-1 is-flex is-align-items-center"
                >
                  <span
                    :style="{
                      width: '12px',
                      height: '12px',
                      background: pieColors[idx],
                      display: 'inline-block',
                      borderRadius: '3px',
                      marginRight: '7px',
                    }"
                  ></span>
                  <span style="font-size: 14px">{{ label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Fila inferior: Barras -->
      <div class="columns mb-0">
        <div class="column is-12">
          <div class="card dashboard-graph-card-full">
            <div class="card-content py-3 px-3">
              <h3 class="title is-7 mb-2">Actividad mensual</h3>
              <div class="dashboard-canvas-wrapper">
                <canvas
                  ref="barChart"
                  id="barChart"
                  style="width: 100%; height: 260px"
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import Chart from "chart.js/auto";

const summaryCards = [
  { title: "Creados", value: 124, icon: "bx-file", color: "primary" },
  { title: "Resumidos", value: 87, icon: "bx-file-find", color: "success" },
  { title: "Pendientes", value: 36, icon: "bx-time-five", color: "warning" },
  { title: "Total", value: 247, icon: "bx-folder", color: "info" },
];

const pieLabels = ["Word", "Excel", "PowerPoint", "PDF", "TXT", "Otros"];
const pieData = [45, 22, 13, 60, 18, 12];
const pieColors = [
  "#3273dc",
  "#23d160",
  "#ffdd57",
  "#ff3860",
  "#00d1b2",
  "#b86bff",
];

const pieChart = ref(null);
const lineChart = ref(null);
const barChart = ref(null);

onMounted(async () => {
  await nextTick();
  // Pie chart
  new Chart(pieChart.value, {
    type: "pie",
    data: {
      labels: pieLabels,
      datasets: [{ data: pieData, backgroundColor: pieColors }],
    },
    options: {
      plugins: { legend: { display: false } },
      cutout: "60%",
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Line chart (actividad diaria)
  new Chart(lineChart.value, {
    type: "line",
    data: {
      labels: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
      datasets: [
        {
          label: "Visitas",
          data: [12, 19, 8, 15, 22, 10, 25],
          fill: true,
          backgroundColor: "rgba(255,56,96,0.15)",
          borderColor: "#ff3860",
          pointBackgroundColor: "#ff3860",
          tension: 0.4,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: "#f0f0f0" } },
        x: { grid: { display: false } },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // Bar chart (actividad mensual)
  new Chart(barChart.value, {
    type: "bar",
    data: {
      labels: ["Enero", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"],
      datasets: [
        {
          label: "Creados",
          data: [12, 19, 15, 22, 30, 25, 18, 27],
          backgroundColor: "#3273dc",
        },
        {
          label: "Resumidos",
          data: [8, 14, 10, 18, 22, 20, 12, 19],
          backgroundColor: "#23d160",
        },
      ],
    },
    options: {
      plugins: { legend: { display: true } },
      scales: {
        y: { beginAtZero: true, grid: { color: "#f0f0f0" } },
        x: { grid: { display: false } },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>

<style scoped>
.dashboard-summary-section {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  min-height: 100vh;
}
.card {
  box-shadow: 0 2px 8px rgba(50, 115, 220, 0.07);
  border-radius: 12px;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(50, 115, 220, 0.15);
}
.icon.is-large {
  margin-bottom: 10px;
}
.legend span {
  font-size: 14px;
}
.card-content {
  padding: 0.75rem 0.5rem !important;
}
.dashboard-graph-card-full {
  width: 100%;
  margin: 0 auto;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dashboard-canvas-wrapper {
  width: 100%;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title.is-7 {
  font-size: 1.1rem;
  font-weight: 600;
}
@media (max-width: 1024px) {
  .dashboard-summary-section {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .card-content {
    padding: 0.5rem 0.25rem !important;
  }
  .dashboard-graph-card-full {
    min-height: 220px;
  }
  .dashboard-canvas-wrapper {
    height: 180px;
  }
}
</style>
