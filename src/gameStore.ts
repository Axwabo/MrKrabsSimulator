import type { Location } from "./types/location.ts";
import { defineStore } from "pinia";

interface State {
    location: Location;
    money: number;
}

const store = defineStore("game", {
    state: (): State => ({ location: "Office", money: 0 })
});

export default function useGameStore() {
    return store();
}
