import {navRoutes} from '@/routing/routes';
import { RoutePath } from '@/routing/routes.type';
import Link from 'next/link'

const NavBarItems = ({
    lang
}: {
    lang: string;
}) => {
    return (
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {
            navRoutes.map(item => {
                return (
                    <li key={item.id}>
                        <Link 
                            href={item.path[lang as keyof RoutePath]}
                            className="
                                block 
                                py-2 
                                px-3
                                hover:text-red-500 
                                rounded 
                                md:bg-transparent 
                                md:p-0" 
                            aria-current="page">
                                {item.title}
                        </Link>
                    </li>
                )
            })
        }
        </ul>
    )
};

export default NavBarItems;