import { Button, Input } from '@material-tailwind/react';

import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const AddTodoUI = ({ dispatch }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value.trim();
    if (title) {
      dispatch({ type: 'ADD', title, id: uuidv4() });
      e.target[0].value = '';
    }
  };
  return (
    <form onSubmit={submitHandler} className="m-auto flex flex-row justify-center items-center space-x-2">
      <Input label="Add Todo" className="w-full" />
      <Button type="submit" className="w-32">
        Add
      </Button>
    </form>
  );
};

AddTodoUI.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddTodoUI;
