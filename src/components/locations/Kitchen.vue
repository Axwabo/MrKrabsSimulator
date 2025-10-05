<script setup lang="ts">
import Navigator from "./Navigator.vue";
import Character from "../Character.vue";
import spongeBob from "/images/spunch-bob.webp";
import laugh from "/audio/sponge-laugh.ogg";
</script>

<template>
    <main class="location">
        <Navigator target="Dining Hall" />
        <Navigator target="Drive Thru" />
        <Character :src="spongeBob" location="Kitchen" />
        <audio :src="laugh" id="spongeLaugh"></audio>
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/kitchen.webp");
}
</style>
