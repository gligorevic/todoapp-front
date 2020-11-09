import VueRouter from "vue-router";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Todos from "./components/pages/Todos";
import { store } from "./store";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
    meta: {
      authDisable: true,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      authDisable: true,
    },
  },
  {
    path: "/todos",
    component: Todos,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (
    to.meta.auth &&
    Object.keys(store.getters.user).length === 0 &&
    !localStorage.getItem("token")
  ) {
    next("/login");
  } else if (
    to.meta.authDisable &&
    (Object.keys(store.getters.user).length !== 0 ||
      localStorage.getItem("token"))
  ) {
    next("/todos");
  } else {
    next();
  }
});

export default router;
