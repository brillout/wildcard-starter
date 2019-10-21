// JavaScript Polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

import {endpoints} from 'wildcard-api/client';

ReactDOM.render(
  <TodoList/>,
  document.getElementById('react-root')
);
