import LoginPage from "@/components/login/login-page";

export default async function Login({ params } : {params: { lang: string };}) {
    const lang = params.lang;
    
    return (
        <div className="min-h-screen">
            <LoginPage />
        </div>
    )
}