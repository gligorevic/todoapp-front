<template>
  <nav>
    <div class="nav-wrapper blue">
      <router-link to="/" class="brand-logo"
        ><img
          src="../../assets/logo.png"
          style="height: 70px; filter: drop-shadow(-1px -2px 4px rgba(255, 255, 255, 0.582));"
      /></router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/" tag="li" exact class="nav-item">Home</router-link>
        <router-link
          v-if="userLoggedIn"
          to="/todos"
          tag="li"
          exact
          class="nav-item"
          >Todos</router-link
        >
        <router-link
          v-if="!userLoggedIn"
          to="/login"
          tag="li"
          exact
          class="nav-item"
          >Sign in</router-link
        >
        <router-link
          v-if="!userLoggedIn"
          to="/register"
          tag="li"
          exact
          class="nav-item"
          >Sign up</router-link
        >
        <li v-else class="nav-item" @click="logout">Logout</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    userLoggedIn() {
      return !!Object.keys(this.$store.getters.user).length;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/login"));
    },
  },
};
</script>

<style scoped>
.brand-logo {
  margin-left: 1rem;
}

.nav-item {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  cursor: pointer;
}
</style>
