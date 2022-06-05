const express = require('express');
const app = express();
const foodModel = require('../models/food');

// GET
app.get('/', async (req, res) => {
  const foods = await foodModel.find({});
  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});

// POST
app.post('/', async (req, res) => {
  const food = new foodModel(req.body);
  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PATCH
app.patch('/:id', async (req, res) => {
  try {
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE
app.delete('/:id', async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.params.id);
    res.status(200).send('Deleted!');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
