<template>
  <h1>ToDo App</h1>
  <p>Test Todo App</p>
  <ToDoInput :inputText="state.inputText" @typeText="typeText" @add="add" />
  <ToDoList :todos="state.todos" />
</template>

<script>
import { reactive } from "vue";

import ToDoInput from "./ToDoInput.vue";
import ToDoList from "./ToDoList.vue";

export default {
  components: {
    ToDoInput,
    ToDoList
  },
  setup() {
    const state = reactive({
      inputText: "",
      todos: []
    });

    function typeText(text) {
      state.inputText = text;
    }

    function add() {
      state.todos.push(state.inputText);
      state.inputText = "";
    }

    return {
      state,
      typeText,
      add
    };
  }
};
</script>

<style lang="scss" scoped></style>
