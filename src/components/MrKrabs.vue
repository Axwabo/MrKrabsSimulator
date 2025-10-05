<script setup lang="ts">
import krabs from "/images/krabs.webp";
import walk from "/audio/crab-walk.ogg";
import sad from "/audio/sad.ogg";
import laugh from "/audio/krabs-laugh.ogg";
import { storeToRefs } from "pinia";
import useGameStore from "../gameStore.ts";
import { ref, watch } from "vue";
import { replay } from "../util/audio.ts";

const { location } = storeToRefs(useGameStore());

const element = ref<HTMLAudioElement>();

watch(location, () => replay(element.value!));
</script>

<template>
    <img :src="krabs" alt="" class="character">
    <audio ref="element" :src="walk"></audio>
    <audio :src="sad" id="sad"></audio>
    <audio :src="laugh" id="krabsLaugh"></audio>
</template>

<style scoped>
.character {
    right: 2rem;
    pointer-events: none;
}
</style>
