import { BaseDonorType } from "../donor/donor.type";

export type ItemType = {
    id: string;
    title: string;
    description: string;
    condition: string;
    status: string;
    category: string;
    image: string;
    city: string;
    country: string;
    donorId: string | BaseDonorType;
    createdAt: string;
};

export type ItemPostParams = Pick<ItemType, 
    "title" | 
    "description" | 
    "condition" | 
    "status" | 
    "category" | 
    "image" | 
    "city" | 
    "country" | 
    "donorId">;
