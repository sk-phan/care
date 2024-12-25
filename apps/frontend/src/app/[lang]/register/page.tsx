import RegistrationPage from "@/components/registration/registration-page";

export default async function Register({ params } : {params: { lang: string };}) {
    const lang = params.lang;
    return (
        <div className="min-h-screen">
            <RegistrationPage />
        </div>
    )
};