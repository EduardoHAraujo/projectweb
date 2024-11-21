<template>
  <aside class="sidebar">
    <ul>
      <li>
        <router-link to="/" class="link">Tela Principal</router-link>
      </li>
      <li>
        <router-link to="/cadastro" class="link">Cadastrar Filme</router-link>
      </li>
      <li>
        <router-link to="/visualizacao" class="link">Visualizar Filmes</router-link>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.sidebar {
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Gradiente de fundo */
  color: white;
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Sombra lateral */
  font-family: 'Arial', sans-serif;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

li {
  margin: 10px 0;
}

.link {
  display: block;
  width: 100%;
  padding: 10px;
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.link:hover {
  background: rgba(255, 255, 255, 0.2); /* Destaque no hover */
  transform: translateX(5px); /* Leve movimento no hover */
}

.link.active {
  background: rgba(255, 255, 255, 0.3); /* Destaque para link ativo */
  transform: translateX(0); /* Garante que não seja afetado pelo hover */
}
</style>
