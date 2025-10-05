<script setup lang="ts">
import Navigator from "./Navigator.vue";
import RandomQuarter from "../RandomQuarter.vue";
import Character from "../Character.vue";
import squidward from "/images/squidward.webp";
import barnacles from "/audio/what-the-barnacles.ogg";
</script>

<template>
    <main id="diningHall" class="location">
        <Navigator target="Office" />
        <Navigator target="Kitchen" />
        <RandomQuarter />
        <Character :src="squidward" location="Dining Hall" />
        <audio :src="barnacles" class="locational"></audio>
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/hall.webp");
}
</style>
