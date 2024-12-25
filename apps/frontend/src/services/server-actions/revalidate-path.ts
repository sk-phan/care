'use server'

import { revalidatePath } from 'next/cache'

export default async function revalidateHomePath(path: string) {
    revalidatePath(path);
}