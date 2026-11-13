import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations sur l’éditeur et l’hébergement du site Easy AI Solutions.",
  alternates: { canonical: '/mentions-legales' },
  openGraph: {
    title: "Mentions légales | Easy AI Solutions",
    description: "Informations sur l’éditeur et l’hébergement du site Easy AI Solutions.",
    url: '/mentions-legales',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Mentions légales | Easy AI Solutions",
    description: "Informations sur l’éditeur et l’hébergement du site Easy AI Solutions.",
  },
}

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white text-navy px-6 py-20 lg:px-8 selection:bg-sage/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sage hover:underline mb-12">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-navy mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Éditeur du site</h2>
            <p><strong>Nom du site :</strong> Easy AI Solutions</p>
            <p><strong>Adresse e-mail :</strong> contact@easy-ai-solutions.ch</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Représentant légal</h2>
            <p>Laurent Cornu, Fondateur</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Hébergement</h2>
            <p>Ce site est hébergé par <strong>Vercel Inc.</strong></p>
            <p>Adresse : 340 S Lemon Ave #1142, Walnut, CA 91789, États-Unis</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation suisse et internationale sur le droit d&apos;auteur
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
              les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
              mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. 
              L&apos;utilisation du contenu du site se fait aux seuls risques de l&apos;utilisateur.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
