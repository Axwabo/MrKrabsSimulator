import type { Location } from "./types/location.ts";
import { defineStore } from "pinia";

interface State {
    location: Location;
}

const store = defineStore("game", {
    state: (): State => ({ location: "Office" })
});

export default function useGameStore() {
    return store();
}
