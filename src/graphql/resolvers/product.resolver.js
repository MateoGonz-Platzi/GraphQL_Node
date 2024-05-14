/* eslint-disable no-unused-vars */
const product = (_, {id}) => {
  return {
    id,
    name: 'Product 1',
    price: 100,
    description: 'This is a product',
    image: 'https://placeimg.com/640/480/tech',
    createdAt: new Date().toISOString()
  }
}

const allProducts = (_, args) => {
  return [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'This is a product',
      image: 'https://placeimg.com/640/480/tech',
      createdAt: new Date().toISOString()
    },
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'This is a product',
      image: 'https://placeimg.com/640/480/tech',
      createdAt: new Date().toISOString()
    }
  ]
}

module.exports = { product, allProducts };
