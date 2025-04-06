const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');

// rotas protegidas
router.post('/', authMiddleware, productController.createProduto); 
router.get('/', authMiddleware, productController.getAllProdutos);
router.get('/:id', authMiddleware, productController.getProdutoById);
router.put('/:id', authMiddleware, productController.updateProduto);
router.delete('/:id', authMiddleware, productController.deleteProduto);

module.exports = router;
