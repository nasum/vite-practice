<template>
  <header>
    <h1><RouterLink to="/">TodoApp</RouterLink></h1>
    <ul>
      <li><RouterLink to="/users">users</RouterLink></li>
      <li><RouterLink to="/todos">todos</RouterLink></li>
      <li><RouterLink to="/groups">groups</RouterLink></li>
      <li><RouterLink to="/analytics">analytics</RouterLink></li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
header {
  display: flex;
  flex-direction: row;
  hegit: 74px;
}
h1 {
  a {
    color: #6a8bad;
  }
}
ul {
  display: flex;
  flex-direction: row;
  padding: 0;
  list-style: none;
  li {
    margin: 0 10px;
    padding: 1em;
  }
}
</style>
