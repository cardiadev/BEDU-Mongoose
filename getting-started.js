const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/DJI", { userNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', fuction()
{
  //we're connected!
})