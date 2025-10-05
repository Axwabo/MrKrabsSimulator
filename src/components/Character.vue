<script setup lang="ts">
import useDialogStore from "../dialogs/dialogStore.ts";
import type { Location } from "../types/location.ts";

const { src, location } = defineProps<{ src: string; location?: Location; }>();

const { interact } = useDialogStore();
</script>

<template>
    <img :src="src" alt="" class="character" v-on:click="location && interact(location)">
</template>

<style scoped>
.character {
    cursor: pointer;
    left: 2rem;
    transition: filter 0.2s;
}

.character:hover {
    filter: drop-shadow(0px 0px 2px white) drop-shadow(0px 0px 2px white) drop-shadow(0px 0px 2px white);
}
</style>
