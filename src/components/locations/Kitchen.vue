<script setup lang="ts">
import Navigator from "./Navigator.vue";
</script>

<template>
    <main class="location">
        <Navigator target="Dining Hall" />
        <Navigator target="Delivery" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/kitchen.webp");
}
</style>
