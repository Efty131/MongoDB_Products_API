const express = require('express');
const getProducts = require('../controller/controller')
const { getIndianProducts, uploadIndianProduct } = require('../controller/indianController');
const searchAllProducts = require('../controller/searchController');
const updateProductByName = require('../controller/updateController');
const getProductsByCategory = require('../controller/category');
const saveUser = require('../controller/userController');
const { getPosts, createPost } = require('../controller/postController');
const router = express.Router();

router.get("/", getProducts);
router.get("/indianProduct", getIndianProducts);
router.post("/upload/indianProduct", uploadIndianProduct );
router.post("/saveUser", saveUser );
router.post('/posts', createPost);
router.put('/update/:name', updateProductByName);
router.get("/search", searchAllProducts);
router.get('/posts', getPosts);
router.get('/category/:category', getProductsByCategory);

module.exports = router;