<template>
  <input type="text" v-model="state.inputText" @keydown.enter="add" />
  <button @click="add">add</button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    inputText: String
  },
  setup(props, context) {
    const state = {
      inputText: computed({
        get: () => props.inputText,
        set: val => context.emit("typeText", val)
      })
    };

    function add() {
      context.emit("add");
    }

    return {
      state,
      add
    };
  }
};
</script>
