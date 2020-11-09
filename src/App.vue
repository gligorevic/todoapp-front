<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  components: {
    AppHeader: Header
  }
}
</script>

<style lang="scss">
  input {
    &:focus {
      border-bottom: 1px solid #42a5f5 !important;
      box-shadow: 0 1px 0 0 #42a5f5 !important;
    }
  }

  body {
    background-image: linear-gradient(to top right, #11cdef,#2196F3);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }
</style>
