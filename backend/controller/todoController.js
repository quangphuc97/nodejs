const TodoSchema = require("../shema/todoShema");
const {
  createTodoValidate,
  updateTodoValidate,
} = require("../validate/todoValidate");
exports.create = (req, res) => {
  const { error, value } = createTodoValidate.validate(req.body);
  if (error != undefined) {
    res.status(400).send({ message: error });
    return;
  }
  let todo = new TodoSchema(value);
  todo
    .save()
    .then(() => res.status(201).send({ message:"Todo created"}))
    .catch((err) => res.status(500).send(err));
};

exports.getAll = (req, res) => {
  TodoSchema.find()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({ message: `Error getAll todo ${err}` })
    );
};

exports.find = (req, res) => {
  let id = req.params.id;
  TodoSchema.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found Todo with id=${id}` });
      } else {
        res.status(200).send(data);
      }
    })
    .catch((err) =>
      res.status(500).send({ message: `Error find todo ${err}` })
    );
};

exports.updateById = async (req, res) => {
  let id = req.params.id;
  const { error, value } = updateTodoValidate.validate(req.body);
  if (error != undefined) {
    res.status(400).send({ message: error });
    return;
  }
  console.log(value);
  await TodoSchema.findByIdAndUpdate(id, value, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found Todo with id=${id}` });
      } else {
        res.status(200).send({ message: `Update Todo with id=${id} sucess` });
      }
    })
    .catch((err) => res.status(500).send({ message: `Error updateById todo` }));
};

exports.deleteById = (req, res) => {
  let id = req.params.id;
  TodoSchema.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found Todo with id=${id}` });
      } else {
        res.status(200).send({ message: `Delete Todo with id=${id} sucess` });
      }
    })
    .catch((err) =>
      res.status(500).send({ message: `Error deleteById todo ${err}` })
    );
};
