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

<style>

</style>
