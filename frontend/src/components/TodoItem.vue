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
    getItemIndex: function (list, id) {
      return list.findIndex((item) => item.id === id);
    },
    onDelete: function (id) {
      this.todo.$patch((state) => {
        const index = this.getItemIndex(state.list, id);
        state.list.splice(index, 1);
        state.hasChanged = true;
      });
    },
    onEdit: function (e) {
      e.preventDefault();
      this.todo.$patch((state) => {
        const index = this.getItemIndex(state.list, this.item.id);
        state.list[index].title = this.itemTitle;
        state.hasChanged = true;
        this.editMode = false;
      });
    },
    onCheck: function (e) {
      this.todo.$patch((state) => {
        const index = this.getItemIndex(state.list, this.item.id);
        state.list[index].isDone = e.target.checked;
        state.hasChanged = true;
      });
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
