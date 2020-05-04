<template>
  <ul>
    <li v-for="(todo, index) of state.todos" :key="index">
      {{ todo }}
    </li>
  </ul>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    todos: Array
  },
  setup(props, context) {
    const state = {
      todos: computed(() => props.todos)
    };

    return {
      state
    };
  }
};
</script>
>
