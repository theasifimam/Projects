const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  imageUrl: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Images", imagesSchema);
