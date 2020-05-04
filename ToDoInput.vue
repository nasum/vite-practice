<template>
  <input type="text" v-model="state.inputText" />
  <button @click="add">add</button>
</template>

<script>
import { reactive, computed } from "vue";
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

    function typeText(e) {
      context.emit("typeText", e.target.valuel);
    }

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
