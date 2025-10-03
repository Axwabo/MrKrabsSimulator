<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import LocationPage from "./LocationPage.vue";
import krabs from "/images/krabs.webp";
import Money from "./Money.vue";

const { location } = storeToRefs(useGameStore());
</script>

<template>
    <LocationPage location="Office" v-show="location === 'Office'" />
    <LocationPage location="Dining Hall" v-show="location === 'Dining Hall'" />
    <LocationPage location="Kitchen" v-show="location === 'Kitchen'" />
    <img :src="krabs" alt="" class="character">
    <Money />
</template>

<style scoped>
.character {
    left: 2rem;
}
</style>
