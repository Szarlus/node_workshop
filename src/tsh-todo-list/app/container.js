const Server = require("./server");
const { createRouting } = require("../routes/routing");
const { createTodosRouting } = require("../routes/todos/todos.routing");
const todosActions = require("../routes/todos/actions");
const TodosRepository = require("../routes/todos/repository/todos.repository");
const createCommandBus = require("./command-bus");
const awilix = require("awilix");

const container = awilix.createContainer();

container.register({
  server: awilix.asClass(Server).singleton(),
  todosActions: awilix.asFunction(todosActions).singleton(),
  todosRepository: awilix.asClass(TodosRepository).singleton(),
  commandBus: awilix.asFunction(createCommandBus).singleton(),
  todosRouting: awilix.asFunction(createTodosRouting).singleton(),
  routing: awilix.asFunction(createRouting).singleton()
});

module.exports = container;
