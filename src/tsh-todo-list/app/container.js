const Server = require("./server");
const { createRouting } = require("../routes/routing");
const { createTodosRouting } = require("../routes/todos/todos.routing");
const todosActions = require("../routes/todos/actions");
const createCommandBus = require("./command-bus");
const awilix = require("awilix");
const { createConnection } = require("typeorm");
const config = require("./config");
const { Todo } = require("../routes/todos/model/todo");

module.exports = async () => {
  const container = awilix.createContainer();

  const dbConnection = await createConnection(config.db);

  container.register({
    server: awilix.asClass(Server).singleton(),
    todosActions: awilix.asFunction(todosActions).singleton(),
    todosRepository: awilix.asValue(await dbConnection.getRepository(Todo)),
    commandBus: awilix.asFunction(createCommandBus).singleton(),
    todosRouting: awilix.asFunction(createTodosRouting).singleton(),
    routing: awilix.asFunction(createRouting).singleton(),
    dbConnection: awilix.asValue(dbConnection)
  });

  return container;
};
