const commandBus = require("../../../app/command-bus");
const CreateCommandCommand = require("../commands/create-todo.command");

module.exports = async (req, res, next) => {
  const command = new CreateCommandCommand("1", req.body.name);

  try {
    await commandBus.handle(command);

    res.status(201).json({
      status: "added"
    });
  } catch (error) {
    next(error);
  }
};
