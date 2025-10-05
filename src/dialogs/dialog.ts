import rawDialogs from "./dialogs.json";
import rawInteractions from "./interactions.json";
import type { Location } from "../util/location.ts";

export interface Dialog {
    speaker: string;
    text: string;
    options: DialogOption[];
}

export interface DialogOption {
    text: string;
    next?: (string | Dialog)[];
    money?: number;
    sad?: boolean;
}

type RawDialog = string | {
    money?: number;
    next?: RawDialog[];
    sad?: true;
}

type DialogID = keyof typeof rawDialogs;

function mapDialogs() {
    const dialogs: Record<string, Dialog> = {};
    const raw = rawDialogs as Record<DialogID, RawDialog>;
    for (const key of Object.keys(raw))
        dialogs[key] = mapDialog(raw[<DialogID>key]);
    return dialogs;
}

function mapDialog(raw: RawDialog): Dialog {
    if (typeof raw === "string") {
        return {
            speaker: "Mr. Krabs",
            text: raw,
            options: [ { text: "Next" } ]
        };
    }
    const dialog: Dialog = { options: [], speaker: "", text: "" };
    const money = raw.money;
    for (const key of Object.keys(raw)) {
        if (key === "money" || key === "next" || key === "sad")
            continue;
        if (!dialog.speaker) {
            dialog.speaker = key;
            dialog.text = (raw as any)[key];
            continue;
        }
        const option = (raw as any)[key];
        if (option)
            dialog.options.push(typeof option === "string" && option.charAt(0) === option.charAt(0).toLowerCase() ? {
                money,
                text: "Next",
                next: [ option ]
            } : mapDialog(option));
    }
    return dialog;
}

export const dialogs = mapDialogs();

export const interactions = rawInteractions as Partial<Record<Location, DialogID[]>>;
