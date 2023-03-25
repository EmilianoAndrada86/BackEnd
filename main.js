import ProductManager from './ProductManager.js'


const ProductManager = new ProductManager()

ProductManager.getProducts()
ProductManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
ProductManager.getProducts()
ProductManager.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25)
ProductManager.getProductById(15)


