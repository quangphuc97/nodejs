const express = require('express');
const app = express();
const port = 3000;
const db = require('./shema/db.js');
const todoRouter = require('./router/todoRouter.js');
const typeDefs = require('./graphql/schema/schema.js');
const resolvers = require('./graphql/resolver/resolver.js');
const {ApolloServer} = require('apollo-server-express');
const cors = require('cors');
startServer = async()=>{
    const apoloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apoloServer.start();
    apoloServer.applyMiddleware({app});
    console.log(`graphql url ${apoloServer.graphqlPath}`);
}
startServer();
app.use(cors());
app.use(express.json());
todoRouter(app);
app.listen(port,()=> console.log('start server'));