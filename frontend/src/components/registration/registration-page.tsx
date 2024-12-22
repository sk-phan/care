"use client";

import Image from "next/image";

import happyBabyImage from '@/images/img/registration_page.png';
import RegistrationForm from "./form/registration-form";
import Heading from "../common/heading";

const RegistrationPage = () => {
    return (
        <div className="flex items-center justify-space-between gap-6">
            <div className="w-1/2">
                <Heading 
                    level={2}
                    title="Post an item"
                    subHeading="Turn your unused items into valuable resources for others. The item will be available for 30 days after posting"
                />
                <RegistrationForm />
            </div>
            <div className="w-1/2">
                <Image 
                    src={happyBabyImage}
                    width={1000}
                    height={1000}
                    className="rounded"
                    alt="Happy children image"
                />
            </div>
        </div>
    )
};

export default RegistrationPage;