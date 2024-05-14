const { product, allProducts } = require("./product.resolver");

const resolvers = {
  Query: {
    product,
    allProducts
  }
}

module.exports = resolvers;
