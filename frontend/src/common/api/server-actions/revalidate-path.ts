'use server'

import { revalidatePath } from 'next/cache'

const locales = ['fi', 'en'];
export default async function handleRevalidatePath(path: string) {
    for (const locale of locales) {
        revalidatePath(`${locale}/${path}`);
    }
}