import VueRouter from "vue-router";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Todos from "./components/pages/Todos";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/todos",
    component: Todos,
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});
