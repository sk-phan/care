import { ItemCreateParams } from "@/common/types/item/item.type";

export const registrationFormDefaultValues: ItemCreateParams =  {
    name: '',
    email: '',
    title: '',
    description: '',
    condition: 'like-new',
    city: 'helsinki',
    category: 'toy',
}