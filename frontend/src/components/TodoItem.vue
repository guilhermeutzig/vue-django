<template>
  <form class="todo-item" @submit="onEdit" :class="{ checked: item.isDone }">
    <div class="content">
      <CheckboxField :checked="item.isDone" :onChange="onCheck" />
      <InputField
        :value="itemTitle"
        :onChange="(e) => (itemTitle = e.target.value)"
        :readonly="!editMode"
      />
    </div>
    <div class="content" v-if="!editMode">
      <button type="button" @click="editMode = !editMode">Edit</button>
      <button className="warning" type="button" @click="onDelete(item.id)">
        Delete
      </button>
    </div>
    <button class="success" type="submit" v-if="editMode">Done</button>
  </form>
</template>

<script>
import { useTodoStore } from "../store/todo.ts";
import { deleteTodoItem, editTodoItem } from "../api/todo.ts";

import InputField from "./InputField.vue";
import CheckboxField from "./CheckboxField.vue";

export default {
  name: "TodoItem",
  components: {
    InputField,
    CheckboxField,
  },
  props: {
    item: {
      title: String,
      isDone: Boolean,
    },
  },
  data() {
    return {
      todo: useTodoStore(),
      itemTitle: this.item.title,
      editMode: false,
    };
  },
  methods: {
    saveNewItems: function (items) {
      this.todo.$patch((state) => {
        state.list = items;
      });
    },
    getItemIndex: function (list, id) {
      return list.findIndex((item) => item.id === id);
    },
    onDelete: async function (id) {
      const data = await deleteTodoItem(id);
      this.saveNewItems(data.items);
    },
    onEdit: async function (e) {
      e.preventDefault();
      const data = await editTodoItem({
        id: this.item.id,
        title: this.itemTitle,
      });
      this.editMode = false;
      this.saveNewItems(data.items);
    },
    onCheck: async function (e) {
      const data = await editTodoItem({
        id: this.item.id,
        isDone: e.target.checked,
      });
      this.saveNewItems(data.items);
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
}

.todo-item.checked {
  border-color: #eee;
}

.content {
  display: flex;
  align-items: center;
}

p {
  margin: 0;
}

input {
  margin-right: 8px;
}
</style>
