<script setup lang="ts">
import Navigator from "./Navigator.vue";
</script>

<template>
    <main class="location">
        <Navigator target="Kitchen" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/drive-thru.webp");
}
</style>
