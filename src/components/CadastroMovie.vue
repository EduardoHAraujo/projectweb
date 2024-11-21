<template>
  <div class="form-container">
    <h1>Cadastro de Filme</h1>
    <form @submit.prevent="cadastrarFilme">
      <div class="row">
        <div class="form-group">
          <label for="nome">Nome do Filme:</label>
          <input type="text" id="nome" v-model="filme.nome" placeholder="Digite o nome do filme" required />
        </div>
        <div class="form-group">
          <label for="classificacao">Classificação:</label>
          <select id="classificacao" v-model="filme.classificacao" required>
            <option value="" disabled>Selecione a classificação</option>
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
          <label for="genero">Gênero:</label>
          <select id="genero" v-model="filme.genero" required>
            <option value="" disabled>Selecione um gênero</option>
            <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="produtora">Produtora:</label>
          <input type="text" id="produtora" v-model="filme.produtora" placeholder="Digite a produtora" required />
        </div>
      </div>

      <div class="row">
        <div class="form-group">
          <label for="ano">Ano:</label>
          <input type="number" id="ano" v-model="filme.ano" placeholder="Ano de lançamento" required />
        </div>
        <div class="form-group">
          <label for="duracao">Duração (min):</label>
          <input type="number" id="duracao" v-model="filme.duracao" placeholder="Duração em minutos" required />
        </div>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filme: {
        nome: "",
        classificacao: "",
        genero: "",
        produtora: "",
        ano: null,
        duracao: null,
      },
      generos: ["Ação", "Comédia", "Drama", "Fantasia", "Ficção Científica", "Terror", "Suspense"],
    };
  },
  methods: {
    cadastrarFilme() {
      const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
      filmes.push(this.filme);
      localStorage.setItem("filmes", JSON.stringify(filmes));
      alert("Filme cadastrado com sucesso!");
      this.filme = {
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
.form-container {
  max-width: 700px;
  margin: 50px auto;
  padding: 20px 40px;
  background: linear-gradient(135deg, #2c2c2c, #3a3a3a);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  color: white;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 25px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.row {
  display: flex;
  gap: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  font-weight: bold;
  color: #f1f1f1;
  margin-bottom: 5px;
}

input,
select {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.8);
}

input:focus,
select:focus {
  border: 2px solid #007bff;
  outline: none;
}

button[type="submit"] {
  padding: 12px;
  background: #4a4a4a;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

button[type="submit"]:hover {
  background: #5e5e5e;
<<<<<<< HEAD



  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

button[type="submit"]:active {
  transform: translateY(0);
  box-shadow: none;
}

@media (max-width: 768px) {
<<<<<<< HEAD
  .form-container {
    padding: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  button {
    font-size: 1rem;
    padding: 10px;

  .row {
    flex-direction: column;

  }
}
</style>
