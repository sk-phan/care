"use client";

import { CiViewList } from "react-icons/ci";
import { PiHandshakeThin, PiGiftThin } from "react-icons/pi";

import Heading from "@/components/common/heading";

const steps = [
    {
        title: "List or find items",
        description: "Browse or list items to share with children in need.",
        icon: <CiViewList size={52} className="text-primary" />,
    },
    {
        title: "Arrange pickup",
        description: "Donors and recipients communicate directly to arrange the handoff.",
        icon: <PiHandshakeThin size={52} className="text-primary" />,
    },
    {
        title: "Bring joy to children!",
        description: "See the smiles your generosity creates.",
        icon: <PiGiftThin size={52} className="text-primary" />,
    },
];

const HowItWorksSection = () => {
    return (
        <div className="flex flex-col items-center mt-12">
            <Heading level={2} title="How it works" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 px-6 py-8 rounded-xl flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{step.icon}</div>
                        <Heading 
                            level={3} 
                            title={step.title} 
                            subHeading={step.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorksSection;
