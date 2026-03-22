import { Locale } from "next-intl";

export const urlConfigs = {
    home: {
        path: '/',
        enable: true
    },
    about: {
        path: '/about',
        enable: true
    },
    contact: {
        path: '/contact',
        enable: false
    },
    donatedItems: {
        path: '/donated-items',
        create: {
            path: '/donated-items/create',
            enable: true
        },
        enable: true
    },
}

export const getLocalizedPath = (locale: Locale, path: string) => {
    const normalizedPath = path.replace(/^\/+/, "");
    return normalizedPath ? `/${locale}/${normalizedPath}` : `/${locale}`;
}