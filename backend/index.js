const express = require('express');
const app = express();
const port = 3000;
const db = require('./shema/db.js');
app.get('/',(req, res)=>{ 
    res.send(url)});
app.listen(port,()=> console.log('start server'));