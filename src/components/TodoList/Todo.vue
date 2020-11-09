<template>
  <div class="todo">
    <input
      type="checkbox"
      :id="todo.id"
      v-model="todo.completed"
      @change="onToggle"
    />
    <label :for="todo.id" class="todo__completed"></label>
    <p class="todo__task" v-if="!editMode">
      {{ todo.task }}
    </p>
    <div class="input-field todo__edit" v-if="editMode">
      <textarea
        id="first_name"
        type="text"
        class="materialize-textarea"
        v-model="editedTask"
      ></textarea>
      <label for="first_name" class="active">Edit Task</label>
    </div>
    <div class="todo__actions">
      <span
        class="todo__icon todo__icon--delete"
        @click="onDelete"
        v-if="!editMode"
        ><i class="material-icons small">delete</i></span
      >
      <span
        class="todo__icon todo__icon--edit"
        v-if="!editMode"
        @click="editMode = true"
        ><i class="material-icons small">edit</i></span
      >
      <span
        class="todo__icon todo__icon--clear"
        @click="editMode = false"
        v-if="editMode"
        ><i class="material-icons small">clear</i></span
      >
      <span
        class="todo__icon todo__icon--check"
        @click="onUpdate"
        v-if="editMode"
        ><i class="material-icons small">check</i></span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo", "deleteTodo", "updateTodo"],
  data() {
    return {
      editMode: false,
      editedTask: this.todo.task,
    };
  },
  methods: {
    onDelete() {
      this.deleteTodo(this.todo.id);
    },
    onUpdate() {
      this.updateTodo({ ...this.todo, task: this.editedTask }).then((err) => {
        if (err) {
          this.editedTask = this.todo.task;
        }
      });

      this.editMode = false;
    },
    onToggle() {
      this.updateTodo({ ...this.todo, completed: this.todo.completed });
    },
  },
};
</script>

<style scoped lang="scss">
.todo {
  width: 80%;
  background: #f1f1f173;
  min-height: 60px;
  margin: 5px auto;

  padding: 1px 25px;
  border: 1px solid #f1f1f1be;
  border-radius: 3px;
  display: flex;
  align-items: center;

  &__edit {
    flex-grow: 2;
    flex-basis: 75%;
    textarea {
      width: 100%;
    }
  }

  &__task {
    flex-grow: 2;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  &__actions {
    flex-grow: 1;
    flex-basis: 25%;
  }

  &__icon {
    float: right;
    cursor: pointer;
    margin-left: 5px;

    &--delete {
      color: crimson;
    }

    &--edit {
      color: #ffc107;
    }

    &--check {
      color: #36973a;
    }

    &--clear {
      color: black;
    }
  }

  &__completed {
    &::before {
      border: 2px solid #fff;
    }
  }
}
</style>
