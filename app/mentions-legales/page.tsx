import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white text-navy px-6 py-20 lg:px-8 selection:bg-sage/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sage hover:underline mb-12">
          ← Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-navy mb-8">Mentions Légales</h1>
        
        <div className="space-y-8 text-navy/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy mb-3">1. Éditeur du site</h2>
            <p><strong>Nom de l'entreprise :</strong> [Votre Nom d'Entreprise / Raison sociale]</p>
            <p><strong>Forme juridique :</strong> [Raison individuelle / Sàrl / SA]</p>
            <p><strong>Siège social :</strong> [Votre Adresse, Suisse]</p>
            <p><strong>Adresse e-mail :</strong> contact@easy-ai-solutions.ch</p>
            <p><strong>Téléphone :</strong> [Votre Numéro de Téléphone (facultatif)]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">2. Représentant légal</h2>
            <p>Laurent Cornu, Fondateur</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">3. Numéro d'immatriculation</h2>
            <p><strong>Numéro IDE / UID :</strong> [Votre numéro IDE (ex: CHE-123.456.789) - laissez vide si non inscrit]</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">4. Hébergement</h2>
            <p>Ce site est hébergé par <strong>Vercel Inc.</strong></p>
            <p>Adresse : 340 S Lemon Ave #1142, Walnut, CA 91789, États-Unis</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">5. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation suisse et internationale sur le droit d'auteur 
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
              les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy mb-3">6. Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement 
              mis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. 
              L'utilisation du contenu du site se fait aux seuls risques de l'utilisateur.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
