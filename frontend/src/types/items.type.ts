type Item = {
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

type ItemPostParams = Pick<Item, 
    "title" | 
    "description" | 
    "condition" | 
    "status" | 
    "category" | 
    "image" | 
    "city" | 
    "country" | 
    "donorId">;
