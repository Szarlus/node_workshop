const todosRepository = require("../repository/todos.repository");

module.exports = async (req, res, next) => {
  const todos = await todosRepository.findAll();

  return res.status(200).json(todos);
};
