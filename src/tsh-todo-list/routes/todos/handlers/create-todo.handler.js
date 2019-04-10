const CreateTodoCommand = require("../commands/create-todo.command");
const { Todo } = require("../model/todo");
const { AppError } = require("../../../errors/app.error");

class CreateTodoHandler {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }

  supports(command) {
    return command.type === CreateTodoCommand.TYPE;
  }

  async handle(command) {
    const todo = new Todo(command.id, command.name);

    try {
      await this.todosRepository.insert(todo);
    } catch (e) {
      throw new AppError("Could not create a new task");
    }
  }
}

module.exports = CreateTodoHandler;
