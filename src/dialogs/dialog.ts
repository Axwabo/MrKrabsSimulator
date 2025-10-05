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

type RawDialog = string | {
    speaker?: string;
    text: string;
    options?: RawOption[];
    next?: string;
}

type RawOption = string | { text: string; nextId?: string; };

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
                ? [ { text: "Next", nextId: rawDialog.next } ]
                : rawDialog.options?.map(mapOption) || nextArray
        };
}

function mapOption(raw: RawOption): DialogOption {
    return typeof raw === "string" ? { text: raw } : raw;
}

export const dialogs = mapDialogs();
export const interactions = rawInteractions as Partial<Record<Location, string[]>>;
