"use client";
import Image from "next/image";
import kidGivingGiftsImage from "@/images/img/kids-giving-gifts.png";

import useCommonStyleClasses from "@/hooks/styles/use-common-style-classes";
import HowItWorksSection from "./sections/how-it-works-section";

const AboutPage = () => {
    const { pageHeader, pageDescription, coverImage } = useCommonStyleClasses();

    return (
        <div>
            <div>
                <div className="flex md:flex-row flex-col items-center md:gap-48 gap-4">
                    <h1 className={pageHeader}>Making every child&apos;s day a little brighter</h1>
                    <p className={`${pageDescription} w-2/3`}>
                        At Care, we believe that every child deserves to smile. Our mission is to connect kind-hearted individuals with children in need, ensuring they have access to toys, books, and clothes that can brighten their days and open new opportunities.
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
            <HowItWorksSection />
        </div>
    )
};

export default AboutPage;