<template>
  <div class="container">
    <app-add-todo
      :class="{ 'todo-animated': animate }"
      :addTodo="addTodo"
    ></app-add-todo>
    <h5 class="priority-mark priority-mark--heigh">Heigh priority!</h5>
    <draggable
      v-model="todos"
      @start="drag = true"
      @end="drag = false"
      group="todos"
      :list="todosHeigh"
      @change="changeToHeigh"
    >
      <app-todo
        v-for="(todo, index) in todosHeigh"
        :key="todo.id"
        :todo="todo"
        :style="{ animationDelay: index * 0.02 + 's', color: 'white' }"
        :class="{ 'todo-animated': animate }"
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      ></app-todo>
    </draggable>
    <h5 class="priority-mark priority-mark--medium">Medium priority!</h5>
    <draggable
      v-model="todos"
      @start="drag = true"
      @end="drag = false"
      group="todos"
      :list="todosMedium"
      @change="changeToMedium"
    >
      <app-todo
        v-for="(todo, index) in todosMedium"
        :key="todo.id"
        :todo="todo"
        :style="{ animationDelay: index * 0.02 + 's', color: 'white' }"
        :class="{ 'todo-animated': animate }"
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      ></app-todo>
    </draggable>
    <h5 class="priority-mark priority-mark--low">Low priority!</h5>
    <draggable
      v-model="todos"
      @start="drag = true"
      @end="drag = false"
      group="todos"
      :list="todosLow"
      @change="changeToLow"
    >
      <app-todo
        v-for="(todo, index) in todosLow"
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
      todosLow: [],
      todosMedium: [],
      todosHeigh: [],
      animate: true,
    };
  },
  methods: {
    splitTodos() {
      this.todosLow = this.todos.filter((todo) => todo.priority === "low");
      this.todosMedium = this.todos.filter(
        (todo) => todo.priority === "medium"
      );
      this.todosHeigh = this.todos.filter((todo) => todo.priority === "heigh");
    },
    async addTodo(task) {
      try {
        const { data } = await axios.post("/api/todos", {
          task,
          order: this.todosLow.length,
        });
        this.todos.push(data);
        this.splitTodos();
      } catch (err) {
        console.log(err);
      }
    },
    async deleteTodo(id) {
      try {
        await axios.delete(`/api/todos/${id}`);
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.splitTodos();
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
        this.splitTodos();
      } catch (err) {
        console.log(err);
      }
    },
    async updateLists(list) {
      await axios.put(`/api/multiple/todos`, {
        todos: list,
      });
    },
    syncTodos() {
      this.todos = [...this.todosHeigh, ...this.todosMedium, ...this.todosLow];
    },
    changeToLow(evt) {
      if (evt.added) {
        evt.added.element.priority = "low";
      }
      this.todosLow = this.todosLow.map((todo, i) => ({ ...todo, order: i }));
      this.updateLists(this.todosLow);
      this.syncTodos();
    },

    changeToMedium(evt) {
      if (evt.added) {
        evt.added.element.priority = "medium";
      }
      this.todosMedium = this.todosMedium.map((todo, i) => ({
        ...todo,
        order: i,
      }));
      this.updateLists(this.todosMedium);
      this.syncTodos();
    },

    changeToHeigh(evt) {
      if (evt.added) {
        evt.added.element.priority = "heigh";
      }

      this.todosHeigh = this.todosHeigh.map((todo, i) => ({
        ...todo,
        order: i,
      }));
      this.updateLists(this.todosHeigh);
      this.syncTodos();
    },
  },

  async created() {
    try {
      const { data } = await axios.get("/api/todos");
      this.todos = data;
      this.splitTodos();
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
.priority-mark {
  width: 80%;
  margin: 10px auto;
  margin-top: 25px;
  padding-bottom: 3px;
  animation: enterIn 0.7s ease-in-out 1s both;

  &--heigh {
    color: #ef9a9a;
    border-bottom: 2px solid#ef9a9a;
  }

  &--medium {
    color: #ffcc80;
    border-bottom: 2px solid #ffcc80;
  }

  &--low {
    color: #c8e6c9;
    border-bottom: 2px solid #81c784;
  }
}

.todo-animated {
  animation: slideInRight 1s ease-in-out backwards;
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

@keyframes enterIn {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
