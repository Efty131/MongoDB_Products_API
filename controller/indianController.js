const IndianProduct = require('../model/indianModel');

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
        const { name, description, image, category } = req.body;

        // Check for required fields
        if (!name || !description || !image || !category) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        // Create new IndianProduct instance
        const newProduct = new IndianProduct({
            name,
            description,
            image,
            category,
        });

        // Save the new Indian product
        await newProduct.save();

        res.json({ message: 'Indian product uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading Indian product:', error);
        res.status(500).json({ message: 'Error uploading Indian product' });
    }
};

module.exports = { getIndianProducts, uploadIndianProduct };