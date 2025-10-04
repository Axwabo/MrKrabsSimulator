<script setup lang="ts">
import coin from "/images/coin.webp";
import useGameStore from "../gameStore.ts";
import { onMounted, ref } from "vue";

const { earn } = useGameStore();

const element = ref<HTMLDivElement>();

const direction = ref<PlaybackDirection>("normal");

function collectCoin() {
    earn(0.25);
    rollNext();
}

function rollNext() {
    const div = element.value!;
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

onMounted(rollNext);
</script>

<template>
    <div ref="element" class="quarter">
        <img :src="coin" alt="" v-on:click="collectCoin()" draggable="false">
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
