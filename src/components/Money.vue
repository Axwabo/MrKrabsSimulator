<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";

const { money } = storeToRefs(useGameStore());
</script>

<template>
    <span id="money">💲 {{ money }}</span>
</template>

<style scoped>
#money {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 2rem;
    font-weight: bold;
    -webkit-text-stroke: 0.05em black;
}
</style>
