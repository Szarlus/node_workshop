const { AppError } = require("../errors/app.error");

class CommandBus {
  constructor(handlers) {
    this.handlers = handlers;
  }

  async handle(command) {
    const handler = this.handlers.find(handler => handler.supports(command));

    if (!handler) {
      throw new AppError(`Command is not supported`);
    }

    await handler.handle(command);
  }
}

module.exports = CommandBus;
