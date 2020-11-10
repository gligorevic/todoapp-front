<template>
  <div class="container u-center-childs center">
    <div class="row card">
      <h1 class="u-m-top-lg u-m-bottom-md heading-primary">Sign in</h1>
      <form class="col s12" @submit.prevent="onSubmit">
        <app-input
          label="Email address"
          v-model="email"
          :error="errors.email"
          type="email"
          autofocus
        ></app-input>

        <app-input
          label="Password"
          v-model="password"
          :error="errors.password"
          type="password"
        ></app-input>

        <button class="btn btn-primary blue" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "../Form/Input";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },
  components: {
    AppInput: Input,
  },
  methods: {
    async onSubmit() {
      this.errors = {};
      if (!this.email.trim()) this.errors.email = "Email is required";
      if (!this.password) this.errors.password = "Password is required";
      if (Object.keys(this.errors).length === 0) {
        await this.$store.dispatch("signUserIn", {
          email: this.email,
          password: this.password,
        });
        if (Object.keys(this.$store.getters.user).length !== 0) {
          this.$router.push("/todos");
        } else {
          this.errors.email = " ";
          this.errors.password = "Bad credentials!";
          this.$forceUpdate();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 3rem;
  margin-top: 2rem;
}
</style>
