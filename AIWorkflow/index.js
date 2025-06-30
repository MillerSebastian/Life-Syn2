const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Solución para el problema de Headers y fetch en Node.js
if (typeof global.Headers === "undefined") {
  try {
    const { Headers } = require("node-fetch");
    global.Headers = Headers;
  } catch (e) {
    // Fallback si node-fetch no está disponible
    global.Headers = class Headers {
      constructor(init = {}) {
        this._headers = new Map();
        if (init) {
          Object.keys(init).forEach((key) => {
            this.set(key, init[key]);
          });
        }
      }
      set(name, value) {
        this._headers.set(name.toLowerCase(), value);
      }
      get(name) {
        return this._headers.get(name.toLowerCase());
      }
      has(name) {
        return this._headers.has(name.toLowerCase());
      }
      append(name, value) {
        const existing = this.get(name);
        if (existing) {
          this.set(name, existing + ", " + value);
        } else {
          this.set(name, value);
        }
      }
      delete(name) {
        this._headers.delete(name.toLowerCase());
      }
      entries() {
        return this._headers.entries();
      }
      keys() {
        return this._headers.keys();
      }
      values() {
        return this._headers.values();
      }
      forEach(callback, thisArg) {
        this._headers.forEach((value, key) => {
          callback.call(thisArg, value, key, this);
        });
      }
    };
  }
}

// Definir fetch globalmente para Node.js
if (typeof global.fetch === "undefined") {
  try {
    const fetch = (...args) =>
      import("node-fetch").then(({ default: fetch }) => fetch(...args));
    global.fetch = fetch;
  } catch (e) {
    console.warn("No se pudo cargar node-fetch para fetch global");
  }
}

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Aumentado para documentos grandes

const GEMINI_API_KEY = "GEMINI_API_KEY";
const GEMINI_MODEL = "gemini-1.5-flash";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Endpoint principal con prompts personalizados
app.post("/api/analyze-document", async (req, res) => {
  try {
    const { text, userPrompt, analysisType = "summary" } = req.body;

    if (!text) {
      return res.status(400).json({ error: "No text provided" });
    }

    if (text.length < 10) {
      return res.status(400).json({ error: "Text too short for analysis" });
    }

    // Crear el prompt basado en el tipo de análisis y entrada del usuario
    const prompt = createPrompt(text, userPrompt, analysisType);

    console.log("Enviando solicitud a Gemini...");

    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = response.text();

    console.log("Análisis generado exitosamente");

    res.json({
      analysis,
      analysisType,
      wordCount: text.split(" ").length,
      hasCustomPrompt: !!userPrompt,
      processedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error detallado en /api/analyze-document:", err);
    handleApiError(err, res);
  }
});

// Endpoint para análisis con archivo base64 (PDFs, imágenes, etc.)
app.post("/api/analyze-file", async (req, res) => {
  try {
    const {
      fileData,
      mimeType,
      userPrompt,
      analysisType = "summary",
    } = req.body;

    if (!fileData) {
      return res.status(400).json({ error: "No file data provided" });
    }

    const prompt = createFilePrompt(userPrompt, analysisType);

    console.log("Analizando archivo con Gemini...");

    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContent([
      {
        inlineData: {
          data: fileData,
          mimeType: mimeType,
        },
      },
      { text: prompt },
    ]);

    const response = await result.response;
    const analysis = response.text();

    console.log("Análisis de archivo generado exitosamente");

    res.json({
      analysis,
      analysisType,
      fileType: mimeType,
      hasCustomPrompt: !!userPrompt,
      processedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("Error en análisis de archivo:", err);
    handleApiError(err, res);
  }
});

// Función para crear prompts dinámicos
function createPrompt(text, userPrompt, analysisType) {
  const basePrompt = `Eres Docsito, un asistente virtual profesional especializado en análisis de documentos.

**DOCUMENTO A ANALIZAR:**
${text.substring(0, 12000)}${text.length > 12000 ? "..." : ""}

---`;

  if (userPrompt) {
    // Si el usuario proporciona un prompt específico
    return `${basePrompt}

**INSTRUCCIONES ESPECÍFICAS DEL USUARIO:**
${userPrompt}

**IMPORTANTE:** Responde exactamente lo que el usuario solicita, manteniéndote enfocado en el documento proporcionado. Si la solicitud no está relacionada con el documento, indícalo amablemente.`;
  }

  // Prompts predefinidos según el tipo de análisis
  switch (analysisType) {
    case "detailed":
      return `${basePrompt}

## **ANÁLISIS DETALLADO DEL DOCUMENTO**

### **RESUMEN EJECUTIVO**
(Resumen completo de 200-300 palabras explicando todo el contenido)

### **ESTRUCTURA Y ORGANIZACIÓN**
- Tipo de documento
- Secciones principales
- Flujo de información

### **CONTENIDO CLAVE**
- **Datos importantes:** números, fechas, estadísticas
- **Conceptos principales:** ideas centrales
- **Conclusiones:** hallazgos y resultados
- **Recomendaciones:** si las hay

### **ANÁLISIS CRÍTICO**
- Fortalezas del documento
- Posibles debilidades o vacíos
- Relevancia y actualidad

### **APLICACIÓN PRÁCTICA**
- Cómo usar este documento en la plataforma
- Sugerencias para análisis adicionales
- Datos que podrían complementarse`;

    case "key_points":
      return `${basePrompt}

## **PUNTOS CLAVE DEL DOCUMENTO**

### **LO MÁS IMPORTANTE (Top 5)**
1. [Punto más relevante]
2. [Segundo punto importante]
3. [Tercer punto clave]
4. [Cuarto punto relevante]
5. [Quinto punto importante]

### **DATOS ESPECÍFICOS**
- **Números clave:** estadísticas, porcentajes, cantidades
- **Fechas importantes:** cronología relevante
- **Personas/Entidades:** actores principales mencionados

### **CONCLUSIONES PRINCIPALES**
- Hallazgos centrales
- Resultados obtenidos
- Implicaciones importantes

### **PREGUNTAS PARA PROFUNDIZAR**
1. [Pregunta específica sobre el contenido]
2. [Pregunta para análisis adicional]
3. [Pregunta sobre aplicación práctica]`;

    default: // summary
      return `${basePrompt}

## **RESUMEN EJECUTIVO**
(Máximo 150 palabras explicando de qué trata el documento)

## **PUNTOS CLAVE**
- Lista los 4-5 puntos más importantes
- Extrae datos, números o fechas relevantes
- Identifica conclusiones principales

## **TIPO DE DOCUMENTO**
Especifica si es: informe, presentación, datos financieros, investigación, etc.

## **RECOMENDACIONES DE USO EN LA PLATAFORMA**
Sugiere cómo el usuario puede aprovechar este documento en:
- **Resumen de datos:** Para análisis estadístico
- **Crear datos:** Para generar conjuntos relacionados  
- **Subir archivos:** Para comparar con otros documentos

## **PREGUNTAS PARA PROFUNDIZAR**
Haz 2-3 preguntas específicas para ayudar al usuario a analizar mejor el documento.`;
  }
}

// Función para crear prompts para archivos multimedia
function createFilePrompt(userPrompt, analysisType) {
  if (userPrompt) {
    return `Eres Docsito, un asistente especializado en análisis de documentos.

INSTRUCCIONES ESPECÍFICAS: ${userPrompt}

Por favor, analiza el archivo adjunto según las instrucciones proporcionadas. Mantente enfocado en el contenido del archivo.`;
  }

  return `Eres Docsito, un asistente especializado en análisis de documentos.

Por favor, analiza este archivo y proporciona:

## **RESUMEN DEL CONTENIDO**
Describe qué contiene el archivo

## **INFORMACIÓN CLAVE**
- Datos importantes
- Elementos destacados
- Estructura del documento

## **TIPO DE ARCHIVO Y USO**
- Qué tipo de documento es
- Cómo puede aprovecharse en la plataforma

## **RECOMENDACIONES**
Sugerencias para el usuario sobre cómo utilizar este archivo`;
}

// Manejo de errores mejorado
function handleApiError(err, res) {
  if (err.message.includes("API_KEY")) {
    res.status(401).json({
      error: "Error de autenticación: Verifica tu API key de Gemini",
    });
  } else if (err.message.includes("QUOTA_EXCEEDED")) {
    res.status(429).json({
      error: "Límite de API excedido. Intenta más tarde.",
    });
  } else if (err.message.includes("CONTENT_FILTER")) {
    res.status(400).json({
      error: "El contenido fue filtrado. Intenta con otro documento.",
    });
  } else if (err.message.includes("INVALID_ARGUMENT")) {
    res.status(400).json({
      error: "Formato de archivo no soportado o datos inválidos.",
    });
  } else {
    res.status(500).json({
      error: "Error interno del servidor",
      details: err.message,
    });
  }
}

// Endpoint de prueba
app.get("/api/test", (req, res) => {
  res.json({
    message: "AIWorkflow Gemini API funcionando correctamente",
    timestamp: new Date().toISOString(),
    model: GEMINI_MODEL,
    endpoints: [
      "/api/analyze-document",
      "/api/analyze-file",
      "/api/test",
      "/api/health",
    ],
  });
});

// Endpoint para verificar salud de la API
app.get("/api/health", async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
    const result = await model.generateContent("Responde solo: OK");
    const response = await result.response;
    const text = response.text();

    res.json({
      status: "healthy",
      geminiConnection: text.includes("OK") ? "working" : "partial",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    res.status(500).json({
      status: "unhealthy",
      error: err.message,
      timestamp: new Date().toISOString(),
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 AIWorkflow Gemini API listening on port ${PORT}`);
  console.log(`📊 Test endpoint: http://localhost:${PORT}/api/test`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
  console.log(
    `📄 Document analysis: http://localhost:${PORT}/api/analyze-document`
  );
  console.log(`📁 File analysis: http://localhost:${PORT}/api/analyze-file`);
});
