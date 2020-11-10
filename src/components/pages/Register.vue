<template>
  <div class="container u-center-childs center">
    <div class="row card">
      <h1 class="u-m-top-lg u-m-bottom-md heading-primary">Sign up</h1>
      <form class="col s12" @submit.prevent="onSubmit">
        <app-input
          label="Name"
          v-model="name"
          :error="errors.name"
          type="text"
          autofocus
        ></app-input>
        <app-input
          label="Email address"
          v-model="email"
          :error="errors.email"
          type="email"
        ></app-input>
        <app-input
          label="Password"
          v-model="password"
          :error="errors.password"
          type="password"
        ></app-input>
        <app-input
          label="Repeated password"
          v-model="repeatedPassword"
          :error="errors.repeatedPassword"
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
  components: {
    AppInput: Input,
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      repeatedPassword: "",
      errors: {},
    };
  },
  methods: {
    async onSubmit() {
      this.errors = {};
      if (!this.email.trim()) this.errors.email = "Email is required";
      if (!this.name) this.errors.name = "Name is required";
      if (!this.password) this.errors.password = "Password is required";
      if (this.password !== this.repeatedPassword)
        this.errors.repeatedPassword = "Passwords must match";
      if (Object.keys(this.errors).length === 0) {
        const err = await this.$store.dispatch("signUserUp", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (!err) {
          Object.keys(this.$store.getters.user).length !== 0 &&
            this.$router.push("/todos");
        } else if (err?.response?.data) {
          console.log(err.response.data.errors);
          this.errors = err.response.data.errors;
          this.$forceUpdate;
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
button {
  margin-bottom: 3rem;
  margin-top: 2rem;
}
</style>
