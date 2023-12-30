const url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mongodb:27017/`;
const mongoose = require('mongoose');
mongoose.connect(url, {
  useNewUrlParser: true,
  dbName: process.env.MONGO_DB
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connect db error'));
db.once('open', function(){
  console.log(
    'database connected successfully'
  );
})