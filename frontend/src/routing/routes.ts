import { Route } from "./routes.type";
import { urlConfigs } from "./url-configs";

export const navRoutes: Route[] = [
    {
        key: 'home',
        path: urlConfigs.home,
    },
    {
        key: 'items',
        path: urlConfigs.donatedItems,
    },
    {
        key: 'about',
        path: urlConfigs.about
    },
];

