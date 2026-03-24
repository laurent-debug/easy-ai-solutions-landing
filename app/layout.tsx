import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Easy AI Solutions - Gagnez du temps avec l\'IA',
  description: 'J\'aide les micro-entreprises à découvrir et utiliser les bons outils IA en 1 session. Concret, guidé, sans jargon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="bg-white text-navy font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
