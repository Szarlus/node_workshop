const Server = require("./server");
const { createRouting } = require("../routes/routing");
const { createTodosRouting } = require("../routes/todos/todos.routing");
const todosActions = require("../routes/todos/actions");
const todosRepository = require("../routes/todos/repository/todos.repository");

const createCommandBus = require("./command-bus");
const commandBus = createCommandBus({ todosRepository });

const server = new Server({
  routing: createRouting({
    todosRouting: createTodosRouting(
      todosActions({
        todosRepository,
        commandBus
      })
    )
  })
});

module.exports = {
  server
};
