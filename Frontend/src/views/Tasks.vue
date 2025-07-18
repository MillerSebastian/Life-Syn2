<template>
  <div class="tasks-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <h1 class="title is-2 text-primary">Gestión de Tareas</h1>
        <p class="subtitle is-6 text-secondary">
          Organiza y prioriza tus actividades diarias
        </p>
      </div>

      <!-- Controles principales -->
      <div class="controls-section mb-4">
        <div
          class="is-flex is-justify-content-space-between is-align-items-center"
        >
          <div class="is-flex is-align-items-center gap-3">
            <button class="btn btn-primary" @click="showAddTaskModal = true">
              <i class="bx bx-plus mr-2"></i>Nueva Tarea
            </button>
            <button class="btn btn-accent" @click="showAddNoteModal = true">
              <i class="bx bx-sticker mr-2"></i>Agregar Nota
            </button>
          </div>
          <div class="is-flex is-align-items-center gap-2">
            <span class="text-secondary">Filtrar por:</span>
            <select v-model="filterPriority" class="select is-small">
              <option value="">Todas las prioridades</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Tableros Kanban -->
      <div class="kanban-boards">
        <div
          class="kanban-column"
          v-for="column in kanbanColumns"
          :key="column.id"
          @dragover.prevent
          @drop="dropTask($event, column.id)"
        >
          <div class="column-header">
            <h3 class="title is-5 has-text-white-ter">{{ column.title }}</h3>
            <span class="task-count">{{ column.tasks.length }}</span>
          </div>
          <div class="column-content">
            <div
              v-for="task in getFilteredTasks(column.id)"
              :key="task.id"
              :id="'task-' + task.id"
              class="task-card"
              :class="'priority-' + task.priority"
              draggable="true"
              @dragstart="dragStart($event, task)"
              @dragend="dragEnd"
              @click="selectTask(task)"
            >
              <div class="task-header">
                <span
                  class="task-priority-badge"
                  :class="'priority-' + task.priority"
                >
                  {{ task.priority }}
                </span>
                <div class="task-actions">
                  <button class="btn-icon" @click.stop="editTask(task)">
                    <i class="bx bx-edit"></i>
                  </button>
                  <button class="btn-icon" @click.stop="deleteTask(task.id)">
                    <i class="bx bx-trash"></i>
                  </button>
                </div>
              </div>
              <div class="task-content">
                <h4 class="task-title">{{ task.title }}</h4>
                <p class="task-description">{{ task.description }}</p>
                <div class="task-meta">
                  <span class="task-date">
                    <i class="bx bx-calendar mr-1"></i>{{ task.dueDate }}
                  </span>
                  <span v-if="task.category" class="task-category">
                    <i class="bx bx-tag mr-1"></i>{{ task.category }}
                  </span>
                </div>
              </div>
              <div class="task-footer">
                <div class="task-progress" v-if="task.progress !== undefined">
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :style="{ width: task.progress + '%' }"
                    ></div>
                  </div>
                  <span class="progress-text">{{ task.progress }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stickers de Notas -->
      <div class="notes-section mt-5">
        <h2 class="title is-4 mb-4">Notas Rápidas</h2>
        <div class="notes-grid">
          <div
            v-for="note in notes"
            :key="note.id"
            :id="'note-' + note.id"
            class="note-sticker"
            :style="{ backgroundColor: note.color }"
            @click="editNote(note)"
          >
            <div class="note-header">
              <span class="note-date">{{ note.date }}</span>
              <button class="btn-icon" @click.stop="deleteNote(note.id)">
                <i class="bx bx-x"></i>
              </button>
            </div>
            <div class="note-content">
              <h4 class="note-title">{{ note.title }}</h4>
              <p class="note-text">{{ note.content }}</p>
            </div>
          </div>
          <div class="note-sticker add-note" @click="showAddNoteModal = true">
            <div class="add-note-content">
              <i class="bx bx-plus is-size-1"></i>
              <p>Agregar Nota</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para agregar/editar tarea -->
    <div class="modal" :class="{ 'is-active': showAddTaskModal }">
      <div class="modal-background" @click="showAddTaskModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ editingTask ? "Editar Tarea" : "Nueva Tarea" }}
          </p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Título</label>
            <div class="control">
              <input
                v-model="taskForm.title"
                class="input"
                type="text"
                placeholder="Título de la tarea"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
              <textarea
                v-model="taskForm.description"
                class="textarea"
                placeholder="Descripción de la tarea"
              ></textarea>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label">Prioridad</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model="taskForm.priority">
                      <option value="baja">Baja</option>
                      <option value="media">Media</option>
                      <option value="alta">Alta</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label">Fecha límite</label>
                <div class="control">
                  <input v-model="taskForm.dueDate" class="input" type="date" />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Categoría</label>
            <div class="control">
              <input
                v-model="taskForm.category"
                class="input"
                type="text"
                placeholder="Categoría (opcional)"
              />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot buttons">
          <button class="btn btn-primary" @click="saveTask">Guardar</button>
          <button class="btn button is-danger has-text-white-bis" @click="showAddTaskModal = false">
            Cancelar
          </button>
        </footer>
      </div>
    </div>

    <!-- Modal para agregar/editar nota -->
    <div class="modal" :class="{ 'is-active': showAddNoteModal }">
      <div class="modal-background" @click="showAddNoteModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ editingNote ? "Editar Nota" : "Nueva Nota" }}
          </p>
          <button class="delete" @click="showAddNoteModal = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Título</label>
            <div class="control">
              <input
                v-model="noteForm.title"
                class="input"
                type="text"
                placeholder="Título de la nota"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Contenido</label>
            <div class="control">
              <textarea
                v-model="noteForm.content"
                class="textarea"
                placeholder="Contenido de la nota"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Color</label>
            <div class="control">
              <div class="color-picker">
                <div
                  v-for="color in noteColors"
                  :key="color"
                  class="color-option"
                  :style="{ backgroundColor: color }"
                  :class="{ selected: noteForm.color === color }"
                  @click="noteForm.color = color"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot buttons">
          <button class="btn btn-primary" @click="saveNote">Guardar</button>
          <button class="btn button is-danger has-text-white-bis" @click="showAddNoteModal = false">
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch, nextTick } from "vue";
import { db, auth } from "../../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { useRoute } from "vue-router";
import { alertQuestion, alertSuccess } from "@/components/alert";

// Estado de la aplicación
const showAddTaskModal = ref(false);
const showAddNoteModal = ref(false);
const editingTask = ref(null);
const editingNote = ref(null);
const filterPriority = ref("");

// Formularios
const taskForm = reactive({
  title: "",
  description: "",
  priority: "media",
  dueDate: "",
  category: "",
  progress: 0,
  status: "todo", // nuevo campo para el tablero
});

const noteForm = reactive({
  title: "",
  content: "",
  color: "#fbbf24",
});

// Kanban dinámico desde Firestore
const kanbanColumns = ref([
  { id: "todo", title: "Por Hacer", tasks: [] },
  { id: "progress", title: "En Progreso", tasks: [] },
  { id: "completed", title: "Completadas", tasks: [] },
]);

// Notas rápidas desde Firestore
const notes = ref([]);

// Escuchar tareas en tiempo real
const getUserId = () => auth.currentUser?.uid;

onMounted(() => {
  onSnapshot(collection(db, "tasks"), (snapshot) => {
    const userId = getUserId();
    if (!userId) return;
    const allTasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const userTasks = allTasks.filter((t) => t.userId === userId);
    // Limpiar columnas
    kanbanColumns.value.forEach((col) => (col.tasks = []));
    userTasks.forEach((task) => {
      // Asignar a la columna correspondiente
      const col = kanbanColumns.value.find((c) => c.id === task.status);
      if (col) col.tasks.push(task);
    });
  });

  // Notas en tiempo real (ahora filtradas por usuario)
  onSnapshot(collection(db, "notes"), (snapshot) => {
    const userId = getUserId();
    if (!userId) return;
    notes.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((n) => n.userId === userId);
  });
});

const route = useRoute();
const highlightedId = ref(null);

watch(
  () => route.query.highlight,
  async (val) => {
    if (val) {
      highlightedId.value = val;
      await nextTick();
      // Tarea
      let el = document.getElementById("task-" + val);
      if (el) {
        el.classList.add("highlighted-search");
        setTimeout(() => {
          el.classList.remove("highlighted-search");
        }, 2000);
      }
      // Nota
      el = document.getElementById("note-" + val);
      if (el) {
        el.classList.add("highlighted-search");
        setTimeout(() => {
          el.classList.remove("highlighted-search");
        }, 2000);
      }
    }
  },
  { immediate: true }
);

// Guardar tarea (crear o actualizar)
const saveTask = async () => {
  const userId = getUserId();
  if (!userId) return;
  if (editingTask.value) {
    await updateDoc(doc(db, "tasks", editingTask.value.id), {
      ...taskForm,
      userId,
    });
  } else {
    await addDoc(collection(db, "tasks"), { ...taskForm, userId });
  }
  showAddTaskModal.value = false;
  editingTask.value = null;
  Object.assign(taskForm, {
    title: "",
    description: "",
    priority: "media",
    dueDate: "",
    category: "",
    progress: 0,
    status: "todo",
  });
};

// Eliminar tarea
const deleteTask = async (id) => {
  const result= await alertQuestion("¿deseas eliminar la tarea?")
  if(!result.isConfirmed) return;
  await deleteDoc(doc(db, "tasks", id));
  alertSuccess(" eliminada exitosamente")
};

// Editar tarea
const editTask = (task) => {
  editingTask.value = task;
  Object.assign(taskForm, task);
  showAddTaskModal.value = true;
};

const noteColors = [
  "#fbbf24",
  "#06d6a0",
  "#6366f1",
  "#64748b",
  "#ef4444",
  "#8b5cf6",
];

// Funciones
const getFilteredTasks = (columnId) => {
  const column = kanbanColumns.value.find((col) => col.id === columnId);
  if (!column) return [];

  if (!filterPriority.value) return column.tasks;

  return column.tasks.filter((task) => task.priority === filterPriority.value);
};

const selectTask = (task) => {
  editingTask.value = task;
  Object.assign(taskForm, task);
  showAddTaskModal.value = true;
};

const editNote = (note) => {
  editingNote.value = note;
  Object.assign(noteForm, note);
  showAddNoteModal.value = true;
};

const deleteNote = async (noteId) => {
  const result= await alertQuestion("¿quieres eliminar la nota?")
  if(!result.isConfirmed) return;
  alertSuccess("eliminada exitosamente")
  await deleteDoc(doc(db, "notes", noteId));
};

const saveNote = async () => {
  if (!noteForm.title.trim() || !noteForm.content.trim()) return;
  const userId = getUserId();
  if (!userId) return;
  if (editingNote.value) {
    // Editar nota existente
    await updateDoc(doc(db, "notes", editingNote.value.id), {
      ...noteForm,
      userId,
    });
  } else {
    // Crear nueva nota
    await addDoc(collection(db, "notes"), {
      ...noteForm,
      date: new Date().toLocaleDateString(),
      userId,
    });
    alertSuccess("guardado exitosamente")
  }
  resetNoteForm();
  showAddNoteModal.value = false;
};

const resetNoteForm = () => {
  Object.assign(noteForm, {
    title: "",
    content: "",
    color: "#fbbf24",
  });
  editingNote.value = null;
};

const draggedTask = ref(null);

const dragStart = (event, task) => {
  draggedTask.value = task;
  event.target.style.opacity = "0.5";
  event.target.style.transform = "rotate(5deg)";
};

const dragEnd = (event) => {
  event.target.style.opacity = "1";
  event.target.style.transform = "rotate(0deg)";
  draggedTask.value = null;
};

const dropTask = async (event, newStatus) => {
  event.preventDefault();
  if (!draggedTask.value) return;

  try {
    await updateDoc(doc(db, "tasks", draggedTask.value.id), {
      status: newStatus,
    });
  } catch (error) {
    console.error("Error al mover la tarea:", error);
  }
};
</script>

<style scoped>
.tasks-page {
  padding: 2rem 0;
  min-height: 100vh;
  background: var(--background-secondary);
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.controls-section {
  background: var(--background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
}

.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}

/* Kanban Boards */
.kanban-boards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.kanban-column {
  background: var(--background);
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
  overflow: hidden;
  transition: all 0.3s ease;
}

.kanban-column.drag-over {
  background: var(--background-secondary);
  border: 2px dashed var(--primary);
  transform: scale(1.02);
}

.column-header {
  background: var(--primary);
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 0;
}

.task-count {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.column-content {
  padding: 1rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Task Cards */
.task-card {
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1rem;
  cursor: grab;
  transition: all 0.3s ease;
  border-left: 4px solid var(--primary);
}

.task-card:active {
  cursor: grabbing;
}

.task-card:hover {
  box-shadow: 0 4px 16px var(--shadow-hover);
  transform: translateY(-2px);
}

.task-card.dragging {
  opacity: 0.5;
  transform: rotate(5deg) scale(1.05);
  z-index: 1000;
}

.task-card.priority-alta {
  border-left-color: #ef4444;
}

.task-card.priority-media {
  border-left-color: #fbbf24;
}

.task-card.priority-baja {
  border-left-color: #06d6a0;
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.task-priority-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.priority-alta {
  background: #fef2f2;
  color: #dc2626;
}

.priority-media {
  background: #fffbeb;
  color: #d97706;
}

.priority-baja {
  background: #f0fdf4;
  color: #059669;
}

.task-actions {
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.task-card:hover .task-actions {
  opacity: 1;
}

.btn-icon {
  background: none;
  border: none;
  padding: 0.25rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--secondary);
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--background-secondary);
  color: var(--primary);
}

.task-content {
  margin-bottom: 1rem;
}

.task-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.task-description {
  font-size: 0.875rem;
  color: var(--secondary);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.task-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: var(--secondary);
}

.task-footer {
  margin-top: auto;
}

.task-progress {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: var(--background-secondary);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--accent);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: var(--secondary);
  min-width: 40px;
}

/* Notes Section */
.notes-section {
  background: var(--background);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.note-sticker {
  background: var(--warning);
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 150px;
  display: flex;
  flex-direction: column;
}

.note-sticker:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.note-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.note-date {
  font-size: 0.75rem;
  opacity: 0.8;
  font-weight: 500;
}

.note-content {
  flex: 1;
}

.note-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.note-text {
  font-size: 0.875rem;
  line-height: 1.4;
  color: var(--text);
}

.add-note {
  background: var(--background-secondary);
  border: 2px dashed var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  transition: all 0.3s ease;
}

.add-note:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.add-note-content {
  text-align: center;
}

.add-note-content p {
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Modal Styles */
.modal-card {
  border-radius: 12px;
  overflow: hidden;
}

.modal-card-head {
  background: var(--primary);
  color: white;
}

.modal-card-title {
  color: white;
}

/* Color Picker */
.color-picker {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.color-option {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 0.3s ease;
}

.color-option:hover {
  transform: scale(1.1);
}

.color-option.selected {
  border-color: var(--text);
}

/* Responsive */
@media (max-width: 1024px) {
  .kanban-boards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .notes-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .tasks-page {
    padding: 1rem 0;
  }

  .controls-section {
    padding: 1rem;
  }

  .column-content {
    min-height: 300px;
  }

  .notes-grid {
    grid-template-columns: 1fr;
  }
}

.column-header h3,
.card-header h3,
.card-content h4,
.card-content h3 {
  padding: 0.5rem 0.75rem;
  font-size: 1.15rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
}

.column-header {
  min-width: 0;
}

.card-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--background);
  min-width: 0;
}

.card-content {
  min-width: 0;
}

@media (max-width: 600px) {
  .column-header h3,
  .card-header h3,
  .card-content h4,
  .card-content h3 {
    font-size: 1rem;
    padding: 0.4rem 0.5rem;
  }
}

.highlighted-search {
  box-shadow: 0 0 0 3px var(--primary);
  background: var(--primary-light);
  transition: box-shadow 0.3s, background 0.3s;
}
</style>
