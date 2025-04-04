export type RoutePath = {
    fi: string;
    en: string;
    enable: boolean;
};

export type Route = {
    key: string;
    path: RoutePath;
    children?: Route[];
};