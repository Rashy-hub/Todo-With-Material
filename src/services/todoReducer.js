export const initialTodos = () => {
  return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      console.log('ADD A TODO');
      const newTodo = { id: action.id, title: action.title, complete: false };
      localStorage.setItem('todos', JSON.stringify([...state, newTodo]));

      return [...state, newTodo];
    }
    case 'COMPLETE': {
      console.log('TOGLE COMPLETE A TODO');
      const newState = state.map((todo) => (todo.id === action.id ? { ...todo, complete: !todo.complete } : todo));
      localStorage.setItem('todos', JSON.stringify([...newState]));
      return newState;
    }

    default:
      return state;
  }
};
