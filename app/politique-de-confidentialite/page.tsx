import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Traitement des données de contact et statistiques de consultation du site Easy AI Solutions.",
  alternates: { canonical: '/politique-de-confidentialite' },
  openGraph: {
    title: "Politique de confidentialité | Easy AI Solutions",
    description: "Traitement des données de contact et statistiques de consultation du site Easy AI Solutions.",
    url: '/politique-de-confidentialite',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Politique de confidentialité | Easy AI Solutions",
    description: "Traitement des données de contact et statistiques de consultation du site Easy AI Solutions.",
  },
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white text-navy px-6 py-20 lg:px-8 selection:bg-sage/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sage hover:underline mb-12">
          ← Retour à l&apos;accueil
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-navy mb-8">Politique de Confidentialité</h1>
        
        <div className="space-y-8 text-navy/80 leading-relaxed">
          <p>
            La protection de vos données personnelles est une priorité pour <strong>Easy AI Solutions</strong>. 
            Cette politique de confidentialité vous informe sur la manière dont nous traitons vos données 
            conformément à la Loi fédérale sur la protection des données (LPD) suisse et au RGPD si applicable.
          </p>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Responsable du traitement</h2>
            <p>Laurent Cornu</p>
            <p>E-mail : contact@easy-ai-solutions.ch</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Données collectées</h2>
            <p>Le formulaire de contact prépare un e-mail dans votre messagerie. Les informations sont transmises à Laurent lorsque vous envoyez cet e-mail.</p>
            <p>Lorsque vous nous envoyez un e-mail, vous nous fournissez les informations suivantes :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prénom</li>
              <li>Adresse e-mail</li>
              <li>Message</li>
            </ul>
            <p className="mt-3">Si vous vous inscrivez pour recevoir le guide gratuit, votre prénom et votre adresse e-mail sont transmis à Brevo pour traiter votre inscription.</p>
            <p className="mt-3">Le suivi statistique, lorsqu’il est activé, utilise Vercel Web Analytics pour mesurer les consultations de pages et les clics sur certains boutons. Les événements de clic ajoutés par le site contiennent uniquement le bouton ciblé et son emplacement, sans adresse e-mail ni contenu de formulaire. Les paramètres et fragments de l’adresse des pages sont retirés avant transmission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Finalité de la collecte</h2>
            <p>Ces données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de renseignements.</li>
              <li>Vous contacter dans le cadre d&apos;un appel découverte.</li>
              <li>Traiter votre inscription au guide gratuit.</li>
              <li>Comprendre quelles pages et quels boutons sont utilisés afin d’améliorer le site.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Sous-traitants (Tiers)</h2>
            <p>Vos données sont traitées via les services suivants :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Vercel Web Analytics :</strong> Pour les statistiques agrégées de consultation et de clics. <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Détails du traitement statistique</a>.</li>
              <li>
                <strong>Brevo (Sendinblue) :</strong> Pour l’inscription au guide gratuit.
              </li>
              <li>
                <strong>Calendly :</strong> Pour la prise de rendez-vous (si vous utilisez le lien de réservation).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Durée de conservation</h2>
            <p>
              Les messages reçus sont conservés pendant la durée nécessaire au traitement de votre demande,
              ou jusqu&apos;à ce que vous en demandiez la suppression, sauf obligation légale de conservation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Vos droits</h2>
            <p>Conformément à la loi, vous disposez des droits suivants concernant vos données :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d&apos;accès et d&apos;information.</li>
              <li>Droit de rectification (correction).</li>
              <li>Droit à l&apos;effacement (suppression).</li>
              <li>Droit d&apos;opposition au traitement.</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits, contactez-nous à : <strong>contact@easy-ai-solutions.ch</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">7. Cookies</h2>
            <p>
              Aucun pixel publicitaire n’est installé. Le suivi statistique Vercel fonctionne sans cookies tiers. Notre configuration respecte les signaux Do Not Track et Global Privacy Control lorsqu’ils sont activés dans votre navigateur.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
