const { server } = require("./app/container");
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

server.start();
