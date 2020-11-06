import axios from "axios";
import jwtDecode from "jwt-decode";
import { store } from "./store";

export default async () => {
  let jwt = localStorage.getItem("token");
  if (jwt) {
    const decodedJWT = jwtDecode(jwt);
    axios.defaults.headers["Authorization"] = "Bearer " + jwt;
    if (Date.parse(new Date()) / 1000 >= decodedJWT.exp) {
      const { data } = await axios.post("/api/refresh", jwt);
      localStorage.setItem("token", data);
      axios.defaults.headers["Authorization"] = "Bearer " + data;
    }
    const { data } = await axios.get("/api/users");
    store.commit("setUser", data);
  }
};
