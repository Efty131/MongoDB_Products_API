const Product = require('../model/model');

const getProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Search products by name
const searchProducts = async (req, res) => {
    try {
        const query = req.query.q;
        const products = await Product.find({ 
            name: new RegExp(query, 'i') // Perform a case-insensitive search
        });
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Assuming your route is '/products/:id'
const getOneProduct = async (req, res) => {
    try {
        const productId = req.params.id; // Use 'id' instead of 'name'
        const product = await Product.findOne({ _id: productId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found ;(' });
        }

        res.json(product.name);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error retrieving product' });
    }
};

module.exports = { getProducts, getOneProduct, searchProducts };