const mongoose = require('mongoose');

const comSchema = mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please add a name'],
    },
    tipo: {
      type: String,
      required: [true, 'Please add a name'],
    },
    tarifa: {
      type: String,
      required: [true, 'Please add a name'],
    },
    tp1: {
      type: Number,
    },
    tp2: {
      type: Number,
    },
    tp3: {
      type: Number,
    },
    tp4: {
      type: Number,
    },
    tp5: {
      type: Number,
    },
    tp6: {
      type: Number,
    },
    te1: {
      type: Number,
    },
    te2: {
      type: Number,
    },
    te3: {
      type: Number,
    },
    te4: {
      type: Number,
    },
    te5: {
      type: Number,
    },
    te6: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Comer', comSchema);
