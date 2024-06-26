// models/IndianProduct.js
const mongoose = require('mongoose');

const IndianProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
},
});

module.exports = mongoose.model('IndianProduct', IndianProductSchema);
