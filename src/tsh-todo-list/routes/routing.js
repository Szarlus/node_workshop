const express = require("express");
const { AppError } = require("../errors/app.error");
const { Joi, celebrate } = require("celebrate");

const createRouting = () => {
  const router = new express.Router();

  router.get("/", (req, res) => {
    res.send("Hello 222").end();
  });

  router.post(
    "/",
    [
      celebrate(
        {
          body: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required()
          })
        },
        { abortEarly: false }
      )
    ],
    (req, res) => {
      // eslint-disable-next-line
      console.log(req.body);

      res.json(req.body);
    }
  );

  router.get("/error", (req, res, next) => {
    next(new AppError("Somethign is broken"));
  });

  return router;
};

module.exports = {
  createRouting
};
