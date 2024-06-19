const Product = require('../model/model');
const IndianProduct = require('../model/indianModel');

const getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const generalProducts = await Product.find({ category });
        const indianProducts = await IndianProduct.find({ category });
        const allProducts = [...generalProducts, ...indianProducts];
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = getProductsByCategory;