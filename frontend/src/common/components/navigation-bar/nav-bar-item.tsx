import { Button } from '@mui/material';
import Link from 'next/link';

import {navRoutes} from '@/common/routes/route-configs';
import { useLocale, useTranslations } from 'next-intl';
import { getLocalizedPath } from '@/common/routes/url-configs';

const NavBarItems = () => {
    const locale = useLocale();
    const t = useTranslations('common.nav-bar');

    return (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        { navRoutes.map(item => {
                const localizedPath = getLocalizedPath(locale, item.path);
                return (
                    <li key={item.key}>
                        <Button 
                            variant='text'
                            component={Link}
                            href={localizedPath}
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