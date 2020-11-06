import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    async signUserIn({ commit }, payload) {
      try {
        const { data } = await axios.post("/api/login", payload);
        commit("setUser", data.user);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
});
