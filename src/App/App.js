import React, { useState, useEffect } from 'react';
import AddToDo from './AddToDo/AddToDo.js';
import ToDoList from './ToDoList/ToDoList.js';
import style from './App.module.css';

function App() {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoList, setTodoList] = useState([
    { id: 1, completed: false, title: 'work' },
    { id: 2, completed: false, title: 'learn' },
  ]);

  useEffect(() => {
    const saveTodo = JSON.parse(localStorage.getItem('todoList'));
    setTodoList(saveTodo);
  }, []);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    setTodoList(
      todoList.concat([
        {
          id: Date.now(),
          completed: false,
          title: todoTitle,
        },
      ]),
    );
    setTodoTitle('');
  };

  const onChange = id => {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const deleteTodo = id => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <section className={style.todo}>
      <h1> React Todo </h1>
      <AddToDo
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        addTodo={addTodo}
      />
      <ToDoList
        todoList={todoList}
        onChange={onChange}
        deleteTodo={deleteTodo}
      />
    </section>
  );
}

export default App;
