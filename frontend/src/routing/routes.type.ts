export type RoutePath = {
    fi: string;
    en: string;
};

export type Route = {
    id: string;
    title: string;
    path: RoutePath;
    children?: Route[];
};