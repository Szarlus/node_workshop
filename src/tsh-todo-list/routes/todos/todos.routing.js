const express = require("express");
const { create, fetch, fetchAll } = require("./actions");
const todoValidator = require("./validators/todo.validator");
const { celebrate } = require("celebrate");

const createTodosRouting = () => {
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

  router.get("/", fetchAll);

  router.get("/:id", fetch);

  return router;
};

module.exports = {
  createTodosRouting
};
