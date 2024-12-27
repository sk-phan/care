import { usePathname } from "next/navigation"
import { LocaleType } from "./locales/locales.type";

const useLocale = () : { locale: LocaleType }  => {
    const pathname = usePathname();
    const isLanguageSegment = pathname[0] && (pathname[0] === 'en' || pathname[0] === 'fi');
    
    if (isLanguageSegment) {
        return { locale: pathname[0] as LocaleType};
    }

    return { locale: 'en' }
};

export default useLocale;