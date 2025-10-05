<script setup lang="ts">
import { storeToRefs } from "pinia";
import useDialogStore from "../dialogs/dialogStore.ts";
import { ref, watch } from "vue";

const { dialog: currentDialog } = storeToRefs(useDialogStore());

const { choose } = useDialogStore();

const element = ref<HTMLDialogElement>();

watch(currentDialog, (dialog, previous) => {
    if (!dialog)
        element.value!.close();
    else if (!previous)
        element.value!.showModal();
});
</script>

<template>
    <dialog ref="element" id="dialog" closedby="none">
        <template v-if="!!currentDialog">
            <h2>{{ currentDialog.speaker }}</h2>
            <p>{{ currentDialog.text }}</p>
            <div class="dialog-buttons">
                <button v-for="option in currentDialog.options" v-on:click="choose(option)">{{ option.text }}</button>
            </div>
        </template>
    </dialog>
</template>

<style scoped>
#dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    margin: 0;
    min-width: 50vw;
}

#dialog h2 {
    margin: 0;
}

#dialog button {
    background-color: #444;
}

.dialog-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>
