import { createRouter, createWebHistory } from "vue-router";
import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import AdminDashboard from "@/views/AdminDashboard.vue";
import RegisterForm from "@/views/RegisterForm.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/catalog",
			name: "Catalog",
			component: Catalog,
		},
		{
			path: "/product/:id",
			name: "ProductView",
			component: ProductDetail,
		},
		{
			path: "/cart",
			name: "CartView",
			component: Cart,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/register",
			name: "Register",
			component: RegisterForm,
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
		},
		{
			path: "/admin-dashboard",
			name: "AdminDashboard",
			component: AdminDashboard,
		},
	],
});

export default router;
