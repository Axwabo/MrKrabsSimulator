<script setup lang="ts">
import { characters, type Location, locationSources, navigation } from "../types/location.ts";
import useGameStore from "../gameStore.ts";
import useDialogStore from "../dialogs/dialogStore.ts";

const { location } = defineProps<{ location: Location; }>();

const { navigate } = useGameStore();

const { interact } = useDialogStore();

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
        <img v-if="character" :src="character" alt="" class="character" v-on:click="interact(location)">
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
    left: 2rem;
}
</style>
