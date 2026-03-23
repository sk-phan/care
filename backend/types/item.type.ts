export const ITEM_CONDITIONS = ["new", "like-new", "very-good", "good", "acceptable"] as const;
export type ItemConditionType = (typeof ITEM_CONDITIONS)[number];

export const ITEM_STATUSES = ["available", "reserved"] as const;
export type ItemStatusType = (typeof ITEM_STATUSES)[number];

export const ITEM_CATEGORIES = ["toy", "book", "clothing", "other"] as const;
export type ItemCategoryType = (typeof ITEM_CATEGORIES)[number];

export type BaseItemType = {
    name: string;
    title: string;
    description: string;
    condition: ItemConditionType;
    status: ItemStatusType;
    category: ItemCategoryType;
    image?: string;
    city: string;
    country: string;
    createdAt: Date;
    email: string;
}
export type ItemType = BaseItemType & {
    id: string;
};

export type ItemCreateParams = Pick<ItemType, 
    "title" | 
    "name" |
    "email" |
    "description" | 
    "condition" | 
    "category" | 
    "city">;
