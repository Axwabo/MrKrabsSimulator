import office from "/images/office.webp";
import hall from "/images/hall.webp";

export type Location = "Kitchen" | "Dining Hall" | "Delivery" | "Office";

const locationSources: Record<Location, string> = {
    "Office": office,
    "Dining Hall": hall,
    "Kitchen": "",
    "Delivery": ""
} as const;

const navigation: Record<Location, { left?: Location, right?: Location }> = {
    "Office": { right: "Dining Hall" },
    "Dining Hall": { left: "Office", right: "Kitchen" },
    "Kitchen": {},
    "Delivery": {}
} as const;

export { locationSources, navigation };
