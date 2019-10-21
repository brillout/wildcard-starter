import "core-js/stable";
import "regenerator-runtime/runtime";
import {endpoints} from 'wildcard-api/client';

(async () => {
  const todos = await endpoints.getTodos();
})();
