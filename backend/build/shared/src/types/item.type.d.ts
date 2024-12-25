export type ItemConditionType = "new" | "like-new" | "very-good" | "good" | "acceptable";
export type ItemCategoryType = "toy" | "book" | "clothing" | "other";
export type BaseItemType = {
    name: string;
    title: string;
    description: string;
    condition: ItemConditionType;
    status: "available" | "reserved";
    category: ItemCategoryType;
    image?: string;
    city: string;
    country: string;
    createdAt: Date;
    email: string;
};
export type ItemType = BaseItemType & {
    id: string;
};
export type ItemCreateParams = Pick<ItemType, "title" | "name" | "email" | "description" | "condition" | "category" | "city">;
