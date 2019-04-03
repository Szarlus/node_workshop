const express = require("express");
const create = require("./actions/create");

const createTodosRouting = () => {
  const router = new express.Router();

  router.post("/", create);

  return router;
};

module.exports = {
  createTodosRouting
};
