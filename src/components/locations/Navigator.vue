<script setup lang="ts">
import useGameStore from "../../gameStore.ts";
import type { Location } from "../../types/location.ts";

const { target } = defineProps<{ target: Location; }>();

const { navigate } = useGameStore();
</script>

<template>
    <button class="navigator" v-on:click="navigate(target)">To {{ target }}</button>
</template>
