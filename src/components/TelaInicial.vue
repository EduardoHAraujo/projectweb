<template>
  <div class="home-container">
    <div class="welcome-box">
      <h1>Bem-vindo ao Cadastro de Filmes</h1>
      <p>Gerencie seus filmes favoritos de forma simples e prática.</p>
      <div class="actions">
        <router-link to="/cadastro" class="button">Cadastrar Filme</router-link>
        <router-link to="/visualizacao" class="button">Visualizar Filmes</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Fundo com gradiente */
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
}

.welcome-box {
  background: rgba(255, 255, 255, 0.1); /* Fundo translúcido */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.button {
  padding: 10px 20px;
  background-color: #ffffff;
  color: #2575fc;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #2575fc;
  color: white;
  transform: scale(1.05); /* Leve aumento no hover */
}
</style>
