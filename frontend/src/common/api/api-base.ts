export const BASE_URL = process.env.NODE_ENV === 'production' 
                        ? process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL 
                        : process.env.NEXT_PUBLIC_PRODUCTION_API_BASE_URL;