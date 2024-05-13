// products.js
import { defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        brand: 'Labrador',
        description: 'Rigor is a 2 year old Labrdador',
        thumbnail: '../../img/labrador.jpg',
        price: 39000.00,
      },
      {
        id: 2,
        brand: 'Chihuahua',
        description: 'Lucy the chihuahua is 10 years old',
        thumbnail: '../../img/chihuahua.jpg',
        price: 25000.00,
      },
      // Add more products as needed
    ],
    cart: []
  }),

  actions: {
    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    }
  }
})
