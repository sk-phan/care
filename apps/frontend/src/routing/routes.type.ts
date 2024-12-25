export type RoutePath = {
    fi: string;
    en: string;
    enable: boolean;
};

export type Route = {
    id: string;
    title: string;
    path: RoutePath;
    children?: Route[];
};