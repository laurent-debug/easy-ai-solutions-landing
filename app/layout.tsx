import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClickAnalytics from '@/components/ClickAnalytics'
import { projects } from '@/lib/projects'
import { articles } from '@/lib/articles'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const siteUrl = 'https://www.easy-ai-solutions.ch'
const projectIds = projects.map(project => project.id)
const analyticsPaths = [
  '/', '/blog', '/guide-gratuit', '/guide-ia', '/prompteur', '/mentions-legales', '/politique-de-confidentialite',
  ...projectIds.map(id => `/realisations/${id}`),
  ...articles.map(article => `/blog/${article.slug}`),
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Easy AI Solutions — IA pratique et outils métier en Suisse romande',
    template: '%s | Easy AI Solutions',
  },
  description: 'IA pratique, outils métier, sites web et automatisation administrative : Laurent Cornu accompagne les petites entreprises de l’audit à la livraison.',
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
    title: 'Easy AI Solutions — IA pratique et outils métier en Suisse romande',
    description: 'IA pratique, outils métier, sites web et automatisation administrative : Laurent Cornu accompagne les petites entreprises de l’audit à la livraison.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Easy AI Solutions — Consultant IA pour PME en Suisse romande',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy AI Solutions — IA pratique et outils métier en Suisse romande',
    description: 'IA pratique, outils métier, sites web et automatisation administrative : Laurent Cornu accompagne les petites entreprises de l’audit à la livraison.',
    images: ['/opengraph-image'],
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
      description: 'Accompagnement IA, audit et développement d’outils métier pour les petites entreprises et indépendants en Suisse romande.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Vaud', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Genève', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Fribourg', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Valais', addressCountry: 'CH' },
        { '@type': 'AdministrativeArea', name: 'Neuchâtel', addressCountry: 'CH' },
        { '@type': 'Country', name: 'Suisse' },
      ],
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
        name: 'IA, outils métier et automatisation administrative',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Solution métier sur mesure',
            description: 'Audit, développement et livraison d’un outil adapté au fonctionnement de votre activité.',
          },
          {
            '@type': 'Offer',
            name: 'Refonte et automatisation administrative',
            description: 'Audit des parcours, refonte du site et raccordement des outils administratifs jusqu’à la livraison.',
          },
          {
            '@type': 'Offer',
            name: 'Appel découverte gratuit',
            description: 'Appel de 30 minutes pour comprendre votre besoin en IA ou en outil métier.',
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
        <ClickAnalytics publicPaths={analyticsPaths} projectIds={projectIds} configured={process.env.ANALYTICS_ENABLED === 'true'} />
      </body>
    </html>
  )
}
