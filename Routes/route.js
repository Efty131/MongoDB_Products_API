const express = require('express');
const { getOneProduct, getProducts } = require('../controller/controller');
const router = express.Router();

router.get("/", getProducts);

router.get('/:id', getOneProduct); 

module.exports = router;