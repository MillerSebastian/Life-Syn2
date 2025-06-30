<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Crear Documentos con IA</h1>

      <div class="box">
        <div class="field">
          <label class="label">Descripción del documento</label>
          <div class="control">
            <textarea
              class="textarea"
              v-model="prompt"
              placeholder="Describe qué tipo de documento deseas crear"
            ></textarea>
          </div>
        </div>

        <button class="button is-primary" @click="generateDocument">
          Generar Documento
        </button>
      </div>

      <div v-if="result" class="box">
        <h2 class="subtitle">Documento generado:</h2>
        <p>{{ result }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prompt: "",
      result: "",
    };
  },
  methods: {
    async generateDocument() {
      const res = await axios.post(
        "http://localhost:3000/create",
        {
          prompt: this.prompt,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      this.result = res.data.content;
    },
  },
};
</script>
