import React, {useState} from 'react';
import ReactDOM from "react-dom";
import fetchData from "./hooks/fetchData";
import {endpoints} from "wildcard-api/client";

export default TodoList;

async function getAllTodos() {
  const todos = await endpoints.getTodos();
  console.log('List of todos fetched from our Wildcard API endpoint `/wildcard/getTodos`:', JSON.stringify(todos, null, 2));
  return todos;
}

function TodoList() {
  const initialTodos = fetchData(getAllTodos);
  const [todos=initialTodos, setTodos] = useState();

  if( todos===null ) {
    return <>Loading...</>;
  }

  return (
    <>
      To-dos:
      <ul>
        { todos.map(todo =>
          <li key={todo.id}>
            {todo.text}
          </li>
        ) }
        <li>
          <NewTodo setTodos={setTodos}/>
        </li>
      </ul>
    </>
  );
}

function NewTodo({setTodos}) {
  const [text, setText] = useState('');

  return (
    <form onSubmit={createTodo}>
      <input type="text" onChange={ev => setText(ev.target.value)} value={text} autoFocus/>
      {' '}
      <button type="submit">New To-do</button>
    </form>
  );

  async function createTodo(ev) {
    ev.preventDefault();
    if( !text ) {
      return;
    }
    setText('');
    await endpoints.createTodo(text);
    const todos = await endpoints.getTodos();
    setTodos(todos);
  }
}
