const CommandBus = require("../command-bus/command-bus");
const CreateTodoHandler = require("../routes/todos/handlers/create-todo.handler");

module.exports = ({ todosRepository }) =>
  new CommandBus([new CreateTodoHandler(todosRepository)]);
