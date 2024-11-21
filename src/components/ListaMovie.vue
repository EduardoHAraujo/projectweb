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
          <p><strong>Ano:</strong> {{ filme.ano }}</p>
          <p><strong>Duração:</strong> {{ filme.duracao }} min</p>
        </div>
        <div class="film-actions">
          <button @click="editarFilme(index)">Editar</button>
          <button @click="excluirFilme(index)">Excluir</button>
        </div>
      </div>
    </div>
    <p v-else>Nenhum filme cadastrado.</p>

    <div v-if="editando" class="edit-form">
      <h2>Editar Filme</h2>
      <form @submit.prevent="salvarEdicao">
        <div class="row">
          <div class="form-group">
            <label>Nome do Filme:</label>
            <input type="text" v-model="filmeEditado.nome" required />
          </div>
          <div class="form-group">
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
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Gênero:</label>
            <select v-model="filmeEditado.genero" required>
              <option value="" disabled>Selecione um Gênero</option>
              <option v-for="genero in generos" :key="genero" :value="genero">
                {{ genero }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Produtora:</label>
            <input type="text" v-model="filmeEditado.produtora" required />
          </div>
        </div>

        <div class="row">
          <div class="form-group">
            <label>Ano:</label>
            <input type="number" v-model="filmeEditado.ano" required />
          </div>
          <div class="form-group">
            <label>Duração (min):</label>
            <input type="number" v-model="filmeEditado.duracao" required />
          </div>
        </div>

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
        ano: null,
        duracao: null,
      },
      indiceEdicao: null,
      generos: ["Ação", "Comédia", "Drama", "Fantasia", "Ficção Científica", "Terror", "Suspense"],
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
        ano: null,
        duracao: null,
      };
    },
  },
};
</script>

<style scoped>
.film-container {
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
}

.film-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.film-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
}

.film-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.film-info h2 {
  font-size: 1.6rem;
  color: #007bff;
  margin-bottom: 15px;
}

.film-info p {
  margin: 5px 0;
  color: #555;
}

.film-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.film-actions button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.film-actions button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.edit-form {
  margin-top: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.edit-form h2 {
  color: #007bff;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: center;
}

.row {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

form label {
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
}

form input,
form select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  background: #fff;
  transition: box-shadow 0.2s, border-color 0.2s;
}

form input:focus,
form select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

form button {
  margin-top: 15px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

form button[type="submit"] {
  background-color: #28a745;
  color: white;
}

form button[type="submit"]:hover {
  background-color: #218838;
  transform: scale(1.05);
}

form button[type="button"] {
  background-color: #dc3545;
  color: white;
}

form button[type="button"]:hover {
  background-color: #c82333;
  transform: scale(1.05);
}

/* Responsividade */
@media (max-width: 768px) {
  .row {
    flex-direction: column;
    gap: 10px;
  }

  .film-card {
    padding: 15px;
  }

  form button {
    font-size: 0.9rem;
    padding: 10px 15px;
  }
}
</style>