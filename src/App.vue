<script setup lang="ts">
import PWABadge from "./components/PWABadge.vue"
import SplashScreen from "./components/SplashScreen.vue";
import MoneyAudio from "./components/MoneyAudio.vue";
import { ref } from "vue";

const playing = ref(false);
</script>

<template>
    <MoneyAudio />
    <SplashScreen v-if="!playing" v-on:play="playing = true" />
    <PWABadge />
</template>
