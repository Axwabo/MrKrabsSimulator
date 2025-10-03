import { type Location } from "./types/location.ts";
import { defineStore } from "pinia";
import playMoney from "./money.ts";

interface State {
    location: Location;
    money: number;
}

const store = defineStore("game", {
    state: (): State => ({ location: "Office", money: 0 }),
    actions: {
        earn(amount: number) {
            if (amount <= 0)
                return;
            this.money += amount;
            playMoney();
        },
        navigate(location: Location) {
            this.location = location;
        }
    }

});

export default function useGameStore() {
    return store();
}
