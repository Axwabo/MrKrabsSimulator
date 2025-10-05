<script setup lang="ts">
import Navigator from "./Navigator.vue";
import { onMounted, onUnmounted, ref } from "vue";
import useDialogStore from "../../dialogs/dialogStore.ts";
import RandomCash from "../RandomCash.vue";

const { interact } = useDialogStore();

const customers = ref(0);

let timeout = 0;

function queue() {
    timeout = setTimeout(queue, Math.random() * 10000 + 5000);
    customers.value++;
}

onMounted(queue);

onUnmounted(() => clearTimeout(timeout));
</script>

<template>
    <main class="location">
        <Navigator target="Kitchen" />
        <RandomCash />
        <button :disabled="!customers" v-on:click="customers--; interact('Drive Thru')">Next Customer</button>
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/drive-thru.webp");
}
</style>
