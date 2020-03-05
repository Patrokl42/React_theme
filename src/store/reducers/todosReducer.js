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
      const updatedCompleteTodos = state.todos.map(item => {
        if(item.id === action.payload.id) {
          return {...item, isComplete: !item.isComplete}
        }
        return item
      });

      return {
        ...state,
        todos: updatedCompleteTodos
      };

    case 'FAVORITE_TODO':
      const updatedFavoriteTodos = state.todos.map(item => {
        if(item.id === action.payload.id) {
          return {...item, isFavorite: !item.isFavorite}
        }
        return item
      });

      return {
        ...state,
        todos: updatedFavoriteTodos
      };

    case 'UPDATE_TODO':
      const updatedTodos = state.todos.map(item => {
        if(item.id === action.payload.id) {
          return action.payload
        }
        return item
      });

      return {
        ...state,
        todos: updatedTodos
      };

    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };

    case 'CREATE_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    default:
      return state;
  }
};

export default todosReducer;