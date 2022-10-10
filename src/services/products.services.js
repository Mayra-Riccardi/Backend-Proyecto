const products = require ('../data/productsWorkout')

const getAllProducts = () => { 
    const allProducts = products.getAllProducts();
    return allProducts;
}
const getProductId = (id) => { 
    const idProduct = products.getProductId(id)
    return idProduct; 
}

const saveNewProduct = (newProduct) => { 
    const productToInsert = {
        ...newProduct,
        /* createAt: new Date.toLocaleString('en-US', {timezone: "UTC"}),
        updateAt: new Date.toLocaleString('en-US', {timezone: "UTC"}) */
}

    const savedProduct = products.saveNewProduct(productToInsert)
    return savedProduct;
}

const updateOneProduct = (idProduct, changes) => {
    const updatedProduct = products.updateOneProduct(idProduct, changes);
    return updatedProduct;
}

const deleteOneProduct = (idProduct) => {
    products.deleteOneProduct(idProduct)
}
module.exports = {
    getAllProducts,
    getProductId,
    saveNewProduct,
    updateOneProduct,
    deleteOneProduct
}