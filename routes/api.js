const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');

router.get('/driver', (req, res) => {
  res.send("hi");
})

router.post('/driver', (req, res) => {

  Driver.create(req.body).then((data) => {
    res.send({type: "POST", Data: data});
  })

  // var driver = new Driver(req.body);
  // driver.save();
})

router.put('/driver/:id', (req, res) => {
  res.send("hi");
})

router.delete('/driver/:id', (req, res) => {
  res.send("hi");
})

module.exports = router;
