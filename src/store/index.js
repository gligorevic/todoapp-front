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
        axios.defaults.headers["Authorization"] = "Bearer " + data.token;
        localStorage.setItem("token", data.token);
        commit("setUser", data.user);
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    async signUserUp({ commit }, payload) {
      try {
        console.log(payload);
        const { data } = await axios.post("/api/register", payload);
        axios.defaults.headers["Authorization"] = "Bearer " + data.token;
        localStorage.setItem("token", data.token);
        commit("setUser", data.user);
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    async logout({ commit }) {
      try {
        await axios.post("/api/logout");
        axios.defaults.headers["Authorization"] = "";
        localStorage.clear();
        commit("setUser", {});
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
