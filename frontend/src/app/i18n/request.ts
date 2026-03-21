import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { languages, fallbackLng } from "./settings";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(languages, requested) ? requested : fallbackLng;

  const [common, home, donatedItems] = await Promise.all([
    import(`./messages/${locale}/common.json`),
    import(`./messages/${locale}/home.json`),
    import(`./messages/${locale}/donated-items.json`),
  ]);

  return {
    locale,
    messages: {
      common: common.default,
      home: home.default,
      "donated-items": donatedItems.default,
    },
  };
});