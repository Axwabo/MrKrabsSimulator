<script setup lang="ts">
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import { ref, watch } from "vue";
import walk from "/audio/crab-walk.ogg";

const { location } = storeToRefs(useGameStore());

const element = ref<HTMLAudioElement>();

watch(location, () => {
    element.value!.currentTime = 0;
    element.value!.play();
});
</script>

<template>
    <audio ref="element" :src="walk"></audio>
</template>
