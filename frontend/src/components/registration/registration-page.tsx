"use client";

import Image from "next/image";

import happyChildrenImage from '../../../public/happy-children-image.webp';
import RegistrationForm from "./form/registration-form";

const RegistrationPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-1/2">
                <Image 
                    src={happyChildrenImage}
                    width={1000}
                    height={1000}
                    alt="Happy children image"
                />
            </div>
            <div className="w-1/2">
                <RegistrationForm />
            </div>
        </div>
    )
};

export default RegistrationPage;