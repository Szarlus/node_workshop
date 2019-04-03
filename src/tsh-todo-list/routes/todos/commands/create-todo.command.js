class CreateTodoCommand {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.type = CreateTodoCommand.TYPE;
  }
}

CreateTodoCommand.TYPE = "CreateTodoCommand";

module.exports = CreateTodoCommand;
