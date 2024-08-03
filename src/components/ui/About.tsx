import { useTranslation } from "@/app/i18n";
import giveLoveIcon from "../../images/icons/give_love.svg";
import donateDollIcon from "../../images/icons/donate_doll.svg";
import donateBoxIcon from "../../images/icons/donate_box.svg";

interface WelcomeProps {
    lang: string;
}

const About = async ({ lang } : WelcomeProps) => {
    const { t } = await useTranslation(lang);

    return (
        <section className="mt-8 md:mt-16">
            <div className="flex ">
                <div className="w-1/2 mr-16">
                    <h2 className="text-xl md:text-4xl font-semibold mb-4 uppercase">{t("about.about-us")}</h2>
                    <p 
                    className="
                        text-xl
                        font-medium
                        text-gray-500
                    "> 
                    {t("about.message")}
                    </p>
                </div>
                <div className="w-1/2">
                    <div className="mb-12">
                        <div className="border-solid border border-black p-4 rounded-full flex w-16 h-16 mb-4">
                            <img src={giveLoveIcon.src}/>
                        </div>
                        <h3 className="text-3xl mb-4">Connecting Kindness with Need</h3>
                        <p className="text-gray-500">
                        Your unused items can provide essential support to individuals and families in need. By giving a new life to your unused items, you offer a helping hand to those facing challenging circumstances, ensuring they have access to necessary resources.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="border-solid border border-black p-4 rounded-full flex w-16 h-16 mb-4">
                            <img src={donateBoxIcon.src}/>
                        </div>
                        <h3 className="text-3xl mb-4">Promoting Sustainable Living</h3>
                        <p className="text-gray-500">
                        Sharing what you no longer need helps reduce waste and promotes a more sustainable lifestyle. By keeping items in circulation, you contribute to environmental conservation and help build a greener future for everyone.                        
                        </p>
                    </div>
                    <div>
                        <div className="border-solid border border-black p-4 rounded-full flex w-16 h-16 mb-4">
                            <img src={donateDollIcon.src}/>
                        </div>
                        <h3 className="text-3xl mb-4">Building a Caring Community</h3>
                        <p className="text-gray-500">
                        Explore the benefits of sharing what you no longer need. Join us in building a community where resources are shared and valued.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;