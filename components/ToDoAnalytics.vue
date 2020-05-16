<template>
  <section>
    <h2>
      Analytics
    </h2>
    {{ state.hoge }}
  </section>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  setup(_, context) {
    const state = {
      hoge: "hogge"
    };

    return {
      state
    };
  }
};
</script>
