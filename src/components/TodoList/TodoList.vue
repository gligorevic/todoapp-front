<template> 
    <draggable v-model="todos" @start="drag=true" @end="drag=false">
        <app-todo class="todo" v-for="(todo, index) in todos" :key="todo.id" :todo="todo" :style="{ animationDelay:  index * 0.03 + 's' , color: 'white'  }" :class="{'todo-animated': animate}"></app-todo>
    </draggable>
</template>

<script>
import axios from "axios";
import Todo from "./Todo";
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      todos: [],
      animate: true
    };
  },
  async created() {
    try {
      const { data } = await axios.get("/api/todos");
      this.todos = data;
      console.log((0.03 * (data.length - 1) + 1)* 1000) ;
      setTimeout(() => {
        this.animate = false;
      }, (0.03 * (data.length - 1) + 1) * 1000)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  },
  components: {
      AppTodo: Todo,
      draggable
  },
 
};
</script>

<style lang="scss">
.todo {
  width: 50%;
  background: #c1c1c1;
  min-height: 60px;
  margin: 20px auto;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
  
}

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
