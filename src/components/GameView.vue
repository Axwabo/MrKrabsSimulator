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
    <img :src="krabs" alt="" class="mr-krabs">
    <Money />
</template>

<style scoped>
.mr-krabs {
    max-width: 50vw;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
}
</style>
