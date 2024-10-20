import HeroSection from '@/components/HeroSection';
import About from '@/components/About';
import Roller from '@/components/Roller';
import ItemsSection from '@/components/items/ItemsSection';

export default async function Home({ params } : {params: { lang: string };}) {
  const lang = params.lang;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <About 
      lang={lang}/>
      <Roller />
      <ItemsSection 
      lang={lang}
      />
    </main>
  )
}