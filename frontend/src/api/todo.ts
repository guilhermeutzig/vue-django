import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;

export const getTodoItems = async () => {
  const { data } = await axios.get(`${API_URL}/get-data`);
  return data;
};

export const addTodoItem = async (newItemTitle) => {
  const { data } = await axios.post(`${API_URL}/add`, { title: newItemTitle });
  return data;
};

export const deleteTodoItem = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}/delete`);
  return data;
};

export const editTodoItem = async (item) => {
  const { id } = item;
  delete item.id;
  const { data } = await axios.put(`${API_URL}/${id}/edit`, item);
  return data;
};
