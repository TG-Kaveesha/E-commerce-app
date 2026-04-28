import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailView from "../views/DetailView.vue";
import CartView from "../views/CartView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product/:id", component: DetailView },
  { path: "/cart", component: CartView }
];

export default createRouter({
  history: createWebHistory(),
  routes
});