<template>
  <div id="root">
    <MyHeader />
    <router-view />
  </div>
</template>

<script lang="ts">
import MyHeader from "./MyHeader.vue";
export default {
  components: {
    MyHeader
  }
};
</script>
>
