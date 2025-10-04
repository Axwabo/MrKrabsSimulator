<script setup lang="ts">
import Navigator from "./Navigator.vue";
import Character from "../Character.vue";
import spongeBob from "/images/spunch-bob.webp";
</script>

<template>
    <main class="location">
        <Navigator target="Dining Hall" />
        <Navigator target="Drive Thru" />
        <Character :src="spongeBob" location="Kitchen" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/kitchen.webp");
}
</style>
