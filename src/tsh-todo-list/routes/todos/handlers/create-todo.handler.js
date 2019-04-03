const CreateTodoCommand = require("../commands/create-todo.command");

class CreateTodoHandler {
  async handle(command) {
    console.log(`command handled ${command.id}`);
  }

  supports(command) {
    return command.type === CreateTodoCommand.TYPE;
  }
}

module.exports = CreateTodoHandler;
