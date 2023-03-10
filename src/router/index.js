import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import User from "../components/User.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
