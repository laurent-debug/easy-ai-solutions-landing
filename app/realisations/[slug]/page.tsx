import type { Metadata } from 'next';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Check, Globe } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(item => item.id === slug);
  if (!project) return {};
  const path = `/realisations/${project.id}`;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: path },
    openGraph: {
      title: project.title,
      description: project.description,
      url: path,
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Easy AI Solutions — IA et outils métier' }],
    },
    twitter: { card: 'summary_large_image', title: project.title, description: project.description, images: ['/opengraph-image'] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.id === slug);

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
            Retour à l&apos;accueil
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
              
              {project.caseStudy?.clientUrl && (
                <p>
                  <a href={project.caseStudy.clientUrl} data-track-event="project_site_click" data-track-target={project.id} data-track-placement="case_study" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-sage underline underline-offset-4 hover:text-navy">
                    Découvrir {project.caseStudy.client} <Globe aria-hidden="true" className="h-4 w-4" />
                  </a>
                </p>
              )}

              {project.link && (
                <a 
                  href={project.link} data-track-event="project_site_click" data-track-target={project.id} data-track-placement="case_study"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-navy font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-accent/20 hover:-translate-y-1"
                >
                  <Globe className="w-5 h-5" />
                  Visiter l&apos;application
                </a>
              )}
            </div>
            
            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl border border-slate-200">
               <Image 
                 src={project.image} 
                 alt={project.imageAlt || project.title}
                 fill 
                 className="object-cover"
                 sizes="(max-width: 1023px) 100vw, 50vw"
                 priority
               />
            </div>
          </div>
        </div>
      </section>

      {project.caseStudy && (
        <section aria-labelledby="mission-title" className="border-t border-slate-200 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-bold uppercase tracking-widest text-sage">La mission · {project.caseStudy.client}</p>
            <h2 id="mission-title" className="mt-4 text-3xl font-bold text-navy md:text-4xl">De la compréhension du besoin à la livraison</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-navy/80">{project.caseStudy.context}</p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {project.caseStudy.phases.map((phase, index) => (
                <li key={phase.title} className="border-t-2 border-sage/30 pt-6">
                  <p className="text-sm font-bold text-sage">0{index + 1}</p>
                  <h3 className="mt-3 text-2xl font-bold text-navy">{phase.title}</h3>
                  <p className="mt-4 leading-relaxed text-navy/80">{phase.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

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
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Construisons votre solution sur mesure</h2>
            <p className="text-xl text-navy/70 mb-12">Un outil métier, un site web ou une automatisation : partons de votre besoin pour concevoir une solution adaptée à votre activité.</p>
            <a href="https://calendly.com/laurent-easy-ai-solutions/30min" data-track-event="booking_click" data-track-target="calendly" data-track-placement="case_study" target="_blank" rel="noopener noreferrer" className="mb-10 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-navy hover:bg-accent/90">
              Parlons de votre projet <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
            <div className="text-left bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
              <ContactForm />
            </div>
        </div>
      </section>

      {/* FOOTER COHÉRENT */}
      <footer className="bg-white py-12 px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4 text-sm">
          <div className="font-bold text-navy">Easy AI Solutions</div>
          <p>© {new Date().getFullYear()} — Easy AI Solutions</p>
        </div>
      </footer>
    </main>
  );
}
