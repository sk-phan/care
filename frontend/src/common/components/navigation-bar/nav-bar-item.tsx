import { Button } from '@mui/material';

import {navRoutes} from '@/common/routes/route-configs';
import useLocale from '@/app/i18n/use-locale';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const NavBarItems = () => {
    const { locale } = useLocale();
    const t = useTranslations('common.nav-bar');
    const router = useRouter();

    return (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        { navRoutes.map(item => {
                return (
                    <li key={item.key}>
                        <Button 
                            variant='text'
                            onClick={() => router.push(item.path[locale])}
                            href={item.path[locale]}
                            className='text-gray-800'
                        >
                            {t(item.key)}
                        </Button>
                    </li>
                )
            })
        }
        </ul>
    )
};

export default NavBarItems;