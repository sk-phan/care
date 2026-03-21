"use client";

import { CiViewList } from "react-icons/ci";
import { PiHandshakeThin, PiGiftThin } from "react-icons/pi";

import Heading from "@/common/components/heading/heading";
import { useTranslations } from "next-intl";

const stepIcons = [
    <CiViewList key="step1" size={52} className="text-primary" />,
    <PiHandshakeThin key="step2" size={52} className="text-primary" />,
    <PiGiftThin key="step3" size={52} className="text-primary" />,
];

const InstructionSection = () => {
    const t = useTranslations("home.instruction-section");
    const steps = ["step1", "step2", "step3"];

    return (
        <div className="flex flex-col items-center mt-12" data-testid="instruction-section">
            <Heading level={2} heading={t("title")} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 px-6 py-8 rounded-xl flex flex-col items-center text-center"
                    >
                        <div className="mb-4">{stepIcons[index]}</div>
                        <Heading 
                            level={3} 
                            heading={t(`${step}-title`)} 
                            subHeading={t(`${step}-description`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructionSection;
