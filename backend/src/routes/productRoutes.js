const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
// const auth = require('../middlewares/authMiddleware');

// router.post('/', auth, controller.createProduct);
// router.get('/', auth, controller.getAllProducts);
// router.get('/:id', auth, controller.getProductById);
// router.put('/:id', auth, controller.updateProduct);
// router.delete('/:id', auth, controller.deleteProduct);

router.post('/', controller.createProduct);
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
