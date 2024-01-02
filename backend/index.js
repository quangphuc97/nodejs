const express = require('express');
const app = express();
const port = 3000;
const db = require('./shema/db.js');
const todoRouter = require('./router/todoRouter.js');
app.use(express.json());
todoRouter(app);
app.listen(port,()=> console.log('start server'));