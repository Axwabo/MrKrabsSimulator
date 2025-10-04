import office from "/images/office.webp";
import hall from "/images/hall.webp";
import spongeBob from "/images/spunch-bob.webp";
import squidward from "/images/squidward.webp";

export type Location = "Kitchen" | "Dining Hall" | "Delivery" | "Office";

export const locationSources: Record<Location, string> = {
    "Office": office,
    "Dining Hall": hall,
    "Kitchen": "",
    "Delivery": ""
} as const;

export const navigation: Record<Location, { left?: Location, right?: Location }> = {
    "Office": { right: "Dining Hall" },
    "Dining Hall": { left: "Office", right: "Kitchen" },
    "Kitchen": {},
    "Delivery": {}
} as const;

export const characters: Partial<Record<Location, string>> = {
    "Dining Hall": squidward,
    "Kitchen": spongeBob
} as const;
