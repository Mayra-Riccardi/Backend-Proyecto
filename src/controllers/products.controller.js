const productsServices = require ('../services/products.services')
const Products = require ('../models/products');

const getAllProducts = (req, res) => {
    const allProducts = productsServices.getAllProducts();
    res.send({status: "OK", data: allProducts})
};

const getProductId = (req, res) => {
  const { idProduct } = req.params;
  const product = productsServices.getProductId(idProduct)
  if (product.error) return res.status(404).send(product.error);
  return res.json(product);
};

const saveNewProduct = (req,res) => {
    const { name, price, image, description } = req.body
    if (!name || !price || !image, !description ) return null;
    
    Products.idCount++
        const newProduct = {
            id: Products.idCount,
            name,
            price,
            image,
            description
        }
    
    
    const saveProduct = productsServices.saveNewProduct(newProduct);
    res.status(201).send({status: "OK", data: saveProduct})
}

const updateOneProduct = (req,res) => {
    const { body, params: {idProduct},} = req;
   
    if (!idProduct) {
        return {error: `Producto con ID ${idProduct} no encontrado`}
    }

    const updatedProduct = productsServices.updateOneProduct(idProduct, body)
    res.send({status: "OK", data: updatedProduct})
}

const deleteOneProduct = (req, res) => {
    const { params: {idProduct},} = req;

    if (!idProduct) {
        return {error: `Producto con ID ${idProduct} no encontrado`}
    }

    productsServices.deleteOneProduct(idProduct);
    res.status(204).send({status: "OK"})
}

module.exports = {
    getAllProducts,
    getProductId,
    saveNewProduct,
    updateOneProduct,
    deleteOneProduct
}