const create = require("./create");
const fetch = require("./fetch");
const fetchAll = require("./fetch-all");

module.exports = ({ todosRepository }) => ({
  create,
  fetch,
  fetchAll: fetchAll(todosRepository)
});
