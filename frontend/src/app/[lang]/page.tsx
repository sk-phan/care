import HeroSection from '@/components/hero-section/hero-section';
import AboutSection from '@/components/about/about-section';
import { LocaleType } from '../i18n/locales/locales.type';

export default async function Home({ params } : {params: { lang: LocaleType };}) {
  const lang = params.lang;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <AboutSection 
      lang={lang}/>
    </main>
  )
}