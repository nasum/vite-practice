<template>
  Home
  <ul>
    <li v-for="(project, index) of projects" :key="index">
      {{ project }}
    </li>
  </ul>
</template>

<script lang="ts">
import { mapState } from "vuex";
const namespace = "Projects";
export default {
  name: "Home",
  computed: {
    ...mapState(namespace, ["projects"])
  }
};
</script>
c>
