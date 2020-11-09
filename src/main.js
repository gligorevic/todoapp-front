import Vue from "vue";
import VueRouter from "vue-router";

import jwtSetup from "./jwtSetup";
import { store } from "./store";
import router from "./router";

import App from "./App.vue";

Vue.config.productionTip = false;

jwtSetup();

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
