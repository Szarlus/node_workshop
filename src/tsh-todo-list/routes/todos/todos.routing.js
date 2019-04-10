const express = require("express");
const { celebrate } = require("celebrate");
const todoValidator = require("./validators/todo.validator");

const createTodosRouting = ({ create, fetch, fetchList }) => {
  const router = new express.Router();

  router.post(
    "/",
    [
      celebrate({
        body: todoValidator.newTodo
      })
    ],
    create
  );

  router.get("/", fetchList);
  router.get("/:id", fetch);

  return router;
};

module.exports = {
  createTodosRouting
};
