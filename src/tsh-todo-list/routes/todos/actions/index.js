const create = require("./create");
const fetch = require("./fetch");
const fetchList = require("./fetchList");

module.exports = ({ todosRepository, commandBus }) => ({
  fetch: fetch(todosRepository),
  create: create(todosRepository, commandBus),
  fetchList: fetchList(todosRepository)
});
