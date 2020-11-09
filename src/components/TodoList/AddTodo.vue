<template>
  <div class="add-todo">
    <form class="add-todo__form" @submit.prevent="onSubmit">
      <div class="input-field col s6">
        <input id="task" v-model.lazy="task" type="text" class="validate" />
        <label for="task">Task</label>
      </div>
      <button type="submit">
        <i class="material-icons small">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["addTodo"],
  data() {
    return {
      task: "",
    };
  },
  methods: {
    onSubmit() {
      this.addTodo(this.task);
      this.task = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.add-todo {
  width: 80%;
  background: rgba(255, 255, 255, 0.966);
  margin: 0 auto;
  border-radius: 3px;
  padding-top: 10px;
  margin-top: 30px;

  &__form {
    display: flex;
    align-items: center;
    margin-left: 20px;

    div {
      display: inline-block;
      flex-grow: 2;
    }

    button {
      border: none;
      background: none;
      margin: 0 10px;
    }
  }
}
</style>
