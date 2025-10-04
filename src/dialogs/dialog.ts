import rawDialogs from "./dialogs.json";
import rawInteractions from "./interactions.json";
import type { Location } from "../types/location.ts";

export interface Dialog {
    id: string;
    speaker?: string;
    text: string;
    options: DialogOption[];
}

export interface DialogOption {
    text: string;
    nextId?: string;
    money?: number;
}

export const dialogs = rawDialogs as Record<string, Omit<Dialog, "id">>;
export const interactions = rawInteractions as Partial<Record<Location, string[]>>;
