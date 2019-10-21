// JavaScript Polyfills
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {endpoints} from 'wildcard-api/client';

ReactDOM.render(
  <App/>,
  document.getElementById('react-root')
);
