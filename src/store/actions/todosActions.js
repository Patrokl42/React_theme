import { appApi } from '../../api';

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.getTodos();
      dispatch(fetchedTodos(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const fetchedTodos = todos => ({
  type: 'FETCH_TODOS_REQUEST',
  payload: todos
});

export const completeTodo = (todo) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.updateTodo({...todo, isComplete: !todo.isComplete});
      dispatch(completedTodo(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const completedTodo = todo => ({
  type: 'COMPLETE_TODO',
  payload: todo
});

export const favoriteTodo = (todo) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.updateTodo({...todo, isFavorite: !todo.isFavorite});
      dispatch(favoritedTodo(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const favoritedTodo = todo => ({
  type: 'FAVORITE_TODO',
  payload: todo
});

export const updateTodo = (todo) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.updateTodo(todo);
      dispatch(updatedTodo(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const updatedTodo = todo => ({
  type: 'UPDATE_TODO',
  payload: todo
});

export const removeTodo = (todo) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.removeTodo(todo.id);
      dispatch(removedTodo(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const removedTodo = todo => ({
  type: 'REMOVE_TODO',
  payload: todo
});

export const createTodo = (todo) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Todos.createTodo(todo);
      dispatch(createdTodo(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const createdTodo = todo => ({
  type: 'CREATE_TODO',
  payload: todo
});