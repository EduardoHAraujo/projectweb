import { createRouter, createWebHistory } from "vue-router";
import CadastroMovie from "@/components/CadastroMovie.vue";
import TelaInicial from "@/components/TelaInicial.vue";
import ListaMovie from "@/components/ListaMovie.vue";

const routes = [
  { path: "/", name: "Principal", component: TelaInicial },
  { path: "/cadastro", name: "Cadastro", component: CadastroMovie },
  { path: "/visualizacao", name: "Visualizacao", component: ListaMovie },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
