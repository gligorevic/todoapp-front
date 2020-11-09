<template>
    <div>
        <app-todo-list></app-todo-list>
    </div>
</template>

<script>
import TodoList from "../TodoList/TodoList";
export default {
    components: {
        AppTodoList: TodoList
    }
}
</script>

<style scoped>

</style>