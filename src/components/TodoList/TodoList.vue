<template>
  <div class="container">
    <app-add-todo
      :class="{ 'todo-animated': animate }"
      :addTodo="addTodo"
    ></app-add-todo>

    <draggable v-model="todos" @start="drag = true" @end="drag = false">
      <app-todo
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo="todo"
        :style="{ animationDelay: index * 0.02 + 's', color: 'white' }"
        :class="{ 'todo-animated': animate }"
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      ></app-todo>
    </draggable>
  </div>
</template>

<script>
import axios from "axios";
import draggable from "vuedraggable";

import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default {
  data() {
    return {
      todos: [],
      animate: true,
    };
  },
  methods: {
    async addTodo(task) {
      try {
        const { data } = await axios.post("/api/todos", { task });
        this.todos.unshift(data);
      } catch (err) {
        console.log(err);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`/api/todos/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (err) {
        console.log(err);
      }
    },
    async updateTodo(todo) {
      try {
        const { data } = await axios.put(`/api/todos/${todo.id}`, todo);
        this.todos = this.todos.map((todo) =>
          todo.id !== data.id ? todo : data
        );
      } catch (err) {
        console.log(err);
      }
    },
  },

  async created() {
    try {
      const { data } = await axios.get("/api/todos");
      this.todos = data;
      setTimeout(() => {
        this.animate = false;
      }, (0.03 * (data.length - 1) + 1) * 1000);
    } catch (err) {
      console.log(err);
    }
  },
  components: {
    AppTodo: Todo,
    AppAddTodo: AddTodo,
    draggable,
  },
};
</script>

<style lang="scss">
.todo-animated {
  animation: slideInRight 1s ease-in-out both;
}

@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(-50%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
