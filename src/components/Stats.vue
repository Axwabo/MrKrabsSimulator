<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";

import { playMoney } from "../util/audio.ts";

const { money, location } = storeToRefs(useGameStore());
</script>

<template>
    <div class="stats">
        <span id="money" v-on:click="playMoney()">💲 {{ money }}</span>
        <h1 id="location">{{ location }}</h1>
    </div>
</template>

<style scoped>
.stats {
    position: absolute;
    top: 1rem;
    left: 50%;
    translate: -50% 0;
    text-align: center;
    -webkit-text-stroke: 2px black;
}

#money {
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    user-select: none;
}

#location {
    margin: 0;
    font-size: 2.5rem;
}
</style>
