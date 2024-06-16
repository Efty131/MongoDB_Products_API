const Product = require('../model/model');
const IndianProduct = require('../model/indianModel');

const getProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

const getIndianProducts = async (req, res) => {
    try {
        const products = await IndianProduct.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send(err);
    }
};

const uploadIndianProduct = async (req, res) => {
    try {
        const { name, description, image } = req.body;
        if (!name || !description || !image) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }
        const newProduct = new IndianProduct({
             name,
             description,
             image: image
             });
        await newProduct.save();
        res.json({ message: 'Indian product uploaded successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error uploading Indian product' });
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

module.exports = { getProducts, getOneProduct, getIndianProducts, uploadIndianProduct };