
import { BASE_URL } from '@/common/api/api-base';

import { ItemType } from '@/common/types/item/item.type';
import { LocaleType } from '../i18n/locales/locales.type';
import HeroSection from '@/features/landing-page/sections/hero-section';
import AboutSection from '@/features/landing-page/sections/about-section';
import ItemsSection from '@/features/landing-page/sections/items-section';


const PAGE = 1;
const LIMIT = 6;

export default async function Home({ params } : {params: { lang: LocaleType };}) {
  const lang = params.lang;

  const response = await fetch(BASE_URL + `/items?page=${PAGE}&limit=${LIMIT}`);
  const data = await response.json();

  const items: ItemType[] = data.entities || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection lang={lang}/>
      <AboutSection lang={lang}/>
      <ItemsSection items={items}/>
    </main>
  )
}