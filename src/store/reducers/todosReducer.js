const initState = {
  todos: {}
};

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
      return {
        ...state,
        todos: action.payload
      };

    case 'COMPLETE_TODO':
      const updatedTodos = state.todos.map(item => {
        if(item.id === action.payload.id) {
          return {...item, isComplete: !item.isComplete}
        }

        return item
      });

      return {
        ...state,
        todos: updatedTodos
      };

    default:
      return state;
  }
};

export default todosReducer;