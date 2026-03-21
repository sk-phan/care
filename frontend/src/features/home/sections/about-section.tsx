"use client";

import Image from "next/image";

import donateDollIcon from "../../../../public/icons/donate-doll.svg";
import donateBoxIcon from "../../../../public/icons/donate-box.svg";
import globalHeartIcon from "../../../../public/icons/global-heart.svg";


import { Button } from "@mui/material";
import Heading from "@/common/components/heading/heading";
import { useTranslations } from "next-intl";
import Link from "next/link";

type WelcomeProps = {
    createDonatedItemPath: string;
}

const AboutSection = ({ createDonatedItemPath } : WelcomeProps) => {
    const tHome = useTranslations("home.about");
    const tCommon = useTranslations("common.nav-bar");

    return (
        <section className="mt-12 md:mt-16">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:mr-16">
                    <Heading level={2} heading={tHome("about-us")}/>
                    <p 
                    className="
                        text-gray-500
                        md:mb-8
                    "> 
                    {tHome("message")}
                    </p>
                    <div className="hidden md:inline-block">
                        <Button
                            variant="contained"
                            LinkComponent={Link}
                            href={createDonatedItemPath}
                        >
                            {tCommon("list-an-item")}
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
                            <h3 className="text-2xl mb-2">{tHome("first-feature-title")}</h3>
                            <p className="text-gray-800">
                                {tHome("first-feature-subtitle")}
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
                            <h3 className="text-2xl mb-2">{tHome("second-feature-title")}</h3>
                            <p className="text-gray-800">
                                {tHome("second-feature-subtitle")}
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
                            <h3 className="text-2xl mb-2">{tHome("third-feature-title")}</h3>
                            <p className="text-gray-800">
                                {tHome("third-feature-subtitle")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;