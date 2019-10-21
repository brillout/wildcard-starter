import {endpoints} from 'wildcard-api/client';

(async () => {
  const todos = await endpoints.getTodos();
})();
