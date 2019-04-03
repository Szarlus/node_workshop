const express = require("express");
const { createRouting } = require("../routes/routing");
const config = require("./config");
const { errorHandler } = require("./error.handler");
const { NotFoundError } = require("../errors/not-found.error");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();

    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      // eslint-disable-next-line
      console.log(req.path);

      next();
    });

    this.app.use((req, res, next) => {
      // eslint-disable-next-line
      console.log("next middleware");

      next();
    });

    this.app.use(createRouting());

    this.app.use("*", (req, res, next) => {
      next(new NotFoundError("Page not found"));
    });

    this.app.use(errorHandler);
  }

  start() {
    this.app.listen(config.port);
  }
}

module.exports = Server;
