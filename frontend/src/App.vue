<template>
  <div class="container">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    TodoList,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Serif");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 32px 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

button {
  cursor: pointer;
  background-color: rgb(92, 92, 247);
  color: white;
  border: 0;
  padding: 10px 20px;
  border-radius: 4px;
}

button:not(:last-child) {
  margin-right: 8px;
}

.warning {
  background-color: #ce4c4c;
}

.success {
  background-color: rgb(2, 174, 2);
}
</style>
