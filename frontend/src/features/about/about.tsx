"use client";
import Image from "next/image";
import kidGivingGiftsImage from "../../../public/images/kids-giving-gifts.png";

import useCommonStyleClasses from "@/common/hooks/styles/use-common-style-classes";
import Heading from "@/common/components/heading";
import InstructionSection from "./sections/instruction-section";

const About = () => {
    const { pageDescription, coverImage } = useCommonStyleClasses();

    return (
        <div className="min-h-screen" data-testid="about-page">
            <div>
                <div className="flex md:flex-row flex-col items-center md:gap-48 gap-4">
                    <Heading heading="Making every child&apos;s day a little brighter" />
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
            <InstructionSection />
        </div>
    )
};

export default About;