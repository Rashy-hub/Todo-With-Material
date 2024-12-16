import { Checkbox, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const TodoLine = ({ todo, dispatch }) => {
  return (
    <li key={todo.id} className="flex flex-row  justify-between mt-4">
      <Typography variant="h5" className="block">
        {todo.title}
      </Typography>

      <Checkbox color="green" checked={todo.complete} onChange={() => dispatch({ type: 'COMPLETE', id: todo.id })} />
    </li>
  );
};

TodoLine.propTypes = {
  todo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default TodoLine;
