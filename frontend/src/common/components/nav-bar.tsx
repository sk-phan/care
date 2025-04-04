"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

import { useTranslation } from "@/app/i18n";
import useLocale from "@/app/i18n/use-locale";
import { urlConfigs } from "@/common/routing/url-configs";

import NavBarItems from "./nav-bar-item";
import { Button } from "@mui/material";
import LanguageSelection from "./language-selection";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const pathname = usePathname();
    const { locale } = useLocale();
    const { t } = useTranslation(locale);

    const isAtRegisterPage = pathname.includes('register');

    const homePagePath =  "/" + (locale === "fi" || locale === "en" ? locale : "");

    if (isAtRegisterPage) {
        return;
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-4 md:mb-12">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
                <Link href={homePagePath} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Care</span>
                </Link>

                <div className="inline-flex md:hidden">
                    <Button
                        className="
                            justify-end
                            p-0
                        " 
                        aria-controls="navbar-default" 
                        aria-expanded="false"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <RxHamburgerMenu size={24}/>
                    </Button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden' } w-full md:block md:w-auto`} id="navbar-default">
                    <NavBarItems />
                </div>

                <div className="md:flex items-center hidden">
                    <LanguageSelection />
                    <Button
                        variant="contained"
                        className="hidden md:inline-block"
                        LinkComponent={Link}
                        href={urlConfigs.donatedItems.create[locale]}
                    >
                        {t("nav-bar.list-an-item")}
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;