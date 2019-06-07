const express = require('express')
      routes = require("./routes/api"),
      bodyParser = require('body-parser'),
      mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost/driver");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);
app.use((err, req, res, next) => {
  res.status(422).send({ERROR: "Name field is required"})
})

app.listen(process.env.port || 3000, ()=>{
  console.log("Connected ..");
})
