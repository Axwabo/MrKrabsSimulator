<script setup lang="ts">
import Navigator from "./Navigator.vue";
import RandomQuarter from "../RandomQuarter.vue";
import Character from "../Character.vue";
import squidward from "/images/squidward.webp";
</script>

<template>
    <main class="location">
        <Navigator target="Office" />
        <Navigator target="Kitchen" />
        <RandomQuarter />
        <Character :src="squidward" location="Dining Hall" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/hall.webp");
}
</style>
