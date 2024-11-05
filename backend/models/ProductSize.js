const mongoose = require('mongoose');

const productSizeSchema = new mongoose.Schema({
  productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  sizes: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('ProductSize', productSizeSchema);
