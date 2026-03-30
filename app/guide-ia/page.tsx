import React from 'react'
import LeadMagnet from '@/components/LeadMagnet'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

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
