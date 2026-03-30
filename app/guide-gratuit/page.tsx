import type { Metadata } from 'next'
import GuideGratuitPageClient from './GuideGratuitPageClient'

export const metadata: Metadata = {
  title: 'Guide gratuit',
  description:
    "Recevez gratuitement le guide Easy AI Solutions pour gagner 5 heures par semaine avec l'IA, sans jargon ni perte de temps.",
  alternates: {
    canonical: '/guide-gratuit',
  },
  openGraph: {
    title: 'Guide gratuit | Easy AI Solutions',
    description:
      "Recevez gratuitement le guide Easy AI Solutions pour gagner 5 heures par semaine avec l'IA, sans jargon ni perte de temps.",
    url: '/guide-gratuit',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GuideGratuitPage() {
  return <GuideGratuitPageClient />
}
