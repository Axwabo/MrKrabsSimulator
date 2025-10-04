<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import Stats from "./Stats.vue";
import DialogDisplay from "./DialogDisplay.vue";
import MrKrabs from "./MrKrabs.vue";
import MoneyAudio from "./MoneyAudio.vue";
import WalkingAudio from "./WalkingAudio.vue";
import Office from "./locations/Office.vue";
import DiningHall from "./locations/DiningHall.vue";
import Kitchen from "./locations/Kitchen.vue";
import DriveThru from "./locations/DriveThru.vue";

const { location } = storeToRefs(useGameStore());
</script>

<template>
    <Office location="Office" v-show="location === 'Office'" />
    <DiningHall v-show="location === 'Dining Hall'" />
    <Kitchen v-show="location === 'Kitchen'" />
    <DriveThru v-show="location === 'Drive Thru'" />
    <DialogDisplay />
    <MrKrabs />
    <Stats />
    <MoneyAudio />
    <WalkingAudio />
</template>

