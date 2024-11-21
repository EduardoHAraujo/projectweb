<template>
  <div class="form-container">
    <h1>Cadastro de Filme</h1>
    <form @submit.prevent="cadastrarFilme">
      <label for="nome">Nome do Filme:</label>
      <input type="text" id="nome" v-model="filme.nome" required />

      <label for="classificacao">Classificação:</label>
      <select id="classificacao" v-model="filme.classificacao" required>
        <option value="" disabled>Selecione</option>
        <option value="Livre">Livre</option>
        <option value="10">10 anos</option>
        <option value="12">12 anos</option>
        <option value="14">14 anos</option>
        <option value="16">16 anos</option>
        <option value="18">18 anos</option>
      </select>

      <label for="genero">Gênero do Filme:</label>
      <input type="text" id="genero" v-model="filme.genero" required />

      <label for="produtora">Produtora:</label>
      <input type="text" id="produtora" v-model="filme.produtora" required />

      <label for="duracao">Duração (min):</label>
      <input type="number" id="duracao" v-model="filme.duracao" required />

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
        duracao: null,
      },
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
        duracao: null,
      };
    },
  },
};
</script>

<style scoped>
/* Container principal do formulário */
.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: linear-gradient(135deg, #2c2c2c, #3a3a3a);
  border-radius: 12px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  font-family: 'Arial', sans-serif;
  color: white;
}

/* Título do formulário */
h1 {
  text-align: center;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 25px;
  font-weight: bold;
}

/* Estilo do formulário */
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Rótulos */
label {
  font-size: 1.1rem;
  font-weight: bold;
  color: #f1f1f1;
}

/* Campos de entrada e seleção */
input,
select {
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
}

input:focus,
select:focus {
  border: 2px solid #fff;
  outline: none;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
}

/* Botão */
button {
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

button:hover {
  background: #5e5e5e;
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Estilo responsivo */
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
