import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem.js';
import style from './ToDoList.module.css';

function ToDoList({ todoList, onChange, deleteTodo }) {
  return (
    <ul className={style.list}>
      {todoList ? (
        todoList.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <p>not todo</p>
      )}
    </ul>
  );
}

export default ToDoList;
