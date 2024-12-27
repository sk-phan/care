import { Route } from "./routes.type";
import { urlConfigs } from "./url-configs";

export const navRoutes: Route[] = [
    {
        id: 'home',
        title: 'Home',
        path: urlConfigs.Home,
    },
    {
        id: 'items',
        title: 'Items',
        path: urlConfigs.Items,
    },
    {
        id: 'about',
        title: 'About',
        path: urlConfigs.About
    },
    {
        id: 'contact',
        title: 'Contact',
        path: urlConfigs.Contact
    },
];

