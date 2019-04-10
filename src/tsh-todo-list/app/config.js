const dbConfig = require("./db-config");

module.exports = {
  port: process.env.PORT || 50050,
  db: dbConfig
};
