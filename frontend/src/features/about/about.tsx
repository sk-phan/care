"use client";
import Image from "next/image";
import kidGivingGiftsImage from "../../../public/images/kids-giving-gifts.png";

import useCommonStyleClasses from "@/common/hooks/styles/use-common-style-classes";
import Heading from "@/common/components/heading";
import InstructionSection from "./sections/instruction-section";
import { useTranslations } from "next-intl";

const About = () => {
    const { pageDescription, coverImage } = useCommonStyleClasses();
    const t = useTranslations("home.about-page");

    return (
        <div className="min-h-screen" data-testid="about-page">
            <div>
                <div className="flex md:flex-row flex-col items-center md:gap-48 gap-4">
                    <Heading heading={t("title")} />
                    <p className={`${pageDescription} w-2/3`}>
                        {t("description")}
                    </p>
                </div>
                <div className="rounded-2xl">
                    <Image 
                        alt="Hero image"
                        width={1000}
                        height={600}
                        src={kidGivingGiftsImage.src} 
                        className={coverImage}
                    />
                </div>
            </div>
            <InstructionSection />
        </div>
    )
};

export default About;