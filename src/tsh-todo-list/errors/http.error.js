const { AppError } = require("./app.error");

class HttpError extends AppError {
  constructor(message, status) {
    super(message);

    this.status = status;
  }
}

module.exports = {
  HttpError
};
