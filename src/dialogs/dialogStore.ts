import { defineStore } from "pinia";
import { type Dialog, type DialogOption, dialogs, interactions } from "./dialog.ts";
import useGameStore from "../gameStore.ts";
import type { Location } from "../types/location.ts";

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
            if (option.nextIds)
                this.open(random(option.nextIds));
            else
                this.dialog = undefined;
        },
        open(id?: string) {
            if (!id) {
                this.dialog = undefined;
                return;
            }
            const dialog = dialogs[id];
            if (dialog)
                this.dialog = { ...dialog, id };
            else
                this.dialog = undefined;
        }
    }
});

export default function useDialogStore() {
    return store();
}
