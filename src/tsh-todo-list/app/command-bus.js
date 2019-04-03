const CommandBus = require("../command-bus/command-bus");
const CreateTodoHandler = require("../routes/todos/handlers/create-todo.handler");

const commandBus = new CommandBus([new CreateTodoHandler()]);

module.exports = commandBus;
