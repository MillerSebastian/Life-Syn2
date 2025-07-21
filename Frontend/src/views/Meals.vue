<template>
  <div class="meals-page">
    <div class="container">
      <!-- Header -->
      <div class="page-header">
        <h1 class="title is-2 text-primary">Planificación de Comidas</h1>
        <p class="subtitle is-6 text-secondary">
          Gestiona tu alimentación y nutrición diaria
        </p>
      </div>

      <!-- Resumen nutricional -->
      <div class="nutrition-summary mb-4">
        <div class="columns">
          <div
            class="column is-3"
            v-for="nutrient in nutritionData"
            :key="nutrient.name"
          >
            <div class="nutrition-card">
              <div class="nutrition-icon">
                <i :class="nutrient.icon"></i>
              </div>
              <div class="nutrition-info">
                <div class="nutrition-value">{{ nutrient.value }}</div>
                <div class="nutrition-label">{{ nutrient.name }}</div>
                <div class="nutrition-target">Meta: {{ nutrient.target }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Controles principales -->
      <div class="meals-controls mb-4">
        <div
          class="is-flex is-justify-content-space-between is-align-items-center"
        >
          <div class="is-flex is-align-items-center gap-3">
            <button class="btn btn-accent" @click="showAddMealModal = true">
              <i class="bx bx-plus mr-2"></i>Agregar Comida
            </button>
            <button class="btn btn-primary" @click="showMealPlanModal = true">
              <i class="bx bx-calendar-check mr-2"></i>Planificar Semana
            </button>
          </div>
          <div class="is-flex is-align-items-center gap-2">
            <select v-model="selectedDate" class="select select-month">
              <option value="today">Hoy</option>
              <option value="tomorrow">Mañana</option>
              <option value="week">Esta Semana</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Plan de comidas -->
      <div class="columns">
        <div class="column is-8">
          <div class="card">
            <div class="card-header">
              <h3 class="title is-5 mb-0">
                Plan de Comidas - {{ currentDateText }}
              </h3>
            </div>
            <div class="card-content">
              <div v-if="selectedDate === 'week'">
                <div v-for="day in weekMealsList" :key="day.date" class="mb-4">
                  <h4 class="title is-6 mb-2">
                    {{
                      new Date(day.date).toLocaleDateString("es-ES", {
                        weekday: "long",
                        day: "numeric",
                        month: "short",
                      })
                    }}
                  </h4>
                  <div class="meals-timeline">
                    <div
                      v-for="meal in day.meals"
                      :key="meal.id"
                      :id="'meal-' + meal.id"
                      class="meal-item"
                      :class="meal.type"
                    >
                      <div class="meal-time">{{ meal.time }}</div>
                      <div class="meal-content">
                        <div class="meal-header">
                          <h4 class="meal-title">{{ meal.name }}</h4>
                          <div class="meal-calories">
                            {{ meal.calories }} cal
                          </div>
                        </div>
                        <div class="meal-description">
                          {{ meal.description }}
                        </div>
                        <div class="meal-ingredients">
                          <span
                            v-for="ingredient in meal.ingredients"
                            :key="ingredient"
                            class="ingredient-tag"
                          >
                            {{ ingredient }}
                          </span>
                        </div>
                        <div class="meal-nutrition">
                          <span class="nutrition-tag protein"
                            >{{ meal.nutrition.protein }}g proteína</span
                          >
                          <span class="nutrition-tag carbs"
                            >{{ meal.nutrition.carbs }}g carbohidratos</span
                          >
                          <span class="nutrition-tag fat"
                            >{{ meal.nutrition.fat }}g grasa</span
                          >
                        </div>
                      </div>
                      <div class="meal-actions">
                        <button class="btn-icon" @click="editMeal(meal)">
                          <i class="bx bx-edit"></i>
                        </button>
                        <button class="btn-icon" @click="deleteMeal(meal.id)">
                          <i class="bx bx-trash"></i>
                        </button>
                        <button class="btn-icon" @click="toggleFavorite(meal)">
                          <i
                            :class="
                              favoriteRecipes.find((r) => r.name === meal.name)
                                ? 'bx bxs-star'
                                : 'bx bx-star'
                            "
                            style="color: #fbbf24"
                          ></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="meals-timeline">
                  <div
                    v-for="meal in dailyMeals"
                    :key="meal.id"
                    :id="'meal-' + meal.id"
                    class="meal-item"
                    :class="meal.type"
                  >
                    <div class="meal-time">{{ meal.time }}</div>
                    <div class="meal-content">
                      <div class="meal-header">
                        <h4 class="meal-title">{{ meal.name }}</h4>
                        <div class="meal-calories">{{ meal.calories }} cal</div>
                      </div>
                      <div class="meal-description">{{ meal.description }}</div>
                      <div class="meal-ingredients">
                        <span
                          v-for="ingredient in meal.ingredients"
                          :key="ingredient"
                          class="ingredient-tag"
                        >
                          {{ ingredient }}
                        </span>
                      </div>
                      <div class="meal-nutrition">
                        <span class="nutrition-tag protein"
                          >{{ meal.nutrition.protein }}g proteína</span
                        >
                        <span class="nutrition-tag carbs"
                          >{{ meal.nutrition.carbs }}g carbohidratos</span
                        >
                        <span class="nutrition-tag fat"
                          >{{ meal.nutrition.fat }}g grasa</span
                        >
                      </div>
                    </div>
                    <div class="meal-actions">
                      <button class="btn-icon" @click="editMeal(meal)">
                        <i class="bx bx-edit"></i>
                      </button>
                      <button class="btn-icon" @click="deleteMeal(meal.id)">
                        <i class="bx bx-trash"></i>
                      </button>
                      <button class="btn-icon" @click="toggleFavorite(meal)">
                        <i
                          :class="
                            favoriteRecipes.find((r) => r.name === meal.name)
                              ? 'bx bxs-star'
                              : 'bx bx-star'
                          "
                          style="color: #fbbf24"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Panel lateral -->
        <div class="column is-4">
          <!-- Resumen diario -->
          <div class="card mb-4">
            <div class="card-header">
              <h3 class="title is-5 mb-0">Resumen Diario</h3>
            </div>
            <div class="card-content">
              <div class="daily-summary">
                <div class="summary-item">
                  <div class="summary-label">Calorías Consumidas</div>
                  <div class="summary-value">
                    {{ dailyCalories }} / {{ dailyTarget }} cal
                  </div>
                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      :class="getCalorieProgressClass()"
                      :style="{ width: getCalorieProgress() + '%' }"
                    ></div>
                  </div>
                </div>
                <div class="summary-item">
                  <div class="summary-label">Comidas Completadas</div>
                  <div class="summary-value">
                    {{ realCompletedMeals }}
                  </div>
                </div>
                <div class="summary-item">
                  <div class="summary-label">Agua Consumida</div>
                  <div class="summary-value">
                    {{ realWaterIntake.toFixed(2) }} / 2.5L
                  </div>
                  <div class="progress-bar">
                    <div
                      class="progress-fill water-progress"
                      :style="{ width: (realWaterIntake / 2.5) * 100 + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recetas favoritas -->
          <div class="card">
            <div class="card-header">
              <h3 class="title is-5 mb-0">Recetas Favoritas</h3>
            </div>
            <div class="card-content">
              <div class="favorite-recipes">
                <div
                  v-for="recipe in favoriteRecipes"
                  :key="recipe.id"
                  class="recipe-item"
                  @click="addRecipeToMeal(recipe)"
                >
                  <div class="recipe-image">
                    <img :src="recipe.image" :alt="recipe.name" />
                  </div>
                  <div class="recipe-info">
                    <div class="recipe-name">{{ recipe.name }}</div>
                    <div class="recipe-calories">{{ recipe.calories }} cal</div>
                  </div>
                  <button class="btn-icon" @click.stop="toggleFavorite(recipe)">
                    <i :class="'bx bxs-star'" style="color: #fbbf24"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal para agregar/editar comida -->
    <div class="modal" :class="{ 'is-active': showAddMealModal }">
      <div class="modal-background" @click="showAddMealModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            {{ editingMeal ? "Editar Comida" : "Agregar Comida" }}
          </p>
          <button class="delete" @click="showAddMealModal = false"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <label class="label">Tipo de Comida</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select v-model="mealForm.type">
                  <option value="breakfast">Desayuno</option>
                  <option value="lunch">Almuerzo</option>
                  <option value="dinner">Cena</option>
                  <option value="snack">Snack</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input
                v-model="mealForm.name"
                class="input"
                type="text"
                placeholder="Nombre de la comida"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Descripción</label>
            <div class="control">
              <textarea
                v-model="mealForm.description"
                class="textarea"
                placeholder="Descripción de la comida"
              ></textarea>
            </div>
          </div>
          <div class="field">
            <label class="label">Imagen (opcional)</label>
            <div class="control">
              <input type="file" @change="handleImageChange" accept="image/*" />
              <div v-if="mealForm.image">
                <img
                  :src="mealForm.image"
                  alt="Imagen comida"
                  style="max-width: 120px; margin-top: 8px"
                />
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-6">
              <div class="field">
                <label class="label">Hora</label>
                <div class="control">
                  <input v-model="mealForm.time" class="input" type="time" />
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label class="label">Calorías</label>
                <div class="control">
                  <input
                    v-model="mealForm.calories"
                    class="input"
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="field">
            <label class="label">Ingredientes (separados por comas)</label>
            <div class="control">
              <input
                v-model="mealForm.ingredientsText"
                class="input"
                type="text"
                placeholder="Ingrediente 1, Ingrediente 2, ..."
              />
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <div class="field">
                <label class="label">Proteína (g)</label>
                <div class="control">
                  <input
                    v-model="mealForm.protein"
                    class="input"
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Carbohidratos (g)</label>
                <div class="control">
                  <input
                    v-model="mealForm.carbs"
                    class="input"
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="field">
                <label class="label">Grasa (g)</label>
                <div class="control">
                  <input
                    v-model="mealForm.fat"
                    class="input"
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot buttons">
          <button class="btn btn-primary" @click="saveMeal">Guardar</button>
          <button class="btn button is-danger has-text-white-bis" @click="showAddMealModal = false">
            Cancelar
          </button>
        </footer>
      </div>
    </div>

    <!-- Modal para planificar semana -->
    <div class="modal" :class="{ 'is-active': showMealPlanModal }">
      <div class="modal-background" @click="showMealPlanModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Planificar Semana</p>
          <button class="delete" @click="showMealPlanModal = false"></button>
        </header>
        <section class="modal-card-body">
          <div v-for="(day, idx) in weekDays" :key="day" class="mb-4">
            <h4 class="title is-6 mb-2">{{ day }}</h4>
            <div class="columns is-multiline">
              <div class="column is-4" v-for="type in mealTypes" :key="type">
                <label class="label">{{ typeLabels[type] }}</label>
                <input
                  v-model="weekPlan[day][type]"
                  class="input"
                  type="text"
                  placeholder="Nombre de la comida"
                />
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot buttons" style="flex-wrap: wrap; gap: 0.5rem">
          <button
            class="btn btn-primary is-small mr-2 mb-2"
            :disabled="weekPlanLoading"
            @click="saveWeekPlan"
          >
            <span v-if="weekPlanLoading">Guardando...</span>
            <span v-else>Guardar Semana</span>
          </button>
          <button
            class="btn button is-danger button-cancel has-text-white-bis"
            @click="showMealPlanModal = false"
          >
            Cancelar
          </button>
          <button
            class="btn btn-warning is-small mr-2 mb-2"
            @click="clearWeekPlan"
            type="button"
          >
            Limpiar Semana
          </button>
          <button
            class="btn btn-accent is-small mb-2"
            @click="copyLastWeek"
            type="button"
          >
            Copiar Semana Anterior
          </button>
        </footer>
      </div>
      <div v-if="weekPlanSuccess" class="notification is-success mt-2">
        ¡Semana guardada con éxito!
      </div>
      <div v-if="weekPlanError" class="notification is-danger mt-2">
        {{ weekPlanError }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from "vue";
import { db, storage, auth } from "../../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useRoute } from "vue-router";
import { nextTick } from "vue";
import { alertQuestion, alertSuccess } from "@/components/alert";

// Estado de la aplicación
const showAddMealModal = ref(false);
const showMealPlanModal = ref(false);
const editingMeal = ref(null);
const selectedDate = ref("today");
const mealImageFile = ref(null);

// Datos nutricionales (calculados en tiempo real)
const nutritionData = computed(() => {
  const totalCalories = dailyMeals.value.reduce(
    (total, meal) => total + (meal.calories || 0),
    0
  );
  const totalProtein = dailyMeals.value.reduce(
    (total, meal) => total + (meal.nutrition?.protein || 0),
    0
  );
  const totalCarbs = dailyMeals.value.reduce(
    (total, meal) => total + (meal.nutrition?.carbs || 0),
    0
  );
  const totalFat = dailyMeals.value.reduce(
    (total, meal) => total + (meal.nutrition?.fat || 0),
    0
  );

  return [
    {
      name: "Calorías",
      value: totalCalories.toLocaleString(),
      target: "2,000",
      icon: "bx bx-fire",
    },
    {
      name: "Proteína",
      value: totalProtein + "g",
      target: "120g",
      icon: "bx bx-dumbbell",
    },
    {
      name: "Carbohidratos",
      value: totalCarbs + "g",
      target: "250g",
      icon: "bx bx-bread",
    },
    {
      name: "Grasa",
      value: totalFat + "g",
      target: "70g",
      icon: "bx bx-droplet",
    },
  ];
});

// Formulario de comida
const mealForm = reactive({
  type: "breakfast",
  name: "",
  description: "",
  time: "",
  calories: "",
  ingredientsText: "",
  protein: "",
  carbs: "",
  fat: "",
});

// Comidas desde Firestore
const dailyMeals = ref([]);
const weekMeals = ref({});

const getUserId = () => auth.currentUser?.uid;

onMounted(() => {
  onSnapshot(collection(db, "meals"), (snapshot) => {
    const userId = getUserId();
    if (!userId) return;
    const allMeals = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const userMeals = allMeals.filter((m) => m.userId === userId);
    // Filtrar por día o semana según selectedDate
    const today = new Date();
    let filterDate = today.toISOString().split("T")[0];
    let tomorrowDate = (() => {
      const t = new Date(today);
      t.setDate(today.getDate() + 1);
      return t.toISOString().split("T")[0];
    })();
    if (selectedDate.value === "today") {
      dailyMeals.value = userMeals.filter((m) => m.date === filterDate);
    } else if (selectedDate.value === "tomorrow") {
      dailyMeals.value = userMeals.filter((m) => m.date === tomorrowDate);
    } else if (selectedDate.value === "week") {
      // Obtener fechas de la semana actual (lunes a domingo)
      const weekDates = [];
      const first = today.getDate() - today.getDay() + 1; // lunes
      for (let i = 0; i < 7; i++) {
        const d = new Date(today);
        d.setDate(first + i);
        weekDates.push(d.toISOString().split("T")[0]);
      }
      dailyMeals.value = userMeals
        .filter((m) => weekDates.includes(m.date))
        .sort(
          (a, b) => a.date.localeCompare(b.date) || a.type.localeCompare(b.type)
        );
    }
    // Plan semanal
    weekMeals.value = {};
    userMeals.forEach((m) => {
      if (!weekMeals.value[m.date]) weekMeals.value[m.date] = [];
      weekMeals.value[m.date].push(m); 
    });
  });
});

// Recetas favoritas desde Firestore
const favoriteRecipes = ref([]);
onMounted(() => {
  onSnapshot(collection(db, "favoriteRecipes"), (snapshot) => {
    const userId = getUserId();
    if (!userId) return;
    favoriteRecipes.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
});

// Computed properties
const currentDateText = computed(() => {
  const today = new Date();
  return today.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const dailyCalories = computed(() => {
  return dailyMeals.value.reduce((total, meal) => total + meal.calories, 0);
});

const dailyTarget = 2000;

const completedMeals = computed(() => {
  return dailyMeals.value.length;
});

const totalMeals = 4;

const waterIntake = 1.8; // Litros

// Computed para comidas de la semana agrupadas por día
const weekMealsList = computed(() => {
  if (selectedDate.value !== "week") return [];
  // Obtener fechas de la semana actual (lunes a domingo)
  const today = new Date();
  const weekDates = [];
  const first = today.getDate() - today.getDay() + 1; // lunes
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(first + i);
    weekDates.push(d.toISOString().split("T")[0]);
  }
  // Agrupar por fecha
  return weekDates.map((date) => ({
    date,
    meals: dailyMeals.value.filter((m) => m.date === date),
  }));
});

// Agua consumida real (sumar campo waterIntake si existe en las comidas de ese día, si no, dejar 0)
const realWaterIntake = computed(() => {
  if (selectedDate.value === "week") {
    // Sumar toda el agua de la semana
    return dailyMeals.value.reduce((sum, m) => sum + (m.waterIntake || 0), 0);
  } else {
    return dailyMeals.value.reduce((sum, m) => sum + (m.waterIntake || 0), 0);
  }
});

// Comidas completadas reales (cantidad de comidas con nombre no vacío)
const realCompletedMeals = computed(() => {
  if (selectedDate.value === "week") {
    return dailyMeals.value.filter((m) => m.name && m.name.trim()).length;
  } else {
    return dailyMeals.value.filter((m) => m.name && m.name.trim()).length;
  }
});

// Funciones
const editMeal = (meal) => {
  editingMeal.value = meal;
  Object.assign(mealForm, {
    ...meal,
    ingredientsText: meal.ingredients ? meal.ingredients.join(", ") : "",
  });
  showAddMealModal.value = true;
};

const deleteMeal = async (id) => {
  const result= await alertQuestion("¿estas seguro de eliminarlo?")
  if(!result.isConfirmed) return;
  await deleteDoc(doc(db, "meals", id));
  alertSuccess("eliminado exitosamente")
};

const saveMeal = async () => {
  const userId = getUserId();
  if (!userId) return;
  if (!mealForm.name.trim() || !mealForm.time || !mealForm.calories) return;
  let imageUrl = mealForm.image || "";
  if (mealImageFile.value) {
    const file = mealImageFile.value;
    const storageReference = storageRef(
      storage,
      `meals/${Date.now()}_${file.name}`
    );
    await uploadBytes(storageReference, file);
    imageUrl = await getDownloadURL(storageReference);
  }
  const mealData = {
    ...mealForm,
    ingredients: mealForm.ingredientsText
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i),
    nutrition: {
      protein: parseInt(mealForm.protein) || 0,
      carbs: parseInt(mealForm.carbs) || 0,
      fat: parseInt(mealForm.fat) || 0,
    },
    image: imageUrl,
    date: mealForm.date || new Date().toISOString().split("T")[0],
    userId,
  };
  if (editingMeal.value) {
    await updateDoc(doc(db, "meals", editingMeal.value.id), mealData);
  } else {
    await addDoc(collection(db, "meals"), mealData);
  }
  alertSuccess("guardado exitosamente")
  resetMealForm();
  showAddMealModal.value = false;
  mealImageFile.value = null;
};

const resetMealForm = () => {
  Object.assign(mealForm, {
    type: "breakfast",
    name: "",
    description: "",
    time: "",
    calories: "",
    ingredientsText: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  editingMeal.value = null;
};

const addRecipeToMeal = (recipe) => {
  // Aquí implementarías la lógica para agregar la receta como comida
  console.log("Agregando receta:", recipe.name);
};

const getCalorieProgress = () => {
  return Math.min((dailyCalories.value / dailyTarget) * 100, 100);
};

const getCalorieProgressClass = () => {
  const progress = getCalorieProgress();
  if (progress >= 90) return "danger";
  if (progress >= 75) return "warning";
  return "success";
};

// Favoritos
const toggleFavorite = async (meal) => {
  const userId = getUserId();
  if (!userId) return;
  const exists = favoriteRecipes.value.find((r) => r.name === meal.name);
  if (exists) {
    await deleteDoc(doc(db, "favoriteRecipes", exists.id));
  } else {
    await addDoc(collection(db, "favoriteRecipes"), {
      name: meal.name,
      calories: meal.calories,
      image: meal.image || "",
      userId,
    });
  }
};

// Subida de imagen
const handleImageChange = (e) => {
  mealImageFile.value = e.target.files[0];
};

const weekDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const mealTypes = ["breakfast", "lunch", "dinner"];
const typeLabels = { breakfast: "Desayuno", lunch: "Almuerzo", dinner: "Cena" };
const weekPlan = ref({});
weekDays.forEach((day) => {
  weekPlan.value[day] = { breakfast: "", lunch: "", dinner: "" };
});

// Mejoras para planificación semanal
const weekPlanLoading = ref(false);
const weekPlanSuccess = ref(false);
const weekPlanError = ref("");

// Precargar comidas planificadas al abrir el modal
watch(showMealPlanModal, (val) => {
  if (val) {
    // Limpiar feedback
    weekPlanSuccess.value = false;
    weekPlanError.value = "";
    // Precargar comidas de la semana
    const userId = getUserId();
    if (!userId) return;
    const today = new Date();
    for (let i = 0; i < weekDays.length; i++) {
      const day = weekDays[i];
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];
      const mealsForDay = weekMeals.value[dateStr] || [];
      for (const type of mealTypes) {
        const meal = mealsForDay.find((m) => m.type === type);
        weekPlan.value[day][type] = meal ? meal.name : "";
      }
    }
  }
});

const saveWeekPlan = async () => {
  weekPlanLoading.value = true;
  weekPlanSuccess.value = false;
  weekPlanError.value = "";
  const userId = getUserId();
  if (!userId) return;
  const today = new Date();
  let anyChange = false;
  try {
    for (let i = 0; i < weekDays.length; i++) {
      const day = weekDays[i];
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dateStr = date.toISOString().split("T")[0];
      const mealsForDay = weekMeals.value[dateStr] || [];
      for (const type of mealTypes) {
        const name = weekPlan.value[day][type];
        const existing = mealsForDay.find((m) => m.type === type);
        if (name.trim()) {
          if (existing) {
            // Editar
            if (existing.name !== name) {
              await updateDoc(doc(db, "meals", existing.id), {
                ...existing,
                name,
              });
              anyChange = true;
            }
          } else {
            // Crear

            await addDoc(collection(db, "meals"), {
              name,
              type,
              date: dateStr,
              userId,
              calories: 0,
              description: "",
              ingredients: [],
              nutrition: { protein: 0, carbs: 0, fat: 0 },
            });
            anyChange = true;
          }
        } else if (existing) {
          // Eliminar si el campo está vacío
          await deleteDoc(doc(db, "meals", existing.id));
          anyChange = true;
        }
      }
    }
    if (anyChange) {
      weekPlanSuccess.value = true;
    } else {
      weekPlanError.value = "No hay cambios para guardar.";
    }
  } catch (e) {
    weekPlanError.value = "Error al guardar la semana.";
  }
  weekPlanLoading.value = false;
  setTimeout(() => {
    weekPlanSuccess.value = false;
    weekPlanError.value = "";
  }, 2000);
};

const clearWeekPlan = () => {
  weekDays.forEach((day) => {
    weekPlan.value[day] = { breakfast: "", lunch: "", dinner: "" };
  });
};

const copyLastWeek = () => {
  const userId = getUserId();
  if (!userId) return;
  const today = new Date();
  for (let i = 0; i < weekDays.length; i++) {
    const day = weekDays[i];
    const date = new Date(today);
    date.setDate(today.getDate() - 7 + i);
    const dateStr = date.toISOString().split("T")[0];
    const mealsForDay = weekMeals.value[dateStr] || [];
    for (const type of mealTypes) {
      const meal = mealsForDay.find((m) => m.type === type);
      weekPlan.value[day][type] = meal ? meal.name : "";
    }
  }
};

watch(selectedDate, () => {
  const userId = getUserId();
  if (!userId) return;
  const today = new Date();
  let filterDate = today.toISOString().split("T")[0];
  let tomorrowDate = (() => {
    const t = new Date(today);
    t.setDate(today.getDate() + 1);
    return t.toISOString().split("T")[0];
  })();
  if (selectedDate.value === "today") {
    dailyMeals.value = weekMeals.value[filterDate] || [];
  } else if (selectedDate.value === "tomorrow") {
    dailyMeals.value = weekMeals.value[tomorrowDate] || [];
  } else if (selectedDate.value === "week") {
    // Obtener fechas de la semana actual (lunes a domingo)
    const weekDates = [];
    const first = today.getDate() - today.getDay() + 1; // lunes
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(first + i);
      weekDates.push(d.toISOString().split("T")[0]);
    }
    dailyMeals.value = Object.values(weekMeals.value)
      .flat()
      .filter((m) => weekDates.includes(m.date))
      .sort(
        (a, b) => a.date.localeCompare(b.date) || a.type.localeCompare(b.type)
      );
  }
});

const route = useRoute();
const highlightedId = ref(null);

watch(
  () => route.query.highlight,
  async (val) => {
    if (val) {
      highlightedId.value = val;
      await nextTick();
      const el = document.getElementById("meal-" + val);
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
</script>

<style scoped>

.button-cancel{
  position: relative;
  bottom: 4px;
  right: 4px;
}

.modal-card-foot{
  display: flex;
  flex-direction: row;
}

.select-month{
  border-radius: 10px;
  padding: 0em 1em;
  border: 1px solid transparent;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.select-month>option{
  border-radius: 10px;
}

.meals-page {
  padding: 2rem 0;
  min-height: 100vh;
  background: var(--background-secondary);
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}

/* Resumen nutricional */
.nutrition-summary {
  margin-bottom: 2rem;
}

.nutrition-card {
  background: var(--background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  border-left: 4px solid var(--accent);
}

.nutrition-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px var(--shadow-hover);
}

.nutrition-icon {
  font-size: 2rem;
  color: var(--accent);
}

.nutrition-info {
  flex: 1;
}

.nutrition-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.nutrition-label {
  font-size: 0.875rem;
  color: var(--secondary);
  margin-bottom: 0.25rem;
}

.nutrition-target {
  font-size: 0.75rem;
  color: var(--accent);
  font-weight: 600;
}

/* Controles */
.meals-controls {
  background: var(--background);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px var(--shadow);
}

/* Comidas */
.meals-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meal-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--background-secondary);
  border-radius: 12px;
  border-left: 4px solid var(--primary);
  transition: all 0.3s ease;
}

.meal-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px var(--shadow-hover);
}

.meal-item.breakfast {
  border-left-color: #fbbf24;
}
.meal-item.lunch {
  border-left-color: #06d6a0;
}
.meal-item.dinner {
  border-left-color: #6366f1;
}
.meal-item.snack {
  border-left-color: #8b5cf6;
}

.meal-time {
  font-weight: 600;
  color: var(--primary);
  min-width: 60px;
  text-align: center;
  padding: 0.5rem;
  background: var(--background);
  border-radius: 6px;
}

.meal-content {
  flex: 1;
}

.meal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.meal-title {
  font-weight: 600;
  color: var(--text);
  margin: 0;
}

.meal-calories {
  font-weight: 600;
  color: var(--accent);
  background: rgba(6, 214, 160, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.meal-description {
  color: var(--secondary);
  margin-bottom: 0.75rem;
  line-height: 1.5;
}

.meal-ingredients {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.ingredient-tag {
  background: var(--background);
  color: var(--text);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  border: 1px solid var(--border);
}

.meal-nutrition {
  display: flex;
  gap: 0.5rem;
}

.nutrition-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}

.nutrition-tag.protein {
  background: #eff6ff;
  color: #1d4ed8;
}

.nutrition-tag.carbs {
  background: #f0fdf4;
  color: #059669;
}

.nutrition-tag.fat {
  background: #fffbeb;
  color: #d97706;
}

.meal-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  color: var(--secondary);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-icon:hover {
  background: var(--background-secondary);
  color: var(--primary);
}

/* Resumen diario */
.daily-summary {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.summary-item {
  background: var(--background-secondary);
  padding: 1rem;
  border-radius: 8px;
}

.summary-label {
  font-size: 0.875rem;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.summary-value {
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.75rem;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  transition: width 0.3s ease;
}

.progress-fill.success {
  background: var(--accent);
}

.progress-fill.warning {
  background: var(--warning);
}

.progress-fill.danger {
  background: #ef4444;
}

.progress-fill.water-progress {
  background: #3b82f6;
}

/* Recetas favoritas */
.favorite-recipes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.recipe-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: var(--background-secondary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.recipe-item:hover {
  transform: translateX(4px);
  box-shadow: 0 2px 8px var(--shadow);
}

.recipe-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  overflow: hidden;
}

.recipe-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recipe-info {
  flex: 1;
}

.recipe-name {
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.recipe-calories {
  font-size: 0.875rem;
  color: var(--accent);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .nutrition-summary .columns {
    flex-direction: column;
  }

  .nutrition-summary .column {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .meals-page {
    padding: 1rem 0;
  }

  .meals-controls {
    padding: 1rem;
  }

  .meal-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .meal-actions {
    align-self: flex-end;
  }
}

.card-header h3,
.card-content h4,
.card-content h3,
.nutrition-label,
.summary-label {
  padding: 0.5rem 0.75rem;
  font-size: 1.15rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.25rem;
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
  .card-header h3,
  .card-content h4,
  .card-content h3,
  .nutrition-label,
  .summary-label {
    font-size: 1rem;
    padding: 0.4rem 0.5rem;
  }
}

.highlighted-search {
  box-shadow: 0 0 0 3px var(--primary);
  background: var(--primary-light);
  transition: box-shadow 0.3s, background 0.3s;
}

#theme-dark .modal-card {
  background: #23262F;
  color: #F1F1F1;
  border: 1.5px solid #4F8CFF;
  box-shadow: 0 4px 24px rgba(79, 140, 255, 0.10);
}
#theme-dark .modal-card-head {
  background: #1A4D99;
  color: #F1F1F1;
  border-bottom: 1px solid #4F8CFF;
}
#theme-dark .modal-card-title {
  color: #A3C8FF;
}
#theme-dark .modal-card-body {
  background: #23262F;
  color: #F1F1F1;
}
#theme-dark .modal-card-foot {
  background: #23262F;
  border-top: 1px solid #4F8CFF;
}
#theme-dark .modal-background {
  background: rgba(24, 26, 32, 0.85) !important;
}

</style>
