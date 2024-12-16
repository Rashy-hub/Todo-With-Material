import { useEffect, useReducer } from 'react';
import AddTodoUI from './components/AddTodoUI';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { initialTodos, todoReducer } from './services/todoReducer';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos());

  useEffect(() => {
    console.log('TODOS CHANGED');
  }, [todos]);

  return (
    <>
      <Header />

      <main className="p-4 w-4/5 flex flex-col gap-4 justify-start items-center m-auto">
        <div className="w-[600px]">
          <AddTodoUI dispatch={dispatch} />
          <TodoList todos={todos} dispatch={dispatch} />
        </div>
      </main>
    </>
  );
}

export default App;
