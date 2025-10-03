import office from "/images/office.webp";

export type Location = "Kitchen" | "Dining Hall" | "Delivery" | "Office";

const locationSources: Record<Location, string> = {
    "Office": office,
    "Dining Hall": "",
    "Kitchen": "",
    Delivery: ""
} as const;

export { locationSources };
