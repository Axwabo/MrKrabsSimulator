<script setup lang="ts">
import coin from "/images/coin.webp";
import useGameStore from "../gameStore.ts";
import { nextTick, onMounted, ref } from "vue";

const { earn } = useGameStore();

const position = ref("-100vw");

const speed = ref("1s");

function collectCoin() {
    earn(0.25);
    speed.value = "0";
    nextTick(rollNext);
}

function rollNext() {
    const offset = window.innerWidth * (Math.random() * 10 + 1);
    speed.value = `${offset / 192}s`;
    position.value = `${Math.random() < 0.5 ? -offset : offset + 100}px 0`;
}

onMounted(() => nextTick(rollNext));
</script>

<template>
    <div class="quarter" v-on:transitionend="rollNext()">
        <img :src="coin" alt="" v-on:click="collectCoin()">
    </div>
</template>

<style scoped>
.quarter {
    position: absolute;
    left: 50%;
    bottom: 0;
}

.quarter img {
    max-width: 1rem;
    animation: coin 1s linear infinite;
    translate: v-bind(position);
    transition: translate v-bind(speed) linear;
    user-select: none;
}

@keyframes coin {
    from {
        rotate: 0;
    }
    to {
        rotate: 1turn;
    }
}
</style>
