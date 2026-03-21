import { Route } from "./routes.type";
import { urlConfigs } from "./url-configs";

export const navRoutes: Route[] = [
    {
        key: 'home',
        path: urlConfigs.home.path,
    },
    {
        key: 'items',
        path: urlConfigs.donatedItems.path,
    },
    {
        key: 'about',
        path: urlConfigs.about.path,
    },
];

