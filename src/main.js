import Vue from "vue";
import VueRouter from "vue-router";

import { store } from "./store";
import router from "./router";
import jwtSetup from "./jwtSetup";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

jwtSetup();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
