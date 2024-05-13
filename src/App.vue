<template>
	<body>
		<header>
			<v-toolbar class="header-toolbar">
				<!-- Make the small picture clickable -->
				<RouterLink to="/" class="router-link">
					<img
						src="../img/petpals.png"
						alt="Small Picture"
						class="small-picture"
					/>
				</RouterLink>

				<!-- PetPals title -->
				<!-- <span class="brand">PetPals Paradise</span> -->

				<div class="nav-center">
					<nav>
						<RouterLink
							to="/"
							active-class="active"
							class="navbar-link"
							>Home</RouterLink
						>
						<RouterLink
							to="/catalog"
							active-class="active"
							class="navbar-link"
							>Pets</RouterLink
						>
						<RouterLink
							to="/about"
							active-class="active"
							class="navbar-link"
							>About</RouterLink
						>
					</nav>
				</div>

				<!-- Cart button -->
				<div class="cart-items">
					<v-btn
						@click="router.push({ name: 'CartView' })"
						color="#96922B"
						variant="elevated"
					>
						Items in Cart: {{ store.cart.length }}
					</v-btn>
					<!-- Login button -->
					<v-btn
						@click="router.push({ name: 'Login' })"
						color="primary"
						variant="elevated"
					>
						Login
					</v-btn>
					<!-- Register button -->
					<v-btn
						@click="router.push({ name: 'Register' })"
						color="primary"
						variant="elevated"
					>
						Register
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
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { productsStore } from "@/stores/products";

const router = useRouter();
const store = productsStore();
</script>

<style>
body {
	background-color: #faefe0;
}
</style>

<style scoped>
.header-toolbar {
	background-color: #d04c00;
}

.cart-items {
	font-weight: bold;
	font-size: 24px;
	cursor: pointer;
	margin-left: 75%;
}

.small-picture {
	width: 45px; /* Adjust the width of the picture */
	height: auto; /* Maintain aspect ratio */
	margin-left: 2px;
	margin-right: 8px; /* Add some space between picture and text */
}

.active {
	font-weight: 700;
	color: red;
}

.nav-center {
	justify-content: center; /* Add this line to center horizontally */
	align-items: center; /* This line already centers vertically */
}

.navbar-link {
	padding: 10px;
	color: #faefe0;
	font-size: 15px;
	text-decoration: none;
}
</style>
