import TodoLine from './TodoLine';
import PropTypes from 'prop-types';

const TodoList = ({ todos, dispatch }) => {
  return (
    <ul className="flex flex-col w-full">
      {todos.map((todo) => (
        <TodoLine key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoList;
