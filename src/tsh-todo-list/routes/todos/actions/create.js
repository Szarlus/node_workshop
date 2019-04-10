const commandBus = require("../../../app/command-bus");
const CreateTodoCommand = require("../commands/create-todo.command");
const { v4 } = require("uuid");
module.exports = async (req, res, next) => {
  const id = v4();
  const command = new CreateTodoCommand(id, req.body.name);

  try {
    await commandBus.handle(command);

    res.status(201).json({
      id,
      status: "added"
    });
  } catch (e) {
    next(e);
  }
};
