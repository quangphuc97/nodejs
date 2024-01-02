module.exports = (app) => {
  const TodoController = require("../controller/todoController");
  let router = require("express").Router();
  router.get("/", TodoController.getAll);
  router.get("/:id", TodoController.find);
  router.post("/", TodoController.create);
  router.put("/:id", TodoController.updateById);
  router.delete("/:id", TodoController.deleteById);
  app.use("/api/todo", router);
};