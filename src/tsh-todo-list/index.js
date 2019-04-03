const Server = require("./app/server");

process.on("uncaughtException", error => {
  // eslint-disable-next-line
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", error => {
  // eslint-disable-next-line
  console.log(error);
  process.exit(1);
});

const server = new Server();
server.start();
