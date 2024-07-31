import { useTranslation } from '../i18n'
import HeroSection from '@/components/ui/HeroSection';

export default async function Home({ params } : {params: { lang?: string };}) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
    </main>
  )
}