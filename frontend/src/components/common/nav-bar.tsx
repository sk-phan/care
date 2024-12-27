"use client"

import { useState } from "react";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

import Button from "@/components/common/c-button";
import NavBarItems from "./nav-bar-item";
import useCommonStyles from "@/app/hooks/styles/use-common-styles";
import { RoutePath } from "@/routing/routes.type";
import { urlConfigs } from "@/routing/url-configs";
import { usePathname } from "next/navigation";
import { LocaleType } from "@/app/i18n/locales/locales.type";

interface NavBarProps {
    lang: LocaleType;
}

const NavBar = ({ lang } : NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();
    const { t } = useTranslation(lang);
    const { primaryButtonLink } = useCommonStyles();

    const isAtRegisterPage = pathname.includes('register');

    const homePagePath =  "/" + (lang === "fi" || lang === "en" ? lang : "");

    if (isAtRegisterPage) {
        return;
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-4 md:mb-12">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
                <Link href={homePagePath} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Care</span>
                </Link>
                <Button 
                    variant="fill" 
                    color="primary"
                    className="
                    inline-flex 
                    items-center 
                    p-2 w-10 h-10 
                    px-3
                    justify-center 
                    text-gray-500 
                    rounded-full
                    md:hidden 
                    " 
                    aria-controls="navbar-default" 
                    aria-expanded="false"
                    onClick={() => setIsOpen(!isOpen)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="1" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </Button>
                <div className={`${isOpen ? 'block' : 'hidden' } w-full md:block md:w-auto`} id="navbar-default">
                    <NavBarItems 
                    lang={lang}/>
                </div>

                <Link
                href={urlConfigs.Register[lang as keyof RoutePath] as string}
                className={`${primaryButtonLink} hidden md:block`}>
                    {t("nav-bar.start-sharing")}
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;