import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    list: [],
  }),
  getters: {
    notDoneItems: (state) => state.list.filter(({ isDone }) => !isDone),
    doneItems: (state) => state.list.filter(({ isDone }) => isDone),
  },
});
