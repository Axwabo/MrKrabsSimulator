import rawDialogs from "./dialogs.json";
import rawInteractions from "./interactions.json";
import type { Location } from "../util/location.ts";

export interface Dialog {
    speaker: string;
    text: string;
    options: DialogOption[];
    sad?: boolean;
    laugh?: boolean;
}

export interface DialogOption {
    text: string;
    next?: (string | Dialog)[];
    money?: number;
}

type RawDialog = string | {
    money?: number;
    next?: RawDialog[];
    sad?: true;
    laugh?: true;
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
    const dialog: Dialog = { options: [], speaker: "", text: "", sad: raw.sad, laugh: raw.laugh };
    const money = raw.money;
    for (const key of Object.keys(raw)) {
        if (key === "money" || key === "next" || key === "sad" || key === "laugh")
            continue;
        if (!dialog.speaker) {
            dialog.speaker = key;
            dialog.text = (raw as any)[key];
            continue;
        }
        const option = (raw as any)[key];
        if (option)
            dialog.options.push({
                text: key,
                next: Array.isArray(option) ? option.map(mapOption) : [ mapOption(option) ],
                money
            });
        else
            dialog.options.push({ text: key, money });
    }
    if (dialog.options.length === 0)
        dialog.options.push({ text: "Next", money });
    return dialog;
}

function mapOption(raw: any): string | Dialog {
    return typeof raw === "string" && raw.charAt(0) === raw.charAt(0).toLowerCase()
        ? raw
        : mapDialog(raw);
}

export const dialogs = mapDialogs();

export const interactions = rawInteractions as Partial<Record<Location, DialogID[]>>;
