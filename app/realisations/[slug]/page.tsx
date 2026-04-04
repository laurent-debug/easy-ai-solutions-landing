import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, Check, Globe, Layout, Smartphone } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER / NAVIGATION COMPACTE */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-navy hover:text-sage transition-colors font-bold group">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Retour à l'accueil
          </Link>
          <div className="text-navy font-extrabold tracking-tight hidden sm:block">Easy AI Solutions</div>
        </div>
      </nav>

      {/* HERO SECTION PROJET */}
      <section className="pt-16 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-sage/10 text-sage border border-sage/20">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-navy leading-tight">
                {project.title}
              </h1>
              <p className="text-2xl text-sage font-medium italic">
                {project.subtitle}
              </p>
              <p className="text-xl text-navy/70 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-accent/20 hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5" />
                  Visiter l'application
                </a>
              )}
            </div>
            
            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl border border-slate-200">
               <Image 
                 src={project.image} 
                 alt={project.title} 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>
          </div>
        </div>
      </section>

      {/* DÉTAILS & FONCTIONNALITÉS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy">Ce que cette solution apporte</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage/10 rounded-2xl flex items-center justify-center mb-6 text-sage">
                  <Check className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium text-navy/90 leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Besoin d'une solution similaire ?</h2>
            <p className="text-xl text-navy/70 mb-12">Je peux vous aider à développer votre propre outil métier ou à intégrer l'IA dans vos processus.</p>
            <div className="text-left bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
              <ContactForm />
            </div>
        </div>
      </section>

      {/* FOOTER COHÉRENT */}
      <footer className="bg-white py-12 px-6 lg:px-8 border-t border-slate-100 opacity-60">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="font-bold text-navy">Easy AI Solutions</div>
          <p>© 2024 — Tous droits réservés</p>
        </div>
      </footer>
    </main>
  );
}
