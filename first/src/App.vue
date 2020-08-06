<template>
  <div id="app">
    <Data />
    <Two />
  </div>
</template>

<script>
import Data from "./components/Data.vue";
import Two from "./components/Two.vue";

export default {
  name: "App",
  components: {
    Data,
    Two,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
