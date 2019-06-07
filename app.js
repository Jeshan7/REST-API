const express = require('express')
      routes = require("./routes/api"),
      bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || 3000, ()=>{
  console.log("Connected ..");
})
