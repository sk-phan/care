import HeroSection from '@/components/hero-section/hero-section';
import About from '@/components/about/About';
import Roller from '@/components/common/Roller';
import ItemsSection from '@/components/items/ItemsSection';
import { ItemType } from '@/types/items.type';
import { BASE_URL } from '@/services/api_base.utils';

export default async function Home({ params } : {params: { lang: string };}) {
  const lang = params.lang;

  const data = await fetch(BASE_URL + '/items', { cache: 'no-cache' });
  const items: ItemType[] = await data.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <About 
      lang={lang}/>
      <Roller />
      <ItemsSection 
      lang={lang}
      items={items}
      />
    </main>
  )
}