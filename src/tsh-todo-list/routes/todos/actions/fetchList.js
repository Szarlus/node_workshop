module.exports = todosRepository => async (req, res, next) => {
  const todos = await todosRepository.all();

  return res.status(200).json(todos);
};
