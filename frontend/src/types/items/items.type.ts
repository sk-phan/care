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
    donorId: string;
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
