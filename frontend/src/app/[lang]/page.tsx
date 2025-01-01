import HeroSection from '@/components/hero-section/hero-section';
import AboutSection from '@/components/about/about-section';

// import { BASE_URL } from '@/services/api-base';

import { LocaleType } from '../i18n/locales/locales.type';

// const PAGE = 1;
// const LIMIT = 6;

export default async function Home({ params } : {params: { lang: LocaleType };}) {
  const lang = params.lang;

  // const response = await fetch(BASE_URL + `/items?page=${PAGE}&limit=${LIMIT}`, {cache: "no-store"});
  // const data = await response.json();

  // const items: ItemType[] = data.entities || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <AboutSection 
      lang={lang}/>
      {/* <ItemsSection 
      items={items}
      /> */}
    </main>
  )
}