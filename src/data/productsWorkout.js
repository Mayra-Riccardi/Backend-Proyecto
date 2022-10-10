const Products = require ('../models/products');
let productsApi = new Products()

const getAllProducts = () => {
    return productsApi.getAll();
};

const getProductId = (idProduct) => {
  return productsApi.getById(idProduct);
};

const saveNewProduct = (newProduct) => {
    return productsApi.saveProduct(newProduct);
};

const updateOneProduct = (idProduct, changes) => {
    return productsApi.updateProduct(idProduct, changes);
};

const deleteOneProduct = (idProduct) => {
    return productsApi.deleteProduct(idProduct);
}


module.exports = {
    getAllProducts,
    getProductId,
    saveNewProduct,
    updateOneProduct,
    deleteOneProduct
}