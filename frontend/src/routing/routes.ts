import { Route } from "./routes.type";

export const navRoutes: Route[] = [
    {
        id: 'home',
        title: 'Home',
        path: {
            fi: '/',
            en: '/en'
        },
    },
    {
        id: 'items',
        title: 'Items',
        path: {
            fi: '/items',
            en: '/en/items'
        }
    },
    {
        id: 'about',
        title: 'About',
        path: {
            fi: '/about',
            en: '/en/about'
        }
    },
    {
        id: 'contact',
        title: 'Contact',
        path: {
            fi: '/contact',
            en: '/en/contact'
        }
    },
];

export const loginRoute: Route = {
    id: 'login',
    title: 'Login',
    path: {
        fi:'/login',
        en: '/en/login'
    }
}

