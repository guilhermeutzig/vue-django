<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>test docker</h1>
    <h3>Todo</h3>
    <ul v-if="todo.notDoneItems.length > 0 || todo.doneItems.length > 0">
      <li v-for="item in todo.notDoneItems" :key="item.title">
        <TodoItem :item="item" />
      </li>
      <li v-for="item in todo.doneItems" :key="item.title">
        <TodoItem :item="item" />
      </li>
    </ul>

    <p v-if="todo.notDoneItems.length === 0 && todo.doneItems.length === 0">
      No items on your todo list, please add one below.
    </p>
    <form @submit="onAdd(newItemTitle, $event)">
      <InputField
        :value="newItemTitle"
        @input="(e) => (newItemTitle = e.target.value)"
        placeholder="Write here your new item"
      />
      <button type="submit">Add item</button>
    </form>
  </div>
</template>

<script>
import { useTodoStore } from "../store/todo.ts";
import { getTodoItems, addTodoItem } from "../api/todo.ts";

import TodoItem from "./TodoItem.vue";
import InputField from "./InputField.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem,
    InputField,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      todo: useTodoStore(),
      newItemTitle: "",
    };
  },
  mounted: async function () {
    const data = await getTodoItems();
    this.saveNewItems(data);
  },
  methods: {
    saveNewItems: function (items) {
      this.todo.$patch((state) => {
        state.list = items;
      });
    },
    onAdd: async function (newItemTitle, event) {
      event.preventDefault();
      const data = await addTodoItem(newItemTitle);
      this.saveNewItems(data.items);
      this.newItemTitle = "";
    },
    // Pinia method to add items (frontend only, no backend)
    // onAdd: function (newItemTitle, event) {
    //   event.preventDefault();
    //   this.todo.$patch((state) => {
    //     state.list.push({
    //       id: Math.random(),
    //       title: newItemTitle,
    //       isDone: false,
    //     });
    //     this.newItemTitle = "";
    //   });
    // },
  },
};
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
  display: block;
  margin: 10px 0;
}

li:not(:last-child) {
  margin-bottom: 8px;
}

hr {
  margin: 20px 0;
  border-color: #eee;
  background-color: #eee;
}

form {
  display: flex;
  justify-content: center;
}

form input {
  margin-right: 8px;
}
</style>
