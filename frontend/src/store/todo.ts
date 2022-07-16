import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    list: [
      {
        title: "Do homework",
        isDone: false,
      },
      {
        title: "Wash dishes",
        isDone: false,
      },
      {
        title: "Work",
        isDone: true,
      },
    ],
  }),
  getters: {
    notDoneItems: (state) => state.list.filter(({ isDone }) => !isDone),
    doneItems: (state) => state.list.filter(({ isDone }) => isDone),
  },
});
