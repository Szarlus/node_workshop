const createContainer = require("./app/container");
const { logger } = require("./app/logger");

process.on("uncaughtException", error => {
  logger.error(error.message, error);
  process.exit(1);
});

process.on("unhandledRejection", error => {
  logger.error(error.message, error);
  process.exit(1);
});

(async () => {
  const container = await createContainer();
  container.resolve("server").start();
})();
