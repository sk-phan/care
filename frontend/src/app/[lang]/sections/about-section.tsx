"use client";

import Image from "next/image";

import donateDollIcon from "../../../../public/icons/donate-doll.svg";
import donateBoxIcon from "../../../../public/icons/donate-box.svg";
import globalHeartIcon from "../../../../public/icons/global-heart.svg";

import { useTranslation } from "@/app/i18n";
import { LocaleType } from "@/app/i18n/locales/locales.type";
import Link from "next/link";
import { urlConfigs } from "@/routing/url-configs";

import { Button } from "@mui/material";
import Heading from "@/common/components/heading";

interface WelcomeProps {
    lang: LocaleType;
}

const AboutSection = ({ lang } : WelcomeProps) => {
    const { t } = useTranslation(lang);

    return (
        <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:mr-16">
                    <Heading level={2} title={t("about.about-us")}/>
                    <p 
                    className="
                        text-gray-500
                        md:mb-8
                    "> 
                    {t("about.message")}
                    </p>
                    <div className="hidden md:inline-block">
                        <Button
                            variant="contained"
                            LinkComponent={Link}
                            href={urlConfigs.donatedItems.create[lang]}
                        >
                            {t("nav-bar.list-an-item")}
                        </Button>
                    </div>
                </div>
                <div className="md:w-1/2 pt-12 md:pt-0">
                    <div className="mb-6 bg-orange-100 p-4 md:p-8 rounded-lg flex">
                        <Image 
                        src={donateBoxIcon.src} 
                        className="mr-8 scale-75"
                        width={100}
                        height={100}
                        alt="donate box icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">{t('about.first-feature-title')}</h3>
                            <p className="text-gray-800">
                                {t('about.first-feature-subtitle')}
                            </p>
                        </div>
                    </div>
                    <div className="mb-6 bg-orange-100 p-4 md:p-8 rounded-lg flex">
                        <Image 
                        src={globalHeartIcon.src} 
                        className="mr-8 scale-75"
                        width={100}
                        height={100}
                        alt="heart icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">{t('about.second-feature-title')}</h3>
                            <p className="text-gray-800">
                                {t('about.second-feature-subtitle')}
                            </p>
                        </div>
                    </div>
                    <div className="bg-orange-100 p-4 md:p-8 rounded-lg flex">
                        <Image 
                        src={donateDollIcon.src} 
                        className="mr-8 scale-75"
                        height={100}
                        width={100}
                        alt="donate doll icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">{t('about.third-feature-title')}</h3>
                            <p className="text-gray-800">
                                {t('about.third-feature-subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;