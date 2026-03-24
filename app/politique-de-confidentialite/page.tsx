import Link from 'next/link'

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white text-navy px-6 py-20 lg:px-8 selection:bg-sage/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sage hover:underline mb-12">
          ← Retour à l'accueil
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
            <p>Nous collectons uniquement les données que vous nous fournissez via notre formulaire de contact :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Prénom</li>
              <li>Adresse e-mail</li>
              <li>Message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Finalité de la collecte</h2>
            <p>Ces données sont utilisées exclusivement pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de renseignements.</li>
              <li>Vous contacter dans le cadre d'un appel découverte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Sous-traitants (Tiers)</h2>
            <p>Vos données sont traitées via les services suivants :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Brevo (Sendinblue) :</strong> Pour la gestion et l'envoi de formulaires. 
                Brevo est conforme aux réglementations de protection des données.
              </li>
              <li>
                <strong>Calendly :</strong> Pour la prise de rendez-vous (si vous utilisez le lien de réservation).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant la durée nécessaire au traitement de votre demande, 
              ou jusqu'à ce que vous en demandiez la suppression, sauf obligation légale de conservation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Vos droits</h2>
            <p>Conformément à la loi, vous disposez des droits suivants concernant vos données :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d'accès et d'information.</li>
              <li>Droit de rectification (correction).</li>
              <li>Droit à l'effacement (suppression).</li>
              <li>Droit d'opposition au traitement.</li>
            </ul>
            <p className="mt-2">Pour exercer ces droits, contactez-nous à : <strong>contact@easy-ai-solutions.ch</strong></p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">7. Cookies</h2>
            <p>
              Ce site web ne dépose aucun cookie de traçage publicitaire ou analytique intrusif. 
              Seuls des cookies techniques essentiels au bon fonctionnement peuvent être utilisés.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
