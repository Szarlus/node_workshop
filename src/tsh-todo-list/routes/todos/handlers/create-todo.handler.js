const CreateTodoCommand = require("../commands/create-todo.command");
const Todo = require("../model/todo");
const { AppError } = require("../../../errors/app.error");

class CreateTodoHandler {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }

  async handle(command) {
    const todo = new Todo(command.id, command.name);

    try {
      await this.todosRepository.add(todo);
    } catch (error) {
      throw new AppError("Could not create a new task");
    }
  }

  supports(command) {
    return command.type === CreateTodoCommand.TYPE;
  }
}

module.exports = CreateTodoHandler;
