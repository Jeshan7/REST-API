const express = require('express');
const router = express.Router();
const Driver = require('../models/driver');

router.get('/driver', (req, res) => {
  res.send("hi");
})

router.post('/driver', (req, res, next) => {

  Driver.create(req.body).then((data) => {
    res.send({type: "POST", Data: data});
  }).catch(next);

  // var driver = new Driver(req.body);
  // driver.save();
})

router.put('/driver/:id', (req, res) => {
  Driver.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
    Driver.findOne({_id: req.params.id}).then((data) => {
      res.send(data);
    })
  })
})

router.delete('/driver/:id', (req, res, next) => {
  Driver.findByIdAndRemove({_id: req.params.id}).then((data) => {
    res.send(data)
  });
})

module.exports = router;
