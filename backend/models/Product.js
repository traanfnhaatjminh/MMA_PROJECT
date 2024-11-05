const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantityInStock: { type: Number, required: true },
    describe: { type: String },
    image: { type: String },
    cid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('Product', productSchema);
