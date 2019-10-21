import React, {useState} from 'react';
import ReactDOM from "react-dom";
import fetchData from "./hooks/fetchData";
import {endpoints} from "wildcard-api/client";

export default App;

function App() {
  return <TodoList/>;
}

async function getAllTodos() {
  const todos = await endpoints.getTodos();
  console.log('List of todos fetch from our Wildcard API:', todos);
  return todos;
}

function TodoList() {
  const initialTodos = fetchData(getAllTodos);
  console.log('tt', initialTodos);
  const [todos=initialTodos, setTodos] = useState();
  console.log('tt2', todos);

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
      <input type="text" onChange={ev => setText(ev.target.value)} value={text} />
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
