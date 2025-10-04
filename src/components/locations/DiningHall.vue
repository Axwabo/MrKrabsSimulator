<script setup lang="ts">
import Navigator from "./Navigator.vue";
import RandomQuarter from "../RandomQuarter.vue";
</script>

<template>
    <main class="location">
        <Navigator target="Office" />
        <Navigator target="Kitchen" />
        <RandomQuarter />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/hall.webp");
}
</style>
