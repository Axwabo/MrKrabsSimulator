import { defineStore } from "pinia";

interface State {
    id: string | null;
    speaker: string;
    text: string;
}

const store = defineStore("dialog", {
    state: (): State => ({ id: null, speaker: "", text: "" })
});

export default function useDialogStore() {
    return store();
}
