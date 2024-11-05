const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('cid');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm', error });
    }
};

const getProductByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const products = await Product.find({ cid: categoryId }).populate('cid');
        res.json(products);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = { getAllProducts, getProductByCategory };
