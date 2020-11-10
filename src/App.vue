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
    AppHeader: Header,
  },
};
</script>

<style lang="scss">
@import "./scss/base/base";
@import "./scss/base/typography";
@import "./scss/base/animations";
@import "./scss/base/utilities";

@import "./scss/components/card";
</style>
