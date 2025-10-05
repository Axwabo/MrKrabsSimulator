<script setup lang="ts">
import cash from "/images/cash.webp";
import useGameStore from "../gameStore.ts";
import { onMounted, ref } from "vue";
import jump from "../util/jump.ts";

const { earn } = useGameStore();

const container = ref<HTMLDivElement>();

function collectCoin() {
    earn(10);
    rollNext();
    jump("Mr. Krabs");
}

function rollNext() {
    const div = container.value!;
    for (const animation of div.getAnimations())
        animation.cancel();
    const delay = Math.random() * 20000 + 30000;
    const duration = 5000;
    div.animate([
        { visibility: "visible", translate: "0 0", top: "-2rem" },
        { visibility: "visible", translate: "0 100vh", top: "2rem" }
    ], {
        duration,
        delay
    }).addEventListener("finish", rollNext);
    const left = Math.random() * 50 + 25;
    div.animate([ { left: `calc(${left}vw - 2rem)` }, { left: `calc(${left}vw + 2rem)` } ], {
        duration,
        delay,
        iterations: Infinity
    });
}

onMounted(rollNext);
</script>

<template>
    <div ref="container" class="cash">
        <img :src="cash" alt="" draggable="false" v-on:click="collectCoin">
    </div>
</template>

<style scoped>
.cash {
    position: absolute;
    top: 0;
    visibility: hidden;
}

.cash img {
    max-width: 2rem;
    transform: skewX(20deg);
    animation: swing 2s linear infinite alternate;
    user-select: none;
    -webkit-user-drag: none;
}

@keyframes swing {
    from {
        rotate: -5deg;
    }
    to {
        rotate: 5deg;
    }
}
</style>
