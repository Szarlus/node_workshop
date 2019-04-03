const { HttpError } = require("./http.error");

class ValidationError extends HttpError {
  constructor(errors) {
    super("Validation error", 422);

    this.errors = errors;
  }
}

module.exports = {
  ValidationError
};
