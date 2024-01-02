const TodoSchema = require("../../shema/todoShema");
const resolvers = {
  Query: {
    todos: async () => {
      return await TodoSchema.find();
    },
  },
  Mutation: {
    createTodo: async (parent, args) => {
      let todo = new TodoSchema(args);
      return await todo.save();
    },
  },
};
module.exports = resolvers;
