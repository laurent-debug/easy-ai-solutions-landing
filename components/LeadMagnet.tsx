import React from 'react'
import { FileText, Download, CheckCircle2 } from 'lucide-react'

export default function LeadMagnet() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-sage/5 border-y border-sage/10 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-sage/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-sage/10 border border-sage/10 flex flex-col lg:flex-row items-center gap-12">
          {/* Visual of the guide */}
          <div className="w-full lg:w-1/3 shrink-0 flex justify-center">
            <div className="relative group perspective-1000">
              <div className="w-64 h-80 bg-navy rounded-2xl shadow-2xl transition-all duration-500 group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] group-hover:shadow-sage/20 relative overflow-hidden border-2 border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="p-8 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-sage/20">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="text-sage font-bold text-xs tracking-widest uppercase mb-2">Guide Pratique</div>
                    <h3 className="text-2xl font-bold leading-tight">Gagnez 5h par semaine grâce à l'IA</h3>
                  </div>
                  <div className="text-sm font-medium text-white/60">Easy AI Solutions</div>
                </div>
                {/* PDF texture overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -rotate-45 translate-x-12 -translate-y-12"></div>
              </div>
              {/* Shadow reflection */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-4 bg-navy/10 blur-xl rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/10 text-sage text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage"></span>
              </span>
              GRATUIT — GUIDE PDF
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Ne perdez plus votre temps à "tester" des outils.
            </h2>
            <p className="text-xl text-navy/70 mb-8 leading-relaxed">
              J'ai condensé 300+ heures de recherche en un guide simple de 10 pages. 
              Découvrez exactement quels outils utiliser pour automatiser vos tâches les plus ingrates.
            </p>

            <ul className="space-y-4 mb-10 text-left">
              {[
                "Les 3 outils indispensables pour les micro-entreprises",
                "Comment déléguer votre SAV à une IA en 15 minutes",
                "Le secret pour écrire vos emails 10x plus vite"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy/80">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/guide-ia-5-heures.pdf" 
                download
                className="inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy/90 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all shadow-xl shadow-navy/20 hover:-translate-y-1 w-full sm:w-auto"
              >
                <Download className="w-6 h-6" />
                Télécharger le guide gratuit
              </a>
              <span className="text-sm text-navy/50 font-medium italic">Aucune inscription requise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
