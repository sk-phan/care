import HeroSection from '@/components/ui/HeroSection';
import About from '@/components/ui/About';
import Roller from '@/components/ui/Roller';

export default async function Home({ params } : {params: { lang: string };}) {
  const lang = params.lang;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection
      lang={lang}/>
      <About 
      lang={lang}/>
      <Roller />
    </main>
  )
}