<template>
  <body>
  <header>
    <v-toolbar class="header-toolbar">
      <!-- Add the small picture here -->
      <img src="../img/petpals.jpg" alt="Small Picture" class="small-picture">
      
      <!-- PetPals title -->
      <!-- <span class="brand">PetPals Paradise</span> -->

      <div class='nav-center'>
        <nav>
            <RouterLink to="/" active-class="active" class="navbar-link">Home</RouterLink>
            <RouterLink to="/catalog" active-class="active" class="navbar-link">Catalog</RouterLink>
            <RouterLink to="/about" active-class="active" class="navbar-link">Abouts</RouterLink>
        </nav>
      </div>
      
      <!-- Cart button -->
      <div class="cart-items">
      <v-btn
          @click="router.push({ name: 'CartView' })"
          color=#96922B
          variant="elevated"
      >Items in Cart: {{ store.cart.length }}
      </v-btn>
      </div>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</body>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { useRouter } from "vue-router";
  import { productsStore } from "@/stores/products";

  const router = useRouter()
  const store = productsStore()
</script>

<style>
body{
  background-color: #FAEFE0;
}</style>

<style scoped>
.header-toolbar{
  background-color: #D04C00;
}

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

.active {
    font-weight:700;
    color: red;
}

.nav-center {
  justify-content: center; /* Add this line to center horizontally */
  align-items: center; /* This line already centers vertically */
}

.navbar-link {
    padding: 10px;
    color: #FAEFE0;
    font-size: 15px;
    text-decoration: none;
}

</style>
