<script setup lang="ts">
import { storeToRefs } from "pinia";
import useDialogStore from "../dialogStore.ts";
import { ref } from "vue";

const { id } = storeToRefs(useDialogStore());

const element = ref<HTMLDialogElement>();
</script>

<template>
    <dialog ref="element" id="dialog" :open="!!id">

    </dialog>
</template>

<style scoped>
#dialog {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    translate: -50% 0;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.3);
}
</style>
