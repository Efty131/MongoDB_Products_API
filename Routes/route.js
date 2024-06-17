const express = require('express');
const { getOneProduct, getProducts, searchProducts  } = require('../controller/controller');
const { getIndianProducts, uploadIndianProduct, searchIndianProducts } = require('../controller/indianController');
const router = express.Router();

router.get("/", getProducts);
router.get("/indianProduct", getIndianProducts);
router.post("/upload/indianProduct", uploadIndianProduct );
router.get("/search", searchProducts );
router.get("/search/indianProduct", searchIndianProducts);
router.get('/:id', getOneProduct);

module.exports = router;