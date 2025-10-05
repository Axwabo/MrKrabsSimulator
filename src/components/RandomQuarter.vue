<script setup lang="ts">
import coin from "/images/coin.webp";
import sound from "/audio/coin-rolling.ogg";
import useGameStore from "../gameStore.ts";
import { onMounted, onUnmounted, ref } from "vue";

const { earn } = useGameStore();

const container = ref<HTMLDivElement>();

const playback = ref<HTMLAudioElement>();

const direction = ref<PlaybackDirection>("normal");

let interval = 0;

function collectCoin() {
    earn(0.25);
    rollNext();
}

function rollNext() {
    playback.value?.play();
    const div = container.value!;
    div.getAnimations()[0]?.cancel();
    direction.value = Math.random() < 0.5 ? "reverse" : "normal";
    div.animate([
        { visibility: "visible", translate: "0 0", left: "-2rem" },
        { visibility: "visible", translate: "100vw 0", left: "2rem" }
    ], {
        duration: window.innerWidth * 3,
        delay: Math.random() * 10000 + 10000,
        direction: direction.value
    }).addEventListener("finish", rollNext);
}

function setMute() {
    playback.value!.muted = getComputedStyle(container.value!).visibility !== "visible";
}

onMounted(() => {
    rollNext();
    interval = setInterval(setMute, 20);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
    <div ref="container" class="quarter">
        <img :src="coin" alt="" v-on:click="collectCoin()" draggable="false">
        <audio ref="playback" :src="sound" loop muted></audio>
    </div>
</template>

<style scoped>
.quarter {
    position: absolute;
    bottom: 0;
    visibility: hidden;
}

.quarter img {
    max-width: 2rem;
    animation: roll 1s linear infinite;
    animation-direction: v-bind(direction);
    user-select: none;
    -webkit-user-drag: none;
}

@keyframes roll {
    from {
        rotate: 0;
    }
    to {
        rotate: 1turn;
    }
}
</style>
