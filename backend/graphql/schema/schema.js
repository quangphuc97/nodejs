const { gql } = require("apollo-server-express")
const typeDefs = gql`
scalar DateTime

type Todo {
    title: String
    description: String
    start_time: DateTime
    end_time: DateTime
}
type Query {
    todos: [Todo]
}
type Mutation {
    createTodo(title:String, description:String,start_time: DateTime,  end_time:DateTime):Todo
}
`;
module.exports = typeDefs;