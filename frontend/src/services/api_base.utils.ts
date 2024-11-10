export const BASE_URL = process.env.NODE_ENV === 'production' 
                        ? process.env.PRODUCTION_API_BASE_URL 
                        : process.env.LOCAL_API_BASE_URL;