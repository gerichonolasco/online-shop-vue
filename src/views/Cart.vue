<template>
  <button @click="router.push({ name: 'Catalog' })" class="colors">Back to catalog</button>
  <div v-if="!store.cart.length" style="text-align: center" class="colors">
    <h1>Empty Cart ...</h1>
  </div>
  <div class="cart-items" v-else>
    <div
        class="cart-item"
        v-for="item in store.cart"
        :key="item.id"
    >
      <div class="item-details colors">
        <img :src="item.thumbnail" alt="">
        <span>Breed: {{ item.brand }}</span>
        <span>Price: P{{ item.price }}</span>
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>
    <div class="checkout-button-container">
      <button class="checkout-button colors" @click="checkout">Checkout</button>
    </div>
  </div>
</template>

<script setup>
  import { productsStore } from "@/stores/products";
  import { useRouter } from "vue-router";

  const router = useRouter()
  const store = productsStore()

  const removeFromCart = (id) => {
    store.removeFromCart(id)
  }

  const checkout = () => {
    // Add checkout logic here
    // For now, let's just navigate back to the catalog after checkout
    router.push({ name: 'Catalog' })
  }
</script>

<style scoped>
.colors {
  color: #D04C00;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  box-shadow: 0 0 17px 6px #e7e7e7;
  border-radius: 8px;
  padding: 16px;
}

.item-details img {
  width: 20%;
}

.checkout-button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.checkout-button {
  padding: 10px 15px; 
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px; 
}

.checkout-button:hover {
  background-color: #45a049;
}
</style>
