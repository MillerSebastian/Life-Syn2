# 📊 EatherDocs - Plataforma de Análisis de Datos con IA

## 🎯 Descripción del Proyecto

EatherDocs es una plataforma web moderna para análisis de datos que integra inteligencia artificial (Gemini AI) para proporcionar análisis automático de documentos, resúmenes inteligentes y asistencia virtual personalizada a través de "Docsito", nuestro asistente IA.

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado en **3 módulos principales**:

```
EatherDocs/
├── Frontend/          # Aplicación Vue.js 3
├── AIWorkflow/        # Servidor Node.js con Gemini AI
└── Backend/           # API REST (opcional)
```

## 🚀 Tecnologías Utilizadas

### Frontend

- **Vue.js 3** - Framework de JavaScript
- **Vue Router** - Enrutamiento
- **Vite** - Build tool
- **Bulma CSS** - Framework de estilos
- **Boxicons** - Iconografía
- **Axios** - Cliente HTTP

### Backend (AIWorkflow)

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Google Generative AI** - Integración con Gemini
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Parsing de requests
- **node-fetch** - Cliente HTTP para Node.js

### IA y Chatbot

- **Google Gemini 2.5 Flash** - Modelo de IA
- **Chatbase** - Widget de chat integrado
- **Docsito** - Asistente virtual personalizado

## 📁 Estructura Detallada

### Frontend (`/Frontend`)

```
Frontend/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── Sidebar.vue       # Barra lateral de navegación
│   │   ├── TopNavBar.vue     # Barra superior
│   │   ├── SummarizeFiles.vue # Componente principal de IA
│   │   ├── FileUpload.vue    # Subida de archivos
│   │   ├── CreateFiles.vue   # Creación de archivos
│   │   ├── DashboardSummary.vue # Resumen del dashboard
│   │   └── GraphStatus.vue   # Gráficos y estadísticas
│   ├── views/                # Páginas principales
│   │   ├── Layout.vue        # Layout principal
│   │   ├── Login.vue         # Página de login
│   │   ├── Dashboard.vue     # Dashboard principal
│   │   ├── Files.vue         # Gestión de archivos
│   │   ├── Analytics.vue     # Análisis y reportes
│   │   ├── Settings.vue      # Configuraciones
│   │   ├── CreateFiles.vue   # Crear archivos
│   │   └── SummarizeFiles.vue # Asistente Docsito
│   ├── router/
│   │   └── index.js          # Configuración de rutas
│   ├── stores/               # Estado global (Pinia)
│   ├── assets/               # Recursos estáticos
│   ├── App.vue               # Componente raíz
│   └── main.js               # Punto de entrada
├── public/                   # Archivos públicos
├── index.html                # HTML principal con Chatbase
├── package.json              # Dependencias
└── vite.config.js            # Configuración de Vite
```

### AIWorkflow (`/AIWorkflow`)

```
AIWorkflow/
├── index.js                  # Servidor principal con IA
├── controllers/              # Controladores (futuro)
├── services/                 # Servicios (futuro)
├── utils/                    # Utilidades (futuro)
├── package.json              # Dependencias
└── node_modules/             # Módulos de Node.js
```

## 🛣️ Sistema de Rutas

### Rutas del Frontend

| Ruta                | Componente         | Descripción             |
| ------------------- | ------------------ | ----------------------- |
| `/`                 | Redirect           | Redirige a `/login`     |
| `/login`            | Login.vue          | Página de autenticación |
| `/dashboard`        | Dashboard.vue      | Dashboard principal     |
| `/files`            | Files.vue          | Gestión de archivos     |
| `/analytics`        | Analytics.vue      | Análisis y reportes     |
| `/settings`         | Settings.vue       | Configuraciones         |
| `/crear-archivos`   | CreateFiles.vue    | Crear archivos          |
| `/resumir-archivos` | SummarizeFiles.vue | **Asistente Docsito**   |

### Endpoints del AIWorkflow

| Endpoint                | Método | Descripción                          |
| ----------------------- | ------ | ------------------------------------ |
| `/api/analyze-document` | POST   | Análisis de documentos con IA        |
| `/api/analyze-file`     | POST   | Análisis de archivos (PDF, imágenes) |
| `/api/test`             | GET    | Endpoint de prueba                   |
| `/api/health`           | GET    | Estado del servidor                  |

## 🤖 Integración con IA

### Docsito - Asistente Virtual

**Docsito** es nuestro asistente IA personalizado que:

- ✅ **Analiza documentos** en profundidad
- ✅ **Proporciona resúmenes** ejecutivos
- ✅ **Sugiere acciones** en la plataforma
- ✅ **Hace preguntas** para profundizar
- ✅ **Guía al usuario** de forma interactiva

### Configuración de Gemini AI

```javascript
// AIWorkflow/index.js
const GEMINI_API_KEY = "tu-api-key-aqui";
const GEMINI_MODEL = "gemini-1.5-flash";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
```

### Tipos de Análisis Disponibles

1. **`summary`** - Resumen ejecutivo (por defecto)
2. **`detailed`** - Análisis detallado completo
3. **`key_points`** - Puntos clave del documento

### Prompt Personalizado de Docsito

El sistema utiliza un prompt especializado que hace que Gemini actúe como "Docsito":

```javascript
const prompt = `Eres Docsito, un asistente virtual profesional, amable y empático, 
especializado en ayudar a los usuarios a entender y aprovechar al máximo nuestra 
plataforma de análisis de datos.

**Tu función principal:** Brindar apoyo exclusivo sobre el funcionamiento, 
características y uso de la plataforma.

**Contexto de la Plataforma:** La plataforma cuenta con tres apartados principales:
1. **Resumen de datos:** Para analizar datos existentes, obtener estadísticas, 
   gráficos y resúmenes automáticos.
2. **Crear datos:** Para generar conjuntos de datos desde cero.
3. **Subir archivos:** Para importar archivos en formatos PDF, Word, PowerPoint 
   y Excel (.xlsx) para análisis, resúmenes o transformaciones.

**Restricciones:**
- **Nunca responderá** preguntas no relacionadas con el funcionamiento de la plataforma
- **No responde** preguntas de temas externos (noticias, clima, recetas, etc.)
- Siempre recordará a los usuarios que su función es ayudarles dentro de la plataforma`;
```

## 💬 Chatbase Integration

El widget de Chatbase está integrado en `index.html` y proporciona soporte adicional:

```html
<!-- Chatbase Widget -->
<script>
  (function () {
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...arguments) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(arguments);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args) => target(prop, ...args);
        },
      });
    }
    const onLoad = function () {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "PCuYpvc2GjVym_2Ys7YBe";
      script.domain = "www.chatbase.co";
      document.body.appendChild(script);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
  })();
</script>
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **API Key de Google Gemini**

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd EatherDocs
```

### 2. Configurar AIWorkflow

```bash
cd AIWorkflow
npm install

# Configurar API Key de Gemini
# Editar index.js y agregar tu API key
const GEMINI_API_KEY = "tu-api-key-aqui";
```

### 3. Configurar Frontend

```bash
cd Frontend
npm install
```

### 4. Variables de Entorno

Crear archivo `.env` en Frontend:

```env
VITE_API_URL=http://localhost:3001
VITE_APP_TITLE=EatherDocs
```

## 🏃‍♂️ Ejecución del Proyecto

### 1. Iniciar AIWorkflow (Terminal 1)

```bash
cd AIWorkflow
node index.js
```

**Salida esperada:**

```
🚀 AIWorkflow Gemini API listening on port 3001
📊 Test endpoint: http://localhost:3001/api/test
💚 Health check: http://localhost:3001/api/health
📄 Document analysis: http://localhost:3001/api/analyze-document
📁 File analysis: http://localhost:3001/api/analyze-file
```

### 2. Iniciar Frontend (Terminal 2)

```bash
cd Frontend
npm run dev
```

**Salida esperada:**

```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 3. Acceder a la Aplicación

- **Frontend**: http://localhost:5173
- **AIWorkflow API**: http://localhost:3001

## 🔧 Configuración de Desarrollo

### Scripts Disponibles

```json
// Frontend/package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Configuración de Vite

```javascript
// Frontend/vite.config.js
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
      },
    },
  },
});
```

## 📊 Componentes Principales

### SummarizeFiles.vue (Asistente Docsito)

**Funcionalidades:**

- 📄 Análisis de documentos con IA
- 🤖 Integración con Gemini
- 💬 Respuestas interactivas
- 📊 Múltiples tipos de análisis
- 🎨 Interfaz moderna y responsiva

**Props y Events:**

```vue
<template>
  <SummarizeFiles @analysis-complete="handleAnalysis" @error="handleError" />
</template>
```

**Métodos principales:**

```javascript
// Métodos del componente
methods: {
  async analyzeDocument(text, analysisType = 'summary') {
    // Envía documento a AIWorkflow
  },
  handleFileUpload(file) {
    // Procesa archivo subido
  },
  displayAnalysis(result) {
    // Muestra resultado del análisis
  }
}
```

### Sidebar.vue (Navegación)

**Menú de navegación:**

- 🏠 Dashboard
- 📁 Archivos
- 📊 Analytics
- ⚙️ Configuración
- ➕ Crear Archivos
- 🤖 **Asistente Docsito** (Resumir Archivos)

### FileUpload.vue

**Soporte de archivos:**

- 📄 PDF
- 📊 Excel (.xlsx)
- 📝 Word (.docx)
- 📋 PowerPoint (.pptx)
- 🖼️ Imágenes

## 🔌 Integración Frontend-Backend

### Flujo de Datos Completo

1. **Usuario sube archivo** → FileUpload.vue
2. **Archivo se procesa** → Frontend (lectura de archivo)
3. **Datos se envían** → AIWorkflow API (`/api/analyze-document`)
4. **IA analiza** → Gemini AI (con prompt personalizado)
5. **Respuesta se recibe** → Frontend (JSON estructurado)
6. **Resultado se muestra** → SummarizeFiles.vue (formato HTML)

### Ejemplo de Request

```javascript
// Frontend → AIWorkflow
const response = await axios.post(
  "http://localhost:3001/api/analyze-document",
  {
    text: "Contenido del documento...",
    analysisType: "summary", // 'summary', 'detailed', 'key_points'
    userPrompt: "Prompt personalizado (opcional)",
  }
);
```

### Ejemplo de Response

```json
{
  "analysis": "Como Docsito, he analizado tu documento...",
  "analysisType": "summary",
  "wordCount": 150,
  "hasCustomPrompt": false,
  "processedAt": "2025-06-29T19:45:23.292Z"
}
```

### Manejo de Errores

```javascript
// AIWorkflow/index.js
function handleApiError(err, res) {
  console.error("Error detallado:", err);

  if (err.message.includes("API key")) {
    return res.status(401).json({ error: "API key inválida" });
  }

  if (err.message.includes("quota")) {
    return res.status(429).json({ error: "Límite de cuota excedido" });
  }

  return res.status(500).json({ error: "Error interno del servidor" });
}
```

## 🐛 Solución de Problemas

### Error: "Headers is not defined"

**Causa:** Problema de compatibilidad con Node.js
**Solución:** Ya implementada en `AIWorkflow/index.js`

```javascript
// Solución implementada
if (typeof global.Headers === "undefined") {
  try {
    const { Headers } = require("node-fetch");
    global.Headers = Headers;
  } catch (e) {
    // Fallback implementation
    global.Headers = class Headers {
      // Implementación completa con todos los métodos
    };
  }
}
```

### Error: "fetch is not defined"

**Causa:** Node.js no tiene fetch nativo
**Solución:** Ya implementada con node-fetch

```javascript
// Solución implementada
if (typeof global.fetch === "undefined") {
  try {
    const fetch = (...args) =>
      import("node-fetch").then(({ default: fetch }) => fetch(...args));
    global.fetch = fetch;
  } catch (e) {
    console.warn("No se pudo cargar node-fetch para fetch global");
  }
}
```

### Error: "API Key inválida"

**Causa:** API Key de Gemini incorrecta
**Solución:** Verificar API Key en `AIWorkflow/index.js`

### Error: "CORS"

**Causa:** Problemas de cross-origin
**Solución:** CORS ya configurado en AIWorkflow

```javascript
// CORS configurado
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
```

## 🔒 Seguridad

### API Keys

- ✅ **Nunca** subir API keys al repositorio
- ✅ Usar variables de entorno
- ✅ Rotar keys regularmente

### Validación de Datos

- ✅ Validación en frontend y backend
- ✅ Sanitización de inputs
- ✅ Límites de tamaño de archivo (50MB)

### Headers de Seguridad

```javascript
// Headers de seguridad recomendados
app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});
```

## 📈 Próximas Mejoras

### Funcionalidades Planificadas

- [ ] Chat en tiempo real con Docsito
- [ ] Historial de conversaciones
- [ ] Exportación de análisis (PDF/Excel)
- [ ] Análisis de múltiples archivos
- [ ] Dashboard con métricas avanzadas
- [ ] Sistema de usuarios y autenticación

### Mejoras Técnicas

- [ ] Base de datos para persistencia
- [ ] Cache de análisis
- [ ] Rate limiting
- [ ] Logs estructurados
- [ ] Tests automatizados

## 👥 Contribución

### Estructura de Commits

```
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: formato de código
refactor: refactorización
test: tests
chore: tareas de mantenimiento
```

### Flujo de Desarrollo

1. Crear rama feature: `git checkout -b feature/Nombre/nueva-funcionalidad`
2. Desarrollar cambios
3. Commit con mensaje descriptivo
4. Push y crear Pull Request
5. Code review
6. Merge a main

## 📞 Soporte

### Contacto del Equipo

- **Desarrollador Principal**: [Sebastian Rodelo]
- **Email**: [sebastianrodelog@gmail.com]

### Recursos Útiles

- 📚 [Documentación de Vue.js](https://vuejs.org/guide/)
- 🤖 [Google Generative AI](https://ai.google.dev/)
- 💬 [Chatbase Documentation](https://www.chatbase.co/docs)
- 🎨 [Bulma CSS](https://bulma.io/documentation/)

---

## 🎉 ¡Listo para Usar!

El proyecto está completamente configurado y listo para desarrollo. Sigue los pasos de instalación y ejecución para comenzar a trabajar con EatherDocs y su asistente IA Docsito.

**¡Happy Coding! 🚀**
