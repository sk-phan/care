"use client";

import Image from "next/image";

import Button from "../common/Button";
import donateDollIcon from "../../images/icons/donate_doll.svg";
import donateBoxIcon from "../../images/icons/donate_box.svg";
import globalHeartIcon from "../../images/icons/global_heart.svg";

import { useTranslation } from "@/app/i18n";
import { LocaleType } from "@/app/i18n/locales/locales.type";

interface WelcomeProps {
    lang: LocaleType;
}

const About = ({ lang } : WelcomeProps) => {
    const { t } = useTranslation(lang);

    return (
        <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mr-16">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-4">{t("about.about-us")}</h2>
                    <p 
                    className="
                        text-xl
                        text-gray-500
                    "> 
                    {t("about.message")}
                    </p>
                    <Button
                        className="
                        p-4
                        hidden 
                        md:block
                        mt-8">
                    {t("nav-bar.start-sharing")}
                    </Button>
                </div>
                <div className="md:w-1/2 pt-12 md:pt-0">
                    <div className="mb-6 bg-red-100 p-8 rounded-lg flex">
                        <Image 
                        src={donateBoxIcon.src} 
                        className="mr-8 scale-75"
                        width={100}
                        height={100}
                        alt="donate box icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">Connecting Kindness with Need</h3>
                            <p className="text-gray-500">
                            Your unused items can support individuals and families, offering help to those in need and providing essential resources.                        
                            </p>
                        </div>
                    </div>
                    <div className="mb-6 bg-red-100 p-8 rounded-lg flex">
                        <Image 
                        src={globalHeartIcon.src} 
                        className="mr-8 scale-75"
                        width={100}
                        height={100}
                        alt="heart icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">Promoting Sustainable Living</h3>
                            <p className="text-gray-500">
                            By keeping items in circulation, you contribute to environmental conservation and help build a greener future for everyone.                            </p>
                        </div>
                    </div>
                    <div className="bg-red-100 p-8 rounded-lg flex">
                        <Image 
                        src={donateDollIcon.src} 
                        className="mr-8 scale-75"
                        height={100}
                        width={100}
                        alt="donate doll icon"/>
                        <div>
                            <h3 className="text-2xl mb-2">Building a Caring Community</h3>
                            <p className="text-gray-500">
                            Explore the benefits of sharing what you no longer need. Join us in building a community where resources are shared and valued.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;