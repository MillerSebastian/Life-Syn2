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

const { db } = require("./firebase"); // Importar la instancia de Firestore

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Aumentado para documentos grandes

// Endpoint para crear una tarea en Firestore
app.post("/api/tasks", async (req, res) => {
  /*
    Este endpoint recibe los datos de una tarea desde el frontend y la guarda en Firestore.
    Espera un JSON con los campos: title, description, priority, dueDate, category, progress, status, userId
  */
  try {
    const {
      title = "",
      description = "",
      priority = "media",
      dueDate = "",
      category = "",
      progress = 0,
      status = "todo",
      userId = null,
    } = req.body;

    if (!userId || !title.trim()) {
      return res
        .status(400)
        .json({ error: "Faltan campos obligatorios: userId o title" });
    }

    // Crear la tarea en Firestore
    const docRef = await db.collection("tasks").add({
      title,
      description,
      priority,
      dueDate,
      category,
      progress,
      status,
      userId,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({
      message: "Tarea creada exitosamente",
      id: docRef.id,
    });
  } catch (err) {
    console.error("Error al crear tarea:", err);
    res.status(500).json({ error: "Error interno al crear la tarea" });
  }
});

// Endpoint para crear un evento en Firestore
app.post("/api/events", async (req, res) => {
  /*
    Espera un JSON con: title, description, date, time, type, duration, location, userId
  */
  try {
    const {
      title = "",
      description = "",
      date = "",
      time = "",
      type = "personal",
      duration = 60,
      location = "",
      userId = null,
    } = req.body;

    if (!userId || !title.trim() || !date || !time) {
      return res.status(400).json({
        error: "Faltan campos obligatorios: userId, title, date o time",
      });
    }

    const docRef = await db.collection("events").add({
      title,
      description,
      date,
      time,
      type,
      duration,
      location,
      userId,
      createdAt: new Date().toISOString(),
    });

    res
      .status(201)
      .json({ message: "Evento creado exitosamente", id: docRef.id });
  } catch (err) {
    console.error("Error al crear evento:", err);
    res.status(500).json({ error: "Error interno al crear el evento" });
  }
});

// Endpoint para crear una nota en Firestore
app.post("/api/notes", async (req, res) => {
  /*
    Espera un JSON con: title, content, color, userId
  */
  try {
    const {
      title = "",
      content = "",
      color = "#fbbf24",
      userId = null,
    } = req.body;

    if (!userId || !title.trim() || !content.trim()) {
      return res
        .status(400)
        .json({ error: "Faltan campos obligatorios: userId, title o content" });
    }

    const docRef = await db.collection("notes").add({
      title,
      content,
      color,
      userId,
      date: new Date().toLocaleDateString(),
      createdAt: new Date().toISOString(),
    });

    res
      .status(201)
      .json({ message: "Nota creada exitosamente", id: docRef.id });
  } catch (err) {
    console.error("Error al crear nota:", err);
    res.status(500).json({ error: "Error interno al crear la nota" });
  }
});

// Endpoint para crear una comida en Firestore
app.post("/api/meals", async (req, res) => {
  /*
    Espera un JSON con: name, description, type, time, calories, ingredients, nutrition, date, userId
  */
  try {
    const {
      name = "",
      description = "",
      type = "breakfast",
      time = "",
      calories = 0,
      ingredients = [],
      nutrition = { protein: 0, carbs: 0, fat: 0 },
      date = new Date().toISOString().split("T")[0],
      userId = null,
    } = req.body;

    if (!userId || !name.trim() || !type || !date) {
      return res.status(400).json({
        error: "Faltan campos obligatorios: userId, name, type o date",
      });
    }

    const docRef = await db.collection("meals").add({
      name,
      description,
      type,
      time,
      calories,
      ingredients,
      nutrition,
      date,
      userId,
      createdAt: new Date().toISOString(),
    });

    res
      .status(201)
      .json({ message: "Comida creada exitosamente", id: docRef.id });
  } catch (err) {
    console.error("Error al crear comida:", err);
    res.status(500).json({ error: "Error interno al crear la comida" });
  }
});

// Endpoint para crear una transacción en el wallet en Firestore
app.post("/api/transactions", async (req, res) => {
  /*
    Espera un JSON con: type, title, category, amount, date, notes, userId
  */
  try {
    const {
      type = "expense",
      title = "",
      category = "",
      amount = 0,
      date = "",
      notes = "",
      userId = null,
    } = req.body;

    if (!userId || !title.trim() || !amount || !date) {
      return res.status(400).json({
        error: "Faltan campos obligatorios: userId, title, amount o date",
      });
    }

    const docRef = await db.collection("transactions").add({
      type,
      title,
      category,
      amount: Number(amount),
      date,
      notes,
      userId,
      createdAt: new Date().toISOString(),
    });

    res
      .status(201)
      .json({ message: "Transacción creada exitosamente", id: docRef.id });
  } catch (err) {
    console.error("Error al crear transacción:", err);
    res.status(500).json({ error: "Error interno al crear la transacción" });
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
