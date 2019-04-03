const Server = require("./app/server");
const { logger } = require("./app/logger");

process.on("uncaughtException", error => {
  // eslint-disable-next-line
  logger.error(error.message, error);
  process.exit(1);
});

process.on("unhandledRejection", error => {
  // eslint-disable-next-line
  logger.error(error.message, error);
  process.exit(1);
});

const server = new Server();
server.start();
