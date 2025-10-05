<script setup lang="ts">
import Navigator from "./Navigator.vue";
import useGameStore from "../../gameStore.ts";
import { playMoney } from "../../util/audio.ts";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const { money } = storeToRefs(useGameStore());

const moneyPercentage = computed(() => Math.max(0, money.value) / 100);
</script>

<template>
    <main class="location right">
        <Navigator target="Dining Hall" />
        <div class="money-pile" v-on:click="playMoney()" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/office.webp");
}

.money-pile {
    --size: v-bind(moneyPercentage);
    background-image: url("/images/cash.webp");
    background-position: bottom center;
    background-size: 2rem 1rem;
    position: absolute;
    bottom: 40%;
    left: 55.5%;
    translate: -50% 0;
    width: calc(var(--size) * 2rem);
    height: calc(var(--size) * 1rem);
}
</style>
