const winston = require("winston");

const logFormat = winston.format.printf((level, message, meta) => {
  return JSON.stringify({
    "@timestamp": new Date().toISOString(),
    "@version": 1,
    application: process.env.APP_NAME,
    environment: process.env.NODE_ENV,
    host: process.env.HOST,
    message,
    severity: level,
    meta,
    type: "stdin"
  });
});

const winstonLogger = winston.createLogger({
  level: process.env.LOGGING_LEVEL | "debug",
  format: logFormat,
  transports: [new winston.transports.Console()]
});

module.exports = {
  logger: winstonLogger
};
