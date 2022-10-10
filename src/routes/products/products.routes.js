//IMPORTACIONES
const express = require ('express');
const router = express.Router();
const productsControler = require ('../../controllers/products.controller')

//ROUTES

router.get('/', productsControler.getAllProducts);
router.get('/:idProduct', productsControler.getProductId);
router.post('/', productsControler.saveNewProduct);
router.put('/:idProduct', productsControler.updateOneProduct);
router.delete('/:idProduct', productsControler.deleteOneProduct);
  
module.exports = router;