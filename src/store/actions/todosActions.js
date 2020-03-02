import Api from '../../api';

export const getTodos = () => {
  return async (dispatch) => {
    try {
      const res = await Api.Todos.getTodos();
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
      const res = await Api.Todos.updateTodo({...todo, isComplete: !todo.isComplete});
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