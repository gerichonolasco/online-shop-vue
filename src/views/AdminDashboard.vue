<template>
	<div class="admin-dashboard">
		<div class="dashboard-header">
			<h1>Admin Dashboard</h1>
		</div>
		<div class="add-product-form">
			<h2>Add New Product</h2>
			<form @submit.prevent="addProduct">
				<div class="form-group">
					<label for="brand">Brand</label>
					<input
						v-model="newProduct.brand"
						id="brand"
						placeholder="Brand"
						required
					/>
				</div>
				<div class="form-group">
					<label for="description">Description</label>
					<textarea
						v-model="newProduct.description"
						id="description"
						placeholder="Description"
						required
					></textarea>
				</div>
				<div class="form-group">
					<label for="price">Price</label>
					<input
						v-model.number="newProduct.price"
						id="price"
						placeholder="Price"
						required
					/>
				</div>
				<!-- Add this form for uploading thumbnails -->
				<div class="upload-thumbnail-form">
					<h2>Upload Thumbnail</h2>
					<form @submit.prevent="uploadThumbnail">
						<div class="form-group">
							<label for="thumbnail-upload"
								>Select Thumbnail</label
							>
							<input
								type="file"
								id="thumbnail-upload"
								@change="handleFileUpload($event)"
							/>
						</div>
						<button type="submit" class="submit-button">
							Upload
						</button>
					</form>
				</div>
				<br />
				<button type="submit" class="submit-button">Add Product</button
				><br />
				<div class="products-list">
					<h2>Products</h2>
					<ul>
						<li v-for="product in products" :key="product.id">
							{{ product.brand }} - {{ product.description }}
							<button @click="editProduct(product)">Edit</button>
							<button @click="deleteProduct(product.id)">
								Delete
							</button>
						</li>
					</ul>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { productsStore } from "@/stores/products";

const products = ref(productsStore().products);
const newProduct = ref({
	brand: "",
	description: "",
	thumbnail: "",
	price: 0,
});

const addProduct = () => {
	productsStore().products.push(newProduct.value);
	newProduct.value = { brand: "", description: "", thumbnail: "", price: 0 };
};

const editProduct = (product) => {
	// Implement editing logic here
	console.log("Editing product:", product);
};

const deleteProduct = (id) => {
	productsStore().products = productsStore().products.filter(
		(product) => product.id !== id
	);
};
</script>

<style scoped>
.admin-dashboard {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	background-color: #f5f5f5;
	border-radius: 8px;
}

.dashboard-header {
	text-align: center;
	margin-bottom: 20px;
}

.add-product-form,
.products-list {
	margin-bottom: 20px;
}

.form-group {
	margin-bottom: 10px;
}

.form-group label {
	display: block;
	margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
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
