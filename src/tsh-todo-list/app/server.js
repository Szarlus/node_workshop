const express = require("express");
const config = require("./config");
const { errorHandler } = require("./error.handler");
const { NotFoundError } = require("../errors/not-found.error");
const { ValidationError } = require("../errors/validation.error");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const { isCelebrate } = require("celebrate");
const { logger } = require("./logger");

class Server {
  constructor({ routing }) {
    this.app = express();

    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json());

    this.app.use((req, res, next) => {
      // eslint-disable-next-line
      logger.info(req.path);

      next();
    });

    this.app.use((req, res, next) => {
      // eslint-disable-next-line
      logger.info("next middleware");

      next();
    });

    this.app.use(routing);

    this.app.use("*", (req, res, next) => {
      next(new NotFoundError("Page not found"));
    });

    this.app.use((error, req, res, next) => {
      if (isCelebrate(error)) {
        next(new ValidationError(error.details));
        return;
      }
    });

    // this.app.use(errors());

    this.app.use(errorHandler);
  }

  start() {
    this.app.listen(config.port);
  }
}

module.exports = Server;
