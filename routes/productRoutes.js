const express = require('express');
const router = express.Router();
const { listarProdutos } = require('../controllers/productController');

router.get('/', listarProdutos);

module.exports = router;
