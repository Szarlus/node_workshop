const express = require("express");
const { createTodosRouting } = require("./todos/todos.routing");

const createRouting = () => {
  const router = new express.Router();

  router.use("/todos", createTodosRouting());

  return router;
};

module.exports = {
  createRouting
};
