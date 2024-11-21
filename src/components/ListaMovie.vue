<template>
  <div class="film-container">
    <h1>Filmes Cadastrados</h1>
    <div v-if="filmes.length" class="film-list">
      <div v-for="(filme, index) in filmes" :key="index" class="film-card">
        <div class="film-info">
          <h2>{{ filme.nome }}</h2>
          <p><strong>Classificação:</strong> {{ filme.classificacao }}</p>
          <p><strong>Gênero:</strong> {{ filme.genero }}</p>
          <p><strong>Produtora:</strong> {{ filme.produtora }}</p>
          <p><strong>Duração:</strong> {{ filme.duracao }} min</p>
        </div>
        <div class="film-actions">
          <button @click="editarFilme(index)">Editar</button>
          <button @click="excluirFilme(index)">Excluir</button>
        </div>
      </div>
    </div>
    <p v-else>Nenhum filme cadastrado.</p>

    <!-- Formulário para Edição -->
    <div v-if="editando">
      <h2>Editar Filme</h2>
      <form @submit.prevent="salvarEdicao">
        <label>Nome do Filme:</label>
        <input type="text" v-model="filmeEditado.nome" required />

        <label>Classificação:</label>
        <select v-model="filmeEditado.classificacao" required>
          <option value="" disabled>Selecione</option>
          <option value="Livre">Livre</option>
          <option value="10">10 anos</option>
          <option value="12">12 anos</option>
          <option value="14">14 anos</option>
          <option value="16">16 anos</option>
          <option value="18">18 anos</option>
        </select>

        <label>Gênero:</label>
        <input type="text" v-model="filmeEditado.genero" required />

        <label>Produtora:</label>
        <input type="text" v-model="filmeEditado.produtora" required />

        <label>Duração (min):</label>
        <input type="number" v-model="filmeEditado.duracao" required />

        <button type="submit">Salvar</button>
        <button type="button" @click="cancelarEdicao">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [],
      editando: false,
      filmeEditado: {
        nome: "",
        classificacao: "",
        genero: "",
        produtora: "",
        duracao: null,
      },
      indiceEdicao: null,
    };
  },
  created() {
    this.filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  },
  methods: {
    excluirFilme(index) {
      if (confirm("Tem certeza que deseja excluir este filme?")) {
        this.filmes.splice(index, 1);
        localStorage.setItem("filmes", JSON.stringify(this.filmes));
      }
    },
    editarFilme(index) {
      this.editando = true;
      this.indiceEdicao = index;
      this.filmeEditado = { ...this.filmes[index] };
    },
    salvarEdicao() {
      this.filmes[this.indiceEdicao] = { ...this.filmeEditado };
      localStorage.setItem("filmes", JSON.stringify(this.filmes));
      this.cancelarEdicao();
    },
    cancelarEdicao() {
      this.editando = false;
      this.indiceEdicao = null;
      this.filmeEditado = {
        nome: "",
        classificacao: "",
        genero: "",
        produtora: "",
        duracao: null,
      };
    },
  },
};
</script>

<style scoped>
.film-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.film-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.film-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.film-info {
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #007bff;
}

p {
  margin: 5px 0;
  color: #555;
}

.film-actions {
  display: flex;
  justify-content: space-between;
}

.film-actions button {
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.film-actions button:hover {
  background-color: #0056b3;
}

form {
  margin-top: 20px;
}

form label {
  margin-top: 10px;
  font-weight: bold;
}

form input,
form select {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

form button {
  margin-top: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button[type="button"] {
  background-color: #dc3545;
}

form button:hover {
  opacity: 0.9;
}
</style>
