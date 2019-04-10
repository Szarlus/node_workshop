const create = require("./create");
const fetch = require("./fetch");
const fetchList = require("./fetchList");

module.exports = ({ todosRepository }) => ({
  fetch,
  create,
  fetchList: fetchList(todosRepository)
});
