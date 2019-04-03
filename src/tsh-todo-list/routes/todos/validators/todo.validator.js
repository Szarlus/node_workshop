const { Joi } = require("celebrate");

module.exports = {
  newTodo: Joi.object().keys({
    name: Joi.string().required()
  })
};
