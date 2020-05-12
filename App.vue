<template>
  <div class="content">
    <h1>ToDo App</h1>
    <p>Test Todo App</p>
    <ToDoInput :inputText="state.inputText" @typeText="typeText" @add="add" />
    <ToDoList :todos="state.todos" />
  </div>
</template>

<script lang="ts">
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

<style lang="scss" scoped>
h1 {
  color: #6a8bad;
}
.content {
  color: #4e6e8e;
}
</style>
