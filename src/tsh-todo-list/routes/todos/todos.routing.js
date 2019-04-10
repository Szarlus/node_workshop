const express = require("express");
const { celebrate } = require("celebrate");
const todoValidator = require("./validators/todo.validator");

const createTodosRouting = ({ todosActions }) => {
  const router = new express.Router();

  router.post(
    "/",
    [
      celebrate({
        body: todoValidator.newTodo
      })
    ],
    todosActions.create
  );

  router.get("/", todosActions.fetchList);
  router.get("/:id", todosActions.fetch);

  return router;
};

module.exports = {
  createTodosRouting
};
