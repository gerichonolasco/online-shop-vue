<template>
	<div class="about">
		<H1>Welcome to</H1>
	</div>
	<div class="img">
		<img src="/img/Title.jpg" alt="Big Picture" />
		<img src="/img/Title2.jpg" alt="Big Picture" />
	</div>
	<div class="about1">
		<H1>"Bringing furry joy to your doorstep, one click at a time!"</H1>
	</div>
</template>

<style scoped>
@media (min-width: 1024px) {
	.img {
		display: flex;
		justify-content: center; /* Add this line to center horizontally */
		align-items: center; /* This line already centers vertically */
	}

	.about {
		min-height: 10vh;
		display: flex;
		justify-content: center; /* Add this line to center horizontally */
		align-items: center; /* This line already centers vertically */
		color: #d04c00;
		font-size: 25px;
	}

	.about1 {
		min-height: 20vh;
		display: flex;
		justify-content: center; /* Add this line to center horizontally */
		align-items: center; /* This line already centers vertically */
		color: #d04c00;
		font-size: 16px;
	}
}
</style>
