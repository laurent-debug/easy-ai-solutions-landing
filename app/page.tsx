import { CheckCircle2, Clock, Target, Search, Compass, Wrench } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'

export default function LandingPage() {
  const calendlyUrl = "https://calendly.com/" // À remplacer par le vrai lien de réservation

  return (
    <main className="min-h-screen bg-white text-navy selection:bg-sage/30">
      {/* HEADER / HERO */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-h-[90vh]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sage/10 via-white to-white"></div>
        <div className="mb-8 font-bold text-xl tracking-tight text-sage">Easy AI Solutions</div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-navy max-w-4xl mb-6 leading-[1.1]">
          Gagnez du temps avec l'IA<span className="text-sage"> — sans vous perdre dedans</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-navy/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          J'aide les micro-entreprises à découvrir et utiliser les bons outils IA en 1 session. Concret, guidé, sans jargon.
        </p>
        <a 
          href={calendlyUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all shadow-xl shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1"
        >
          👉 Réserver mon appel gratuit de 30 min
          <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-accent/50 transition-all opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-105 pointer-events-none"></div>
        </a>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Vous vous reconnaissez ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Vous avez entendu parler de ChatGPT, mais vous ne savez pas par où commencer", icon: Search },
              { title: "Vous n'avez pas le temps de tester des dizaines d'outils", icon: Clock },
              { title: "Vous voulez aller droit au but — savoir ce qui marche pour VOTRE business", icon: Target }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center mb-6 text-sage">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium text-navy/90 leading-relaxed">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA SOLUTION */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Un appel, des résultats concrets</h2>
          </div>
          
          <div className="space-y-12">
            {[
              { 
                step: "01", 
                title: "On identifie vos vrais besoins", 
                subtitle: "30 min, gratuit",
                desc: "Un appel découverte pour comprendre votre activité, vos défis et vos objectifs." 
              },
              { 
                step: "02", 
                title: "Je vous guide vers les bons outils", 
                subtitle: "Forfait fixe : 300 CHF",
                desc: "Une session personnalisée où on travaille ensemble : démonstration, création de prompts, mise en pratique immédiate." 
              },
              { 
                step: "03", 
                title: "Vous repartez avec des outils qui fonctionnent", 
                desc: "Pas de théorie. Des outils que vous savez utiliser, adaptés à votre réalité." 
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative group">
                <div className="hidden md:block absolute left-8 top-16 bottom-[-3rem] w-px bg-slate-200 group-last:hidden"></div>
                <div className="shrink-0 w-16 h-16 bg-navy text-white rounded-2xl flex items-center justify-center text-xl font-bold z-10 shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                    <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                    {item.subtitle && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage/10 text-sage border border-sage/20 whitespace-nowrap">
                        {item.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-navy/70 leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="py-24 bg-navy text-white px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/3 aspect-[4/5] relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
            <Image 
              src="/laurent-portrait.webp" 
              alt="Laurent Cornu - Easy AI Solutions" 
              fill 
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pourquoi me faire confiance ?</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
              <p>
                Je m'appelle Laurent Cornu, et pendant des années, j'ai géré ma propre micro-entreprise — une activité de fermentation de légumes que j'ai construite de zéro.
              </p>
              <p>
                Comme beaucoup d'entrepreneurs, j'ai entendu parler de l'IA. J'ai cherché, testé, parfois perdu des heures à comprendre ce qui pouvait vraiment m'aider — et ce qui n'était que du bruit. Puis j'ai trouvé. Et ça a changé ma façon de travailler.
              </p>
              <p>
                Aujourd'hui, je ne garde pas ça pour moi. Mon rôle, c'est de vous éviter ce chemin. Je suis direct, passionné, et j'ai une seule obsession : vous montrer concrètement, rapidement, comment l'IA peut simplifier votre quotidien — sans jargon, sans perdre de temps.
              </p>
              <p className="font-medium text-white">Pas de théorie. Juste ce qui marche, adapté à votre réalité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & CTA FINAL */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Prêt à gagner du temps ?</h2>
          <p className="text-xl text-navy/70 mb-10">L'appel est gratuit. 30 minutes. Sans engagement.</p>
          
          <a 
            href={calendlyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold text-lg py-5 px-10 rounded-2xl transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 mb-16 w-full sm:w-auto"
          >
            👉 Réserver mon appel gratuit
          </a>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-gray-500 font-medium tracking-wide border border-gray-100 rounded-full">OU POSEZ UNE QUESTION</span>
            </div>
          </div>

          <div className="mt-12 text-left">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-70">
          <div className="font-bold text-navy/90">Easy AI Solutions</div>
          <div className="flex items-center gap-6 text-sm text-navy/60">
            <a href="mailto:contact@easy-ai-solutions.ch" className="hover:text-navy transition-colors">contact@easy-ai-solutions.ch</a>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <a href="#" className="hover:text-navy transition-colors">Mentions légales</a>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <a href="#" className="hover:text-navy transition-colors">Politique de confidentialité (RGPD)</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
