import { Button } from '@mui/material';
import Link from 'next/link';

import {navRoutes} from '@/routing/routes';
import { LocaleType } from '@/app/i18n/locales/locales.type';

const NavBarItems = ({
    lang
}: {
    lang: LocaleType;
}) => {
    return (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
            navRoutes.map(item => {
                return (
                    <li key={item.id}>
                        <Button 
                            LinkComponent={Link}
                            variant='text'
                            href={item.path[lang]}
                            className='text-gray-800'
                        >
                            {item.title}
                        </Button>
                    </li>
                )
            })
        }
        </ul>
    )
};

export default NavBarItems;