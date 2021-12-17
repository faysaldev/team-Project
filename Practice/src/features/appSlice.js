import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  user: null,
  todo: null,
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    singleTodo: (state, { payload }) => {
      state.todo = payload;
    },
    singleRemoveTodo: (state, { payload }) => {
      state.todo = null;
    },
    removeTodo: (state, { payload }) => {
      const index = state.todos.findIndex((basketItem) => basketItem._id === payload.id);

      let newBasket = [...state.todos];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        alert(`Cant remove product id ${payload.id}`);
      }

      state.todos = newBasket;
    }
  },
});

export const { addTodo, login, singleTodo, removeTodo, logout ,singleRemoveTodo} = appSlice.actions;

export const selectTodos = (state) => state.app.todos;
export const selectUser = (state) => state.app.user;
export const selectTodo = (state) => state.app.todo;


export default appSlice.reducer;
