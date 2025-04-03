import { Route } from "./routes.type";
import { urlConfigs } from "./url-configs";

export const navRoutes: Route[] = [
    {
        key: 'home',
        path: urlConfigs.Home,
    },
    {
        key: 'items',
        path: urlConfigs.DonatedItems,
    },
    {
        key: 'about',
        path: urlConfigs.About
    },
];

