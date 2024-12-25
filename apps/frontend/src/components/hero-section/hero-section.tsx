"use client";

import Button from "../common/Button";

import '../../styles/HeroSection.css';
import heroImage from '../../../public/hero-image.png';
import Image from "next/image";

interface HeroSectionProps {
    lang: string;
}

const HeroSection = ({ lang }: HeroSectionProps) => {

    return (
        <section>
            <div className="flex md:flex-row flex-col md:gap-48 gap-4">
                <h1 
                className="
                hero-title
                md:text-7xl
                text-4xl
                font-medium
                ">
                Your Unused Items Can Make a Difference
                </h1>

                <div>
                    <p 
                    className="
                    md:w-56
                    font-medium
                    text-gray-500
                    md:pt-12
                    ">
                    Turn Your Unused Items into Valuable Resources for Others — Join a Community of Givers Making a Difference
                    </p>
                    <Button
                    variant="text"
                    className="
                    flex
                    flex-row
                    items-center
                    gap-1
                    md:mt-6
                    mt-4
                    font-semibold
                    text-gray-900">
                        View all items
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