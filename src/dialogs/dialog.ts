import rawDialogs from "./dialogs.json";
import rawInteractions from "./interactions.json";
import type { Location } from "../util/location.ts";

export interface Dialog {
    id: string;
    speaker?: string;
    text: string;
    options: DialogOption[];
}

export interface DialogOption {
    text: string;
    nextIds?: string[];
    money?: number;
}

type RawDialog = string | {
    speaker?: string;
    text: string;
    options?: RawOption[];
    next?: string | string[];
}

type RawOption = string | {
    text: string;
    money?: number;
    nextId?: string;
    nextIds?: string[];
};

const nextArray: DialogOption[] = [ { text: "Next" } ];

function mapDialogs() {
    const dialogs: Record<string, Dialog> = {};
    const raw = rawDialogs as Record<keyof typeof rawDialogs, RawDialog>;
    for (const key of Object.keys(raw)) {
        dialogs[key] = mapDialog(key, raw[<keyof typeof rawDialogs>key]); // genuinely wtf is this syntax, typescript
    }
    return dialogs;
}

function mapDialog(id: string, rawDialog: RawDialog): Dialog {
    return typeof rawDialog === "string"
        ? {
            id,
            speaker: "Mr. Krabs",
            text: rawDialog,
            options: nextArray
        }
        : {
            id,
            speaker: rawDialog.speaker ?? "Mr. Krabs",
            text: rawDialog.text,
            options: rawDialog.next
                ? [ { text: "Next", nextIds: typeof rawDialog.next === "string" ? [ rawDialog.next ] : rawDialog.next } ]
                : rawDialog.options?.map(mapOption) || nextArray
        };
}

function mapOption(raw: RawOption): DialogOption {
    return typeof raw === "string"
        ? { text: raw }
        : { text: raw.text, money: raw.money, nextIds: raw.nextId ? [ raw.nextId ] : raw.nextIds };
}

export const dialogs = mapDialogs();
export const interactions = rawInteractions as Partial<Record<Location, string[]>>;
