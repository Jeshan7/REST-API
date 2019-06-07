const express = require('express');
const router = express.Router();

router.get('/driver', (req, res) => {
  res.send("hi");
})

router.post('/driver', (req, res) => {
  res.send({type: "POST", name: req.body});
})

router.put('/driver/:id', (req, res) => {
  res.send("hi");
})

router.delete('/driver/:id', (req, res) => {
  res.send("hi");
})

module.exports = router;
