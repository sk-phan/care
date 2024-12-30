import { usePathname } from "next/navigation"
import { LocaleType } from "./locales/locales.type";

const useLocale = () : { locale: LocaleType }  => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    const isLanguageSegment = segments[0] && (segments[0] === 'en' || segments[0] === 'fi');
    let locale: LocaleType = 'en';

    if (isLanguageSegment) {
        locale = segments[0] as LocaleType;
    }

    return { 
        locale,
    }
};

export default useLocale;