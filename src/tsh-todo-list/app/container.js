const Server = require("./server");
const { createRouting } = require("../routes/routing");
const { createTodosRouting } = require("../routes/todos/todos.routing");

const server = new Server({
  routing: createRouting({
    todosRouting: createTodosRouting()
  })
});

module.exports = { server };
