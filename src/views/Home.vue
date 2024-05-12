<template>
    <div class="about">
        <H1>Welcome to</H1>
    </div>
    <div class="img">
        <img src="/img/Title.jpg"  alt="Big Picture">
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
    min-height: 20vh;
    display: flex;
    justify-content: center; /* Add this line to center horizontally */
    align-items: center; /* This line already centers vertically */
    color: #D04C00;
  }
}
</style>