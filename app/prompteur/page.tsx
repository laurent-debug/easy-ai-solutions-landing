import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompteur Pop — prompteur web',
  description: 'Prompteur web mobile pour enregistrer vos vidéos avec défilement, segments et mode miroir.',
  alternates: { canonical: '/prompteur' },
  openGraph: {
    title: 'Prompteur Pop | Easy AI Solutions',
    description: 'Prompteur web mobile avec défilement, segments et mode miroir pour vos vidéos.',
    url: '/prompteur',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prompteur Pop | Easy AI Solutions',
    description: 'Prompteur web mobile avec défilement, segments et mode miroir pour vos vidéos.',
  },
}

export default function PrompteurPage() {
  return (
    <main className="min-h-screen bg-[#101114]">
      <iframe
        title="Prompteur Pop"
        src="/prompteur/index.html"
        className="block h-screen w-screen border-0"
      />
    </main>
  )
}
