<script setup lang="ts">
import { characters, type Location, locationSources, navigation } from "../types/location.ts";
import useGameStore from "../gameStore.ts";

const { location } = defineProps<{ location: Location; }>();

const { navigate } = useGameStore();

const left = navigation[location].left;
const right = navigation[location].right;
const character = characters[location];

const src = `url("${locationSources[location]}")`;
</script>

<template>
    <main class="location">
        <button v-if="left" v-on:click="navigate(left)">To {{ left }}</button>
        <span v-else></span>
        <button v-if="right" v-on:click="navigate(right)">To {{ right }}</button>
        <img v-if="character" :src="character" alt="" class="character">
    </main>
</template>

<style scoped>
.location {
    background-image: v-bind(src);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
}

.character {
    right: 2rem;
}
</style>
