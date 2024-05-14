const ProductsService = require("../../services/product.service");

/* eslint-disable no-unused-vars */
const service = new ProductsService();


const product = async (_, {id}) => {
  return await service.findOne(id);
}

const allProducts = async (_, args) => {
  return await service.find({});
}

module.exports = { product, allProducts };
