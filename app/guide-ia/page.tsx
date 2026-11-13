import React from 'react'
import LeadMagnet from '@/components/LeadMagnet'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Guide pratique de l’IA pour les petites entreprises",
  description: "Téléchargez le guide pratique Easy AI Solutions : des usages concrets de l’IA pour les petites entreprises et les indépendants.",
  alternates: { canonical: '/guide-ia' },
  openGraph: {
    title: "Guide pratique de l’IA pour les petites entreprises | Easy AI Solutions",
    description: "Téléchargez le guide pratique Easy AI Solutions : des usages concrets de l’IA pour les petites entreprises et les indépendants.",
    url: '/guide-ia',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Guide pratique de l’IA pour les petites entreprises | Easy AI Solutions",
    description: "Téléchargez le guide pratique Easy AI Solutions : des usages concrets de l’IA pour les petites entreprises et les indépendants.",
  },
}

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-white text-navy flex flex-col items-center justify-center p-6">
      <div className="max-w-7xl w-full">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-navy/50 hover:text-navy transition-colors mb-8 font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour au site
        </Link>
        
        <div className="animate-fade-in">
          <LeadMagnet />
        </div>
      </div>
    </main>
  )
}
