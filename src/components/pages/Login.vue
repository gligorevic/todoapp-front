<template>
  <div class="container center">
    <div class="row card formCard">
      <h1 class="addMargin">Log in</h1>
      <form class="col s12" @submit.prevent="onSubmit">
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

        <button class="btn btn-primary blue" type="submit">Submit!</button>
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
    onSubmit() {
      this.errors = {};
      if (!this.email.trim()) this.errors.email = "Email is required";
      if (!this.password) this.errors.password = "Password is required";
      
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.addMargin {
  margin-top: 60px;
  margin-bottom: 40px;
}
.formCard {
  min-width: 46%;
  padding: 0 60px;
  margin-top: 30px;
}

button {
    margin-bottom: 3rem;
    margin-top: 2rem;
}

</style>
