import { ArrowRight, Check, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Portfolio() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="realisations" className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sage font-bold tracking-wider uppercase text-sm">Mes réalisations</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy">
            Des outils concrets pour des<br className="hidden md:block" /> besoins réels
          </h2>
          <p className="text-lg text-navy/60 max-w-2xl mx-auto">
            Voici quelques-unes des solutions que j&apos;ai développées pour simplifier le quotidien des entrepreneurs.
          </p>
        </div>

        {featuredProjects.map(featured => (
          <article key={featured.id} className="mb-10 grid overflow-hidden rounded-2xl border border-sage/25 bg-[#f5f7f3] lg:grid-cols-2">
            <div className="relative aspect-[20/13] self-center">
              <Image src={featured.image} alt={featured.imageAlt || featured.title} fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-contain" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-sm font-bold uppercase tracking-wider text-sage">{featured.category}</p>
              <h3 className="mt-4 text-3xl font-bold">{featured.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-navy/80">{featured.description}</p>
              <p className="mt-5 text-sm font-semibold text-navy">Audit → Développement → Livraison</p>
              <Link href={`/realisations/${featured.id}`} data-track-event="case_study_click" data-track-target={featured.id} data-track-placement="portfolio" className="mt-7 inline-flex items-center gap-3 self-start rounded-xl bg-navy px-5 py-4 font-bold text-white hover:bg-navy/90">
                Découvrir le cas métier <ArrowRight aria-hidden="true" className="h-5 w-5" />
              </Link>
              {featured.imageCaption && <p className="mt-4 text-xs text-navy/70">{featured.imageCaption}</p>}
            </div>
          </article>
        ))}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {otherProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-slate-50 rounded-[2.5rem] border border-slate-100 p-2 transition-all hover:shadow-2xl hover:shadow-sage/10 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-navy/5 mb-6 shadow-inner">
                <Image 
                  src={project.image} 
                  alt={project.imageAlt || project.title}
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-navy shadow-lg backdrop-blur-sm border border-white/50">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-sage transition-colors">
                  {project.title}
                </h3>
                <p className="text-sage font-medium text-sm mb-4">
                  {project.subtitle}
                </p>
                <p className="text-navy/70 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {project.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-navy/80">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-sage/10 flex items-center justify-center text-sage">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-auto">
                  <Link 
                    href={`/realisations/${project.id}`} data-track-event="case_study_click" data-track-target={project.id} data-track-placement="portfolio"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-slate-200 text-navy font-bold text-sm transition-all hover:bg-slate-100 group/btn"
                  >
                    <span className="sr-only">{project.title} : </span>Détails
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                  {project.link && (
                    <a 
                      href={project.link} data-track-event="project_site_click" data-track-target={project.id} data-track-placement="portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy text-white font-bold text-sm transition-all hover:bg-navy/90 shadow-lg shadow-navy/10"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="sr-only">{project.title} : </span>Visiter
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
