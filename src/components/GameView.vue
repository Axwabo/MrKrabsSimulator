<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import LocationPage from "./LocationPage.vue";
import Money from "./Money.vue";
import RandomQuarter from "./RandomQuarter.vue";
import DialogDisplay from "./DialogDisplay.vue";
import MrKrabs from "./MrKrabs.vue";

const { location } = storeToRefs(useGameStore());
</script>

<template>
    <LocationPage location="Office" v-show="location === 'Office'" />
    <LocationPage location="Dining Hall" v-show="location === 'Dining Hall'" />
    <LocationPage location="Kitchen" v-show="location === 'Kitchen'" />
    <RandomQuarter v-show="location === 'Dining Hall'" />
    <DialogDisplay />
    <MrKrabs />
    <Money />
</template>

