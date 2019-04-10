const CreateTodoCommand = require("../commands/create-todo.command");
const { v4 } = require("uuid");
module.exports = (todosRepository, commandBus) => async (req, res, next) => {
  const id = v4();
  const command = new CreateTodoCommand(id, req.body.name);

  try {
    await commandBus.handle(command);

    res.status(201).json(await todosRepository.findOne(id));
  } catch (e) {
    next(e);
  }
};
