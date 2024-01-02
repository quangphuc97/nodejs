const Joi = require("joi");
exports.createTodoValidate = Joi.object({
  title: Joi.string().min(2).max(150).required(),
  description: Joi.string().max(300),
  start_time: Joi.string().isoDate(),
  end_time: Joi.string().isoDate(),
});

exports.updateTodoValidate = Joi.object({
    title: Joi.string().min(2).max(150),
    description: Joi.string().max(300),
    start_time: Joi.string().isoDate(),
    end_time: Joi.string().isoDate(),
  });
