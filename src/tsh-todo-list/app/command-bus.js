const CommandBus = require("../command-bus/command-bus");
const CreateTodoHandler = require("../routes/todos/handlers/create-todo.handler");
const TodosRepository = require("../routes/todos/repository/todos.repository");

const commandBus = new CommandBus([new CreateTodoHandler(TodosRepository)]);

module.exports = commandBus;
