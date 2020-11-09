<template>
  <div class="container center">
    <div class="row card formCard">
      <h1 class="addMargin">Sign in</h1>
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
  }
};
</script>

<style lang="scss" scoped>
.container {
   perspective: 1000px;
}

@keyframes rotateIn {
  0% {
    opacity: 0.1;
  }
  20% {
    transform: translateY(-15px) scale(1.05);
  }
  
  100% {
    opacity: 1;
    transform: translate(0);
  }
}

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
  margin-top: 10rem;
  animation: rotateIn .6s ease-in-out;
}

button {
  margin-bottom: 3rem;
  margin-top: 2rem;
}
</style>
