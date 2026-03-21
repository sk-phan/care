'use server'

import { revalidatePath } from 'next/cache'

export default async function hadnleRevalidatePath(path: string) {
    revalidatePath(path);
}