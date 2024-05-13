<template>
	<div class="register-container">
		<h2>Register</h2>
		<form @submit.prevent="handleSubmit">
			<div class="form-group">
				<label for="email">Email</label>
				<input
					type="email"
					id="email"
					v-model="email"
					required
					class="input-field"
				/>
			</div>
			<div class="form-group">
				<label for="username">Username</label>
				<input
					type="text"
					id="username"
					v-model="username"
					required
					class="input-field"
				/>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					type="password"
					id="password"
					v-model="password"
					required
					class="input-field"
				/>
			</div>
			<button type="submit" class="submit-button">Register</button>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router"; // Import useRouter

const email = ref("");
const username = ref("");
const password = ref("");

const router = useRouter(); // Use useRouter to get the router object

const handleSubmit = () => {
	const newUser = {
		action: "register",
		email: email.value,
		username: username.value,
		password: password.value,
		role: "user",
	};

	axios
		.post(
			"http://localhost/online-shop-vue/backend/api.php?action=register",
			newUser
		)
		.then((response) => {
			console.log("User registered successfully:", response.data);
			// Redirect to login page or dashboard after successful registration
			router.push({ name: "Login" }); // Uncomment and adjust according to your routing setup
		})
		.catch((error) => {
			console.error("Error registering user:", error);
		});
};
</script>
<style scoped>
.register-container {
	width: 100%;
	max-width: 600px;
	margin: auto;
	padding: 20px;
}

.form-group {
	margin-bottom: 15px;
}

.input-field {
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
}

.submit-button {
	display: block;
	width: 100%;
	padding: 10px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}
</style>
