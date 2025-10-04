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
    left: 2rem;
}
</style>
