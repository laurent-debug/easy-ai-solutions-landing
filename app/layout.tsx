import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = 'https://www.easy-ai-solutions.ch'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Easy AI Solutions — Consultant IA pour PME en Suisse romande',
    template: '%s | Easy AI Solutions',
  },
  description: 'J\'aide les micro-entreprises et indépendants de Suisse romande à gagner du temps avec l\'IA. 1 session concrète, guidée, sans jargon. Genève, Lausanne, Vaud.',
  keywords: [
    'consultant IA Suisse romande',
    'formation intelligence artificielle Suisse',
    'outils IA PME Genève Lausanne',
    'accompagnement IA indépendants Suisse',
    'ChatGPT entreprise Suisse',
    'automatisation petite entreprise Suisse romande',
  ],
  authors: [{ name: 'Laurent Cornu', url: siteUrl }],
  creator: 'Laurent Cornu',
  openGraph: {
    type: 'website',
    locale: 'fr_CH',
    url: siteUrl,
    siteName: 'Easy AI Solutions',
    title: 'Easy AI Solutions — Consultant IA pour micro-entreprises en Suisse romande',
    description: 'J\'aide les micro-entreprises de Suisse romande à utiliser l\'IA concrètement, en 1 session. Genève, Lausanne, Vaud.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Easy AI Solutions — Consultant IA pour PME en Suisse romande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy AI Solutions — Consultant IA pour PME en Suisse romande',
    description: 'J\'aide les micro-entreprises de Suisse romande à utiliser l\'IA concrètement, en 1 session.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteUrl}/#business`,
      name: 'Easy AI Solutions',
      url: siteUrl,
      description: 'Consultant en intelligence artificielle pour micro-entreprises et indépendants en Suisse romande.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Vaud', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Genève', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Fribourg', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Valais', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Neuchâtel', addressCountry: 'CH' },
        { '@type': 'Country', name: 'Suisse' },
      ],
      priceRange: 'CHF 300',
      currenciesAccepted: 'CHF',
      inLanguage: 'fr-CH',
      founder: {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Laurent Cornu',
        jobTitle: 'Consultant IA',
        worksFor: { '@id': `${siteUrl}/#business` },
        image: `${siteUrl}/laurent-portrait.webp`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services IA',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Appel découverte gratuit',
            description: 'Appel de 30 minutes pour identifier vos besoins en IA.',
            price: '0',
            priceCurrency: 'CHF',
          },
          {
            '@type': 'Offer',
            name: 'Session IA personnalisée',
            description: 'Session de conseil et formation IA adaptée à votre activité.',
            price: '300',
            priceCurrency: 'CHF',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Easy AI Solutions',
      inLanguage: 'fr-CH',
      publisher: { '@id': `${siteUrl}/#business` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-CH" className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-navy font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
