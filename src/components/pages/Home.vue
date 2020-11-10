<template>
  <div class="home container">
    <div class="row">
      <div>
        <div class="col s6">
          <h1 class="white-text heading-primary">Todo App</h1>
          <p class="white-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            sit harum, ducimus ratione at aliquam, inventore dolore dolorum iste
            nisi placeat itaque blanditiis, ab rem quae dolores expedita labore.
            Amet.
          </p>
          <p class="white-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            sit harum, ducimus ratione at aliquam.
          </p>
          <div class="actions-wrapper">
            <router-link
              to="/login"
              class="waves-effect waves-light btn orange darken-3"
              v-if="!userSignedIn"
              >Sign in</router-link
            >
            <router-link
              to="/register"
              class="waves-effect waves-light btn orange darken-3"
              v-if="!userSignedIn"
              >Sign up</router-link
            >
          </div>
        </div>
        <div class="col s6"><img src="../../assets/todoList.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userSignedIn() {
      return Object.keys(this.$store.getters.user).length !== 0;
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  padding-top: 5%;
  height: 70vh;
  width: 100vw;
  position: relative;
}

.home .heading-primary {
  transform: skewY(-10deg);
  margin-top: 10rem;
  font-size: $font-size-very-large;
  text-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.582);
  animation: fadeInSkewed 0.6s ease-in-out;
  text-align: center;
}

p {
  transform: skewY(-10deg);
  text-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.582);
  margin-top: 3rem;
  margin-left: 2rem;
  animation: fadeInSkewed 0.4s ease 0.4s backwards;
}

img {
  max-height: 55rem;
  animation: slideInLeft 0.6s ease-in 0.1s both,
    fadeShadow 0.5s ease-in 0.6s both;
}

.actions-wrapper {
  margin-top: 6.5rem;
  text-align: center;

  a {
    display: inline-block;
    margin-left: 3rem;

    &:first-child {
      animation: slideInLeft 0.4s ease 0.6s backwards;
    }

    &:nth-child(2) {
      animation: slideInLeft 0.5s ease 0.7s backwards;
    }
  }
}
</style>
