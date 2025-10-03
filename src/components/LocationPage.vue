<script setup lang="ts">
import { type Location, locationSources } from "../types/location.ts";

const { location } = defineProps<{ location: Location; }>();

const src = `url("${locationSources[location]}")`;
</script>

<template>
    <main class="location"></main>
</template>

<style scoped>
.location {
    background-image: v-bind(src);
    background-size: cover;
    background-position: center;
}
</style>
