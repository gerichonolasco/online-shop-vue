<template>
  <header>
    <v-toolbar class="header-toolbar">
      <!-- Add the small picture here -->
      <img src="../img/petpals.jpg" alt="Small Picture" class="small-picture">
      
      <!-- PetPals title -->
      <span class="brand">PetPals Paradise</span>
      
      <!-- Cart button -->
      <div class="cart-items">
      <v-btn
          @click="router.push({ name: 'CartView' })"
          color="primary"
          variant="elevated"
      >Items in Cart: {{ store.cart.length }}
      </v-btn>
      </div>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>


<style scoped>
.cart-items {
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  margin-left: 75%;
}

.small-picture {
  width: 30px; /* Adjust the width of the picture */
  height: auto; /* Maintain aspect ratio */
  margin-left: 24px;
  margin-right: 8px; /* Add some space between picture and text */
}
</style>
