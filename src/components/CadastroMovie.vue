<template>
  <div class="form-container">
    <h1>Cadastro de Filme</h1>
    <form @submit.prevent="cadastrarFilme">
      <label for="nome">Nome do Filme:</label>
      <div class="nome-classificacao">
        <input type="text" id="nome" v-model="filme.nome" placeholder="Digite o nome do filme" required />
        <select id="classificacao" v-model="filme.classificacao" required>
          <option value="" disabled>Classificação</option>
          <option value="Livre">Livre</option>
          <option value="10">10 anos</option>
          <option value="12">12 anos</option>
          <option value="14">14 anos</option>
          <option value="16">16 anos</option>
          <option value="18">18 anos</option>
        </select>
      </div>

      <label for="genero">Gênero e Produtora:</label>
      <div class="genero-produtora">
        <select v-model="filme.genero" class="dropdown" required>
          <option value="" disabled>Selecione um gênero</option>
          <option v-for="genero in generos" :key="genero" :value="genero">{{ genero }}</option>
        </select>
        <input type="text" id="produtora" v-model="filme.produtora" placeholder="Produtora do filme" required />
      </div>

      <label for="ano">Ano e Duração:</label>
      <div class="ano-duracao">
        <input type="number" id="ano" v-model="filme.ano" placeholder="Ano de lançamento" required />
        <input type="number" id="duracao" v-model="filme.duracao" placeholder="Duração em minutos" required />
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

label {
  font-size: 1.1rem;
  color: #f1f1f1;
}

/* Estilização para campos combinados */
.nome-classificacao,
.genero-produtora,
.ano-duracao {
  display: flex;
  gap: 10px;
}

input,
select {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
}

select.dropdown {
  flex: 1;
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

  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

button[type="submit"]:active {
  transform: translateY(0);
  box-shadow: none;
}

@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  h1 {
    font-size: 1.8rem;
  }

  button {
    font-size: 1rem;
    padding: 10px;
  }
}
</style>
