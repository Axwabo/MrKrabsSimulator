export type Location = "Kitchen" | "Dining Hall" | "Drive Thru" | "Office";

export const locationIDs: Partial<Record<Location, string>> = {
    "Dining Hall": "diningHall",
    "Kitchen": "kitchen"
} as const;
