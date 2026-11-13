import { ArrowRight, Clock, Target, Search, Star } from 'lucide-react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import Portfolio from '@/components/Portfolio'
import Image from 'next/image'
import { articles } from '@/lib/articles'

export const metadata = {
  alternates: { canonical: '/' },
}

export default function LandingPage() {
  const latestArticle = articles[0]
  const calendlyUrl = "https://calendly.com/laurent-easy-ai-solutions/30min"

  return (
    <main className="min-h-screen bg-white text-navy selection:bg-sage/30">
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <header className="border-b border-slate-200 bg-white px-6 lg:px-8">
        <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 py-5">
          <Link href="/" className="text-xl font-extrabold tracking-tight">Easy AI <span className="text-sage">Solutions</span></Link>
          <div className="flex flex-wrap items-center gap-5 text-sm font-semibold sm:gap-7">
            <a href="#realisations" className="hover:text-sage">Réalisations</a>
            <a href="#accompagnement" className="hover:text-sage">Accompagnement</a>
            <Link href="/blog" className="hover:text-sage">Blog</Link>
            <a href="#contact" data-track-event="contact_click" data-track-target="form" data-track-placement="navigation" className="rounded-lg bg-navy px-4 py-3 text-white hover:bg-navy/90">Parlons de votre projet</a>
          </div>
        </nav>
      </header>
      <section id="contenu" className="scroll-mt-6 bg-[#f5f7f3] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-sage">IA pratique · Outils métier · Suisse romande</p>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Moins de tâches répétitives.<br /><span className="text-sage">Plus de temps pour votre métier.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy/80 sm:text-xl">
              Je conçois avec vous des outils métier, des sites web et des automatisations qui simplifient votre activité. De l’audit à la livraison, on part de vos besoins réels.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a href={calendlyUrl} data-track-event="booking_click" data-track-target="calendly" data-track-placement="hero" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-navy shadow-lg shadow-accent/15 transition-colors hover:bg-accent/90">
                Parlons de votre projet <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </a>
              <a href="#realisations" className="inline-flex items-center gap-2 py-3 font-semibold underline decoration-sage/50 underline-offset-4">Voir les réalisations</a>
            </div>
            <p className="mt-4 text-sm text-navy/70">Premier échange gratuit · 30 minutes · Sans engagement</p>
          </div>
          <Link href="/realisations/agenda-virtuel-lac-souterrain" data-track-event="case_study_click" data-track-target="agenda-virtuel-lac-souterrain" data-track-placement="hero" className="group block overflow-hidden rounded-2xl border border-sage/25 bg-white shadow-xl shadow-navy/5">
            <div className="relative aspect-[20/13]">
              <Image src="/agenda-virtuel.svg" alt="Illustration de l’agenda virtuel du Lac Souterrain, avec des données fictives" fill priority sizes="(max-width: 1023px) 100vw, 45vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-5 border-t border-slate-100 p-6">
              <div><p className="text-xs font-bold uppercase tracking-wider text-sage">Cas métier · Lac Souterrain</p><p className="mt-2 text-lg font-bold">De l’audit à l’agenda virtuel</p></div>
              <ArrowRight aria-hidden="true" className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Vous vous reconnaissez ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Vous voulez utiliser l’IA, mais vous ne savez pas par où commencer", icon: Search },
              { title: "Vous perdez du temps à ressaisir ou à chercher les mêmes informations", icon: Clock },
              { title: "Vos outils ne suivent plus la façon dont votre équipe travaille", icon: Target }
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

      <section id="accompagnement" className="scroll-mt-8 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sage">L’accompagnement</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">Le bon point de départ, selon votre besoin.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-7 md:p-9">
              <p className="text-sm font-semibold text-sage">Prendre en main l’IA</p>
              <h3 className="mt-3 text-2xl font-bold">Une session pour avancer</h3>
              <p className="mt-4 leading-relaxed text-navy/80">Vous avez besoin de choisir les bons outils et de savoir les utiliser. Nous travaillons sur vos tâches, avec des démonstrations et une mise en pratique guidée.</p>
              <p className="mt-6 font-bold">Session personnalisée · 300 CHF</p>
            </article>
            <article className="rounded-2xl border border-sage/25 bg-[#f5f7f3] p-7 md:p-9">
              <p className="text-sm font-semibold text-sage">Résoudre un besoin métier</p>
              <h3 className="mt-3 text-2xl font-bold">Un outil adapté à votre activité</h3>
              <p className="mt-4 leading-relaxed text-navy/80">Un agenda partagé, une gestion de production ou une tâche à automatiser : nous définissons le besoin, puis je développe et vous accompagne jusqu’à la livraison.</p>
              <p className="mt-6 font-bold">Périmètre et devis après l’audit</p>
            </article>
            <article className="rounded-2xl border border-sage/25 bg-[#f5f7f3] p-7 md:p-9">
              <p className="text-sm font-semibold text-sage">Repenser votre administratif</p>
              <h3 className="mt-3 text-2xl font-bold">Refonte et automatisation administrative</h3>
              <p className="mt-4 leading-relaxed text-navy/80">Site web, commandes, documents et suivi : nous reprenons votre organisation pour relier vos outils et automatiser les tâches répétitives, avec les validations utiles.</p>
              <p className="mt-6 font-bold">Audit · Développement · Livraison</p>
              <Link href="/realisations/fermentierra" data-track-event="case_study_click" data-track-target="fermentierra" data-track-placement="offer" className="mt-5 inline-flex items-center gap-2 font-semibold text-sage underline underline-offset-4">Voir le cas Fermentierra <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
            </article>
          </div>
          <ol className="mt-12 grid gap-8 border-t border-slate-200 pt-10 md:grid-cols-3">
            {[
              { step: '01', title: 'Audit', desc: 'On observe votre fonctionnement et les tâches qui prennent du temps. On choisit ce qui mérite d’être simplifié.' },
              { step: '02', title: 'Développement', desc: 'Je construis une solution ciblée et nous l’ajustons avec vos retours, à partir de situations concrètes.' },
              { step: '03', title: 'Livraison', desc: 'Vous prenez en main l’outil. Nous vérifions le parcours et préparons les éléments utiles à son utilisation et à sa reprise.' }
            ].map(item => <li key={item.step}><span className="text-sm font-bold text-sage">{item.step}</span><h3 className="mt-3 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-navy/80">{item.desc}</p></li>)}
          </ol>
        </div>
      </section>

      {/* MES RÉALISATIONS */}
      <Portfolio />

      {latestArticle && (
        <section aria-labelledby="blog-title" className="border-y border-slate-200 bg-[#f5f7f3] px-6 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
            <div><p className="text-sm font-bold uppercase tracking-widest text-sage">Sur le blog</p><h2 id="blog-title" className="mt-4 text-3xl font-bold">Des guides pour préparer votre projet.</h2><Link href="/blog" className="mt-5 inline-flex items-center gap-2 font-semibold text-sage">Voir le blog<ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></div>
            <article className="rounded-2xl border border-slate-200 bg-white p-7"><h3 className="text-2xl font-bold"><Link href={`/blog/${latestArticle.slug}`}>{latestArticle.title}</Link></h3><p className="mt-4 leading-relaxed text-navy/80">{latestArticle.description}</p><Link href={`/blog/${latestArticle.slug}`} className="mt-5 inline-flex items-center gap-2 font-bold text-sage">Lire le guide<ArrowRight aria-hidden="true" className="h-5 w-5" /></Link></article>
          </div>
        </section>
      )}

      {/* TÉMOIGNAGE */}
      <section className="py-24 bg-sage/5 border-y border-sage/10 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Ce qu&apos;en pensent mes clients</h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-sage/5 border border-sage/10 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1 bg-white px-5 py-3 rounded-full shadow-md border border-slate-100">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
              ))}
              <Star className="w-5 h-5 text-slate-200" />
            </div>
            
            <blockquote className="text-xl md:text-2xl text-navy/90 text-center font-medium italic mt-6 mb-10 leading-relaxed">
              « Ça offre de solutions spécifiques pouvant vous aider dans votre carrière et autres. »
            </blockquote>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center text-center md:text-left text-base text-navy/80 bg-slate-50 p-6 md:p-8 rounded-2xl mb-8 border border-slate-100">
              <div className="flex-1">
                <span className="font-bold text-navy block mb-2 text-sm uppercase tracking-wider opacity-60">Avant notre session</span>
                « Je savais l&apos;existence de chatgpt mais je ne l&apos;utilisais pas vraiment. »
              </div>
              <div className="hidden md:block w-px bg-slate-200"></div>
              <div className="flex-1">
                <span className="font-bold text-navy block mb-2 text-sm uppercase tracking-wider opacity-60">Après notre session</span>
                « J&apos;ai commencé à utiliser pour mon accompagnement professionnel et d&apos;améliorer mon réseau professionnel. »
              </div>
            </div>
            
            <div className="text-center">
              <div className="font-bold text-navy text-lg">Désiré</div>
              <div className="text-sage font-medium mt-1">
                Ingénieur génie civil, fondateur ICOSE
                <div className="mt-1">
                  <a href="https://www.icose.ch" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-bold">
                    www.icose.ch
                  </a>
                </div>
              </div>
            </div>
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
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pourquoi me faire confiance ?</h2>
            <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
              <p>
                Je m&apos;appelle Laurent Cornu, et pendant des années, j&apos;ai géré ma propre micro-entreprise — une activité de fermentation de légumes que j&apos;ai construite de zéro.
              </p>
              <p>
                Comme beaucoup d&apos;entrepreneurs, j&apos;ai entendu parler de l&apos;IA. J&apos;ai cherché, testé, parfois perdu des heures à comprendre ce qui pouvait vraiment m&apos;aider — et ce qui n&apos;était que du bruit. Puis j&apos;ai trouvé. Et ça a changé ma façon de travailler.
              </p>
              <p>
                Aujourd&apos;hui, je ne garde pas ça pour moi. Mon rôle, c&apos;est de vous éviter ce chemin. Je suis direct, passionné, et j&apos;ai une seule obsession : vous montrer concrètement, rapidement, comment l&apos;IA peut simplifier votre quotidien — sans jargon, sans perdre de temps.
              </p>
              <p className="font-medium text-white">Pas de théorie. Juste ce qui marche, adapté à votre réalité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & CTA FINAL */}
      <section id="contact" className="scroll-mt-8 py-24 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Construisons votre solution sur mesure</h2>
          <p className="text-xl text-navy/70 mb-10">Un outil métier, un site web, une automatisation ou un accompagnement IA : parlons de votre projet et de ce qui simplifierait votre quotidien.</p>
          
          <a 
            href={calendlyUrl} data-track-event="booking_click" data-track-target="calendly" data-track-placement="contact"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-navy font-bold text-lg py-5 px-10 rounded-2xl transition-all shadow-xl shadow-accent/20 hover:-translate-y-1 mb-16 w-full sm:w-auto"
          >
            Parlons de votre projet
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-bold text-navy/90">Easy AI Solutions</div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-navy/80">
            <a href="mailto:contact@easy-ai-solutions.ch" data-track-event="contact_click" data-track-target="email" data-track-placement="footer" className="hover:text-navy transition-colors">contact@easy-ai-solutions.ch</a>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <a href="/mentions-legales" className="hover:text-navy transition-colors">Mentions légales</a>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <a href="/politique-de-confidentialite" className="hover:text-navy transition-colors">Politique de confidentialité (RGPD)</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
