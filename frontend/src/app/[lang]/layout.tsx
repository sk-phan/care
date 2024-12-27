import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

import type { Metadata } from "next";
import { Outfit as FontSans } from "next/font/google";
import "../../styles/common/globals.css";
import "../../styles/common/formStyles.css";

import { cn } from "@/stores/utils";
import NavBar from "@/components/common/nav-bar";
import Footer from '@/components/common/footer';
import { Providers } from './providers';
import { LocaleType } from '../i18n/locales/locales.type';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Care.fi",
  description: "We are a community-driven platform that connects people who want to share gently used clothes, books, and more with those in need",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang?: LocaleType };
}>) {
  const lang = params.lang && languages.includes(params.lang) ? params.lang : 'en';

  return (
    <html lang={lang}>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-8xl">
            <NavBar 
            lang={lang}/>
            {children}
          </div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
