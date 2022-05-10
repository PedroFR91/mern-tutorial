const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');
const User = require('../models/userModel');
const Comer = require('../models/comModel');

const getComers = asyncHandler(async (req, res) => {
  const comers = await Comer.find({ user: req.user.id });
  res.status(200).json(comers);
});

const setComer = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  const comer = await Comer.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(comer);
});

const updateComer = asyncHandler(async (req, res) => {
  const comer = await Comer.findById(req.params.id);

  if (!comer) {
    res.status(400);
    throw new Error('Comercializadora no encontrada');
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  //Make sure the logged user in user matches the  goal user
  if (comer.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized ');
  }

  const updatedComer = await Comer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedComer);
});

const deleteComer = asyncHandler(async (req, res) => {
  const comer = await Comer.findById(req.params.id);

  if (!comer) {
    res.status(400);
    throw new Error('Comercializadora no encontrada');
  }

  //Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }
  //Make sure the logged user in user matches the  goal user
  if (comer.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User ot authorized, ');
  }
  await comer.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getComers,
  setComer,
  updateComer,
  deleteComer,
};
