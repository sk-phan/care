"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { LocaleType } from "@/app/i18n/locales/locales.type";
import { useTranslation } from "@/app/i18n";
import useCommonStyleClasses from "@/common/hooks/styles/use-common-style-classes";
import { urlConfigs } from "@/routing/url-configs";

import heroImage from '../../../../public/images/hero-image.png';
import '@/styles/HeroSection.css';
import { useEffect } from "react";

interface HeroSectionProps {
    lang: LocaleType;
}

const HeroSection = ({ lang }: HeroSectionProps) => {
    const { t } = useTranslation(lang);
    const { pageHeader, pageDescription } = useCommonStyleClasses();

    useEffect(() => console.log("me"), [])
    return (
        <section>
            <div className="flex md:flex-row flex-col md:gap-48 gap-4">
                <h1 className={pageHeader}>
                { t('hero-section.title')}
                </h1>

                <div>
                    <p 
                    className={`
                        ${pageDescription}
                        md:w-56
                        md:pt-12
                    `}>
                        {t('hero-section.subtitle')}
                    </p>
                    <Button
                    LinkComponent={Link}
                    href={urlConfigs.Items[lang]}
                    variant="text"
                    className="
                    flex
                    justify-start
                    gap-1
                    mt-4
                    p-0
                    font-semibold
                    text-gray-900">
                        {t('hero-section.view-all-items')}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.75 12H15.25M15.25 12L12.75 9.5M15.25 12L12.75 14.5" stroke="black" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
            </div>

            <Image 
            alt="Hero image"
            width={1000}
            height={1000}
            src={heroImage.src} 
            className="
            hero-image
            md:mt-12
            mt-6
            "
            />
        </section>
    )
}

export default HeroSection;