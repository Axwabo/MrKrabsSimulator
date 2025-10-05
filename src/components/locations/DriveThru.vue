<script setup lang="ts">
import Navigator from "./Navigator.vue";
import { storeToRefs } from "pinia";
import useGameStore from "../../gameStore.ts";
import { watch } from "vue";
import useDialogStore from "../../dialogs/dialogStore.ts";

const { location } = storeToRefs(useGameStore());

const { interact } = useDialogStore();

watch(location, value => {
    if (value === "Drive Thru")
        interact("Drive Thru");
});
</script>

<template>
    <main class="location">
        <Navigator target="Kitchen" />
    </main>
</template>

<style scoped>
.location {
    background-image: url("/images/drive-thru.webp");
}
</style>
