const { NotFoundError } = require("../../../errors/not-found.error");

module.exports = todosRepository => async (req, res, next) => {
  const todo = await todosRepository.findOne(req.params.id);

  if (todo) {
    return res.status(200).json(todo);
  }

  next(new NotFoundError(`Todo of id :${req.params.id} not exists`));
};
