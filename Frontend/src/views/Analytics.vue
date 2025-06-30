<template>
  <div class="analytics">
    <h1>Análisis y Estadísticas</h1>
    <div class="analytics-content">
      <div class="chart-section">
        <h2>Procesamiento de Documentos</h2>
        <div class="chart-container">
          <div class="chart-placeholder">
            <p>Gráfico de procesamiento</p>
            <div class="chart-bars">
              <div class="bar" style="height: 60%"></div>
              <div class="bar" style="height: 80%"></div>
              <div class="bar" style="height: 45%"></div>
              <div class="bar" style="height: 90%"></div>
              <div class="bar" style="height: 70%"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="metrics-grid">
        <div class="metric-card">
          <h3>Tiempo Promedio</h3>
          <p class="metric-value">2.5 min</p>
          <p class="metric-label">Por documento</p>
        </div>
        <div class="metric-card">
          <h3>Precisión</h3>
          <p class="metric-value">94%</p>
          <p class="metric-label">Tasa de éxito</p>
        </div>
        <div class="metric-card">
          <h3>Documentos</h3>
          <p class="metric-value">1,247</p>
          <p class="metric-label">Procesados hoy</p>
        </div>
        <div class="metric-card">
          <h3>Eficiencia</h3>
          <p class="metric-value">87%</p>
          <p class="metric-label">Optimización</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Lógica de analytics aquí
</script>

<style scoped>
.analytics {
  padding: 20px;
  width: 100%;
}

.analytics h1 {
  color: #333;
  margin-bottom: 30px;
}

.analytics-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.chart-section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chart-section h2 {
  margin: 0 0 20px 0;
  color: #333;
}

.chart-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder {
  text-align: center;
  color: #666;
}

.chart-bars {
  display: flex;
  align-items: end;
  gap: 20px;
  height: 200px;
  margin-top: 20px;
}

.bar {
  width: 40px;
  background: linear-gradient(to top, #667eea, #764ba2);
  border-radius: 5px 5px 0 0;
  min-height: 20px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.metric-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.metric-card h3 {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 16px;
}

.metric-value {
  font-size: 36px;
  font-weight: bold;
  color: #667eea;
  margin: 0 0 5px 0;
}

.metric-label {
  margin: 0;
  color: #999;
  font-size: 14px;
}
</style>
