import { urlConfigs } from "./url-configs";

type UrlConfigPaths =
  | typeof urlConfigs.home.path
  | typeof urlConfigs.about.path
  | typeof urlConfigs.donatedItems.path
  | typeof urlConfigs.donatedItems.create.path;

export type Route = {
    key: string;
    path: UrlConfigPaths;
    children?: Route[];
};