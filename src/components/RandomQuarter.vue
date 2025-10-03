<script setup lang="ts">
import coin from "/images/coin.webp";
import useGameStore from "../gameStore.ts";
import { computed, nextTick, onMounted, ref } from "vue";

const { earn } = useGameStore();

const from = ref(window.innerWidth * 2);
const to = ref(0);

const fromPx = computed(() => `${from.value}px`);
const toPx = computed(() => `${to.value}px`);

const speed = ref("1s");

function collectCoin() {
    earn(0.25);
    nextTick(rollNext);
}

function rollNext(applySpeed: boolean = true) {
    const offset = window.innerWidth * (Math.random() * 10 + 1);
    if (applySpeed)
        speed.value = `${Math.abs(from.value - offset) / 1000}s`;
    from.value = to.value;
    to.value = offset * Math.sign(Math.random() - 0.5);
}

onMounted(() => rollNext(false));
</script>

<template>
    <div class="quarter" v-on:animationend="rollNext()">
        <img :src="coin" alt="" v-on:click="collectCoin()">
    </div>
</template>

<style scoped>
.quarter {
    position: absolute;
    left: 50%;
    bottom: 0;
    animation: move v-bind(speed) linear;
}

.quarter img {
    max-width: 1rem;
    animation: roll 1s linear infinite;
    user-select: none;
}

@keyframes roll {
    from {
        rotate: 0;
    }
    to {
        rotate: 1turn;
    }
}

@keyframes move {
    from {
        translate: v-bind(fromPx) 0;
    }
    to {
        translate: v-bind(toPx) 0;
    }
}
</style>
