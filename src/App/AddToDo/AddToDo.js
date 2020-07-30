import React from 'react';

function AddToDo({ todoTitle, setTodoTitle, addTodo }) {
  const submitForm = e => {
    e.preventDefault();

    if (todoTitle.trim()) {
      addTodo();
    }
  };

  const changeInput = e => {
    setTodoTitle(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <input value={todoTitle} onChange={changeInput} />
      <button>add</button>
    </form>
  );
}

export default AddToDo;
