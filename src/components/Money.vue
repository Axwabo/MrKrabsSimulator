<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import playMoney from "../money.ts";

const { money } = storeToRefs(useGameStore());
</script>

<template>
    <span id="money" v-on:click="playMoney()">💲 {{ money }}</span>
</template>

<style scoped>
#money {
    position: absolute;
    top: 1rem;
    left: 1rem;
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    -webkit-text-stroke: 0.05em black;
    user-select: none;
}
</style>
