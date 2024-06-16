const express = require('express');
const { getOneProduct, getProducts, getIndianProducts, uploadIndianProduct  } = require('../controller/controller');
const router = express.Router();

router.get("/", getProducts);
router.get("/indianProduct", getIndianProducts);
router.post("/upload/indianProduct", uploadIndianProduct );
router.get('/:id', getOneProduct); 

module.exports = router;