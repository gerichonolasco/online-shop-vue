<template>
	<div class="container">
		<h1>Login</h1>
		<form @submit.prevent="login">
			<div class="input-container">
				<label for="username">Username:</label>
				<input
					type="text"
					id="username"
					v-model="username"
					required
					class="input-field"
				/>
			</div>
			<div class="input-container">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					v-model="password"
					required
					class="input-field"
				/>
			</div>
			<button type="submit" class="submit-button">Login</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const username = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
	try {
		const response = await axios.post(
			"http://localhost/online-shop-vue/backend/api.php?action=login",
			{
				username: username.value,
				password: password.value,
			}
		);
		if (response.data.success) {
			// Redirect to AdminDashboard or another page based on user role
			router.push({ name: "AdminDashboard" }); // Adjust based on actual route names
		} else {
			console.error(response.data.message);
		}
	} catch (error) {
		console.error("Login failed:", error);
	}
};
</script>

<style scoped>
.container {
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
	box-sizing: border-box;
}

.input-container {
	margin-bottom: 20px;
}

.input-field {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 4px;
}

.submit-button {
	background-color: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	cursor: pointer;
}

.submit-button:hover {
	background-color: #0056b3;
}
</style>
