<template>
  <nav>
    <div class="nav-wrapper blue">
      <router-link to="/" class="brand-logo">Todo app</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/" tag="li" exact class="nav-item">Home</router-link>
        <router-link v-if="userLoggedIn" to="/todos" tag="li" exact class="nav-item">Todos</router-link>
        <router-link v-if="!userLoggedIn" to="/login" tag="li" exact class="nav-item">Login</router-link>
        <router-link v-if="!userLoggedIn" to="/register" tag="li" exact class="nav-item">Register</router-link>
        <li v-else class="nav-item" @click="logout">Logout</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
      userLoggedIn () {
        return !!Object.keys(this.$store.getters.user).length;
      }
    },
    methods: {
      logout() {
        this.$store.dispatch("logout");
      }
    }
};
</script>

<style scoped>
  .brand-logo {
    margin-left: 1rem;
  }

  .nav-item {
    padding-left: .9rem;
    padding-right: .9rem;
    cursor: pointer;
  }

</style>
