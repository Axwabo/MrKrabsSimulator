import { defineStore } from "pinia";
import { type Dialog, type DialogOption, dialogs, interactions } from "./dialog.ts";
import useGameStore from "../gameStore.ts";
import type { Location } from "../util/location.ts";

interface State {
    dialog: Dialog | undefined;
}

const { earn } = useGameStore();

function random<T>(list: T[]) {
    return list[Math.floor(Math.random() * list.length)];
}

const store = defineStore("dialog", {
    state: (): State => ({ dialog: undefined }),
    actions: {
        interact(location: Location) {
            if (this.dialog)
                return;
            const list = interactions[location];
            if (list)
                this.open(random(list));
        },
        choose(option: DialogOption) {
            earn(option.money ?? 0);
            if (option.next)
                this.open(random(option.next));
            else
                this.dialog = undefined;
        },
        open(dialog?: string | Dialog) {
            this.dialog = typeof dialog === "string" ? dialogs[dialog] : dialog;
        }
    }
});

export default function useDialogStore() {
    return store();
}
