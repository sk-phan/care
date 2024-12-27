import HeroSection from '@/components/hero-section/hero-section';
import ItemsSection from '@/components/items/items-section';
import AboutSection from '@/components/about/about-section';

import { BASE_URL } from '@/services/api-base';

import { ItemType } from '@/types/item/item.type';
import { LocaleType } from '../i18n/locales/locales.type';

export default async function Home({ params } : {params: { lang: LocaleType };}) {
  const lang = params.lang;

  const data = await fetch(BASE_URL + '/items');
  const items: ItemType[] = await data.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <AboutSection 
      lang={lang}/>
      <ItemsSection 
      lang={lang}
      items={items}
      />
    </main>
  )
}