import { ItemConditionType } from 'shared/src/types/item.type';

export type RegistrationFormType = {
    name: string,
    email: string,
    title: string,
    description: string,
    condition: ItemConditionType,
    city: 'Helsinki',
    country: 'Finland',
    category: 'toy',
    status: 'available'
}