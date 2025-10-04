<script setup lang="ts">
import { storeToRefs } from "pinia";
import useDialogStore from "../dialogs/dialogStore.ts";

const { dialog: currentDialog } = storeToRefs(useDialogStore());

const { choose } = useDialogStore();
</script>

<template>
    <dialog id="dialog" open v-if="!!currentDialog">
        <h2>{{ currentDialog.speaker ?? "Mr. Krabs" }}</h2>
        <p>{{ currentDialog.text }}</p>
        <div class="dialog-buttons">
            <button v-for="option in currentDialog.options" v-on:click="choose(option)">{{ option.text }}</button>
        </div>
    </dialog>
</template>

<style scoped>
#dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    margin: 0;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 25vw;
}

#dialog h2 {
    text-align: center;
    margin: 0;
}

.dialog-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>
