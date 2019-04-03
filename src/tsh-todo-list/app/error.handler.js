const { HttpError } = require("../errors/http.error");
const { ValidationError } = require("../errors/validation.error");
const { AppError } = require("../errors/app.error");

const errorHandler = (error, req, res, next) => {
  // eslint-disable-next-line
  console.log(error);

  if (error instanceof ValidationError) {
    res.status(error.status).json({
      code: error.status,
      message: error.message,
      errors: error.errors
    });

    return;
  }

  if (error instanceof HttpError) {
    res.status(error.status).json({
      code: error.status,
      message: error.message
    });

    return;
  }

  if (error instanceof AppError) {
    res.status(500).json({
      code: 500,
      message: error.message
    });

    return;
  }

  res.status(500).send("Error");
};

module.exports = {
  errorHandler
};
