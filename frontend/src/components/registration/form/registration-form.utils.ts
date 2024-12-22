import { ItemCreateParams } from "shared/src/types/item.type";

export const registrationFormDefaultValues: ItemCreateParams =  {
    name: '',
    email: '',
    title: '',
    description: '',
    condition: 'like-new',
    city: 'Helsinki',
    category: 'toy',
}