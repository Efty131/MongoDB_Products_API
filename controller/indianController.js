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

module.exports = { getIndianProducts, uploadIndianProduct };