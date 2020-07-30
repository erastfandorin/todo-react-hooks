import React from 'react';
import { listItem, done } from './ToDoItem.module.css';

const ToDoItem = ({ todo, onChange, deleteTodo }) => {
  const classCheckbox = [];
  if (todo.completed) {
    classCheckbox.push(done);
  }
  return (
    <li className={listItem}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onChange.bind(null, todo.id)}
      />
      <p className={classCheckbox.join(' ')}>{todo.title}</p>
      <button onClick={deleteTodo.bind(null, todo.id)}>delete</button>
    </li>
  );
};

export default ToDoItem;
