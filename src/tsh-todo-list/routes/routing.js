const express = require("express");

const createRouting = ({ todosRouting }) => {
  const router = new express.Router();

  router.use("/todos", todosRouting);

  return router;
};

module.exports = {
  createRouting
};
