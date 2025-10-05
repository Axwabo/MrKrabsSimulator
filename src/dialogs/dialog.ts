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

interface RawDialog {
    id: string;
    speaker?: string;
    text: string;
    options?: RawOption[];
}

type RawOption = string | { text: string; nextId?: string; };

function mapDialog(key: string, rawDialog: RawDialog): Dialog {
    return {
        id: key,
        speaker: rawDialog.speaker ?? "Mr. Krabs",
        text: rawDialog.text,
        options: rawDialog.options?.map(mapOption) || [ {
            text: "OK"
        } ]
    };
}

function mapOption(raw: RawOption): DialogOption {
    return typeof raw === "string" ? { text: raw } : raw;
}

function mapDialogs() {
    const dialogs: Record<string, Dialog> = {};
    const raw = rawDialogs as Record<keyof typeof rawDialogs, RawDialog>;
    for (const key of Object.keys(raw)) {
        dialogs[key] = mapDialog(key, raw[<keyof typeof rawDialogs>key]); // genuinely wtf is this syntax, typescript
    }
    return dialogs;
}

export const dialogs = mapDialogs();
export const interactions = rawInteractions as Partial<Record<Location, string[]>>;
