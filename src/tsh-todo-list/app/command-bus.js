const CommandBus = require("../command-bus/command-bus");
const CreateTodoHandler = require("../routes/todos/handlers/create-todo.handler");

const TodoRepository = require("../routes/todos/repository/todos.repository");

const commandBus = new CommandBus([new CreateTodoHandler(TodoRepository)]);

module.exports = commandBus;
