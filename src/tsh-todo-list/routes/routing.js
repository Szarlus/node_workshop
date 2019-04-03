const express = require("express");
const { AppError } = require("../errors/app.error");

const createRouting = () => {
  const router = new express.Router();

  router.get("/", (req, res) => {
    res.send("Hello 222").end();
  });

  router.post("/", (req, res) => {
    // eslint-disable-next-line
    console.log(req.body);

    res.json(req.body);
  });

  router.get("/error", (req, res, next) => {
    next(new AppError("Somethign is broken"));
  });

  return router;
};

module.exports = {
  createRouting
};
