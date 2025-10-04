<script setup lang="ts">
import PWABadge from "./components/PWABadge.vue"
import SplashScreen from "./components/SplashScreen.vue";
import { defineAsyncComponent, ref } from "vue";

const playing = ref(false);

const location = defineAsyncComponent(() => import("./components/GameView.vue"));
</script>

<template>
    <SplashScreen v-if="!playing" v-on:play="playing = true" />
    <location v-if="playing" />
    <PWABadge />
</template>
