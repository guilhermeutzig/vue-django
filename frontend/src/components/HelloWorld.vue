<template>
  <div class="hello">
    <h1>Todo List</h1>
    <h3>All items</h3>
    <ul>
      <li v-for="item in todo.list" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
    <h3>Not done items</h3>
    <ul>
      <li v-for="item in todo.notDoneItems" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
    <h3>Done items</h3>
    <ul>
      <li v-for="item in todo.doneItems" :key="item.title">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTodoStore } from "../store/todo.ts";
const todo = useTodoStore();
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
