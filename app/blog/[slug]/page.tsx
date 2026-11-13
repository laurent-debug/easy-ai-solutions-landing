import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { articles } from '@/lib/articles'
import { projects } from '@/lib/projects'

const siteUrl = 'https://www.easy-ai-solutions.ch'

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: 'article', title: article.title, description: article.description,
      url: `/blog/${article.slug}`, authors: ['Laurent Cornu'],
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Easy AI Solutions — IA et outils métier' }],
    },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: ['/opengraph-image'] },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find(item => item.slug === slug)
  if (!article) notFound()
  const relatedProject = projects.find(project => project.id === article.caseStudyId)
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: article.title, description: article.description, inLanguage: 'fr-CH',
    url: `${siteUrl}/blog/${article.slug}`,
    mainEntityOfPage: `${siteUrl}/blog/${article.slug}`,
    author: { '@type': 'Person', name: 'Laurent Cornu', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'Easy AI Solutions', url: siteUrl },
  }

  return (
    <main className="min-h-screen bg-white text-navy">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\u003c') }} />
      <nav aria-label="Navigation de l’article" className="border-b border-slate-200 px-6 py-5 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/blog" className="inline-flex items-center gap-2 font-bold"><ArrowLeft aria-hidden="true" className="h-5 w-5" />Tous les articles</Link>
          <Link href="/" className="font-bold text-sage">Easy AI Solutions</Link>
        </div>
      </nav>
      <article className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <header>
          <p className="text-sm font-bold uppercase tracking-widest text-sage">{article.category}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
          <p className="mt-6 text-sm text-navy/70">Par Laurent Cornu · Easy AI Solutions</p>
          <p className="mt-8 text-xl leading-relaxed text-navy/90">{article.intro}</p>
        </header>
        <div className="mt-12 space-y-12">
          {article.sections.map(section => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold leading-snug md:text-3xl">{section.title}</h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-navy/80">
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul className="list-disc space-y-3 pl-6">{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
                {section.links && (
                  <ul className="space-y-3">
                    {section.links.map(link => {
                      const linkedProject = projects.find(project => link.href === `/realisations/${project.id}`)
                      return (
                        <li key={link.href}>
                          <Link href={link.href} data-track-event={linkedProject ? 'case_study_click' : undefined} data-track-target={linkedProject?.id} data-track-placement="blog" className="font-semibold text-sage underline underline-offset-4">{link.label}</Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        {relatedProject && (
          <aside className="mt-12 rounded-2xl border border-sage/25 bg-[#f5f7f3] p-7">
            <p className="text-sm font-semibold text-sage">Un exemple concret</p>
            <h2 className="mt-3 text-2xl font-bold">{relatedProject.title}</h2>
            <p className="mt-4 leading-relaxed text-navy/80">{relatedProject.description}</p>
            <Link href={`/realisations/${relatedProject.id}`} data-track-event="case_study_click" data-track-target={relatedProject.id} data-track-placement="blog" className="mt-5 inline-flex items-center gap-2 font-bold text-sage">Découvrir le cas métier<ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
          </aside>
        )}
      </article>
      <section aria-labelledby="blog-contact" className="bg-[#f5f7f3] px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 id="blog-contact" className="text-3xl font-bold">Construisons votre solution sur mesure</h2>
          <p className="mt-5 text-lg leading-relaxed text-navy/80">Vous avez un parcours à simplifier ? Commençons par comprendre votre activité et vos besoins.</p>
          <a href="https://calendly.com/samamuse-ai/30min" data-track-event="booking_click" data-track-target="calendly" data-track-placement="blog" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-4 font-bold text-navy hover:bg-accent/90">Parlons de votre projet<ArrowRight aria-hidden="true" className="h-5 w-5" /></a>
          <p className="mt-4 text-sm text-navy/70">Premier échange gratuit · 30 minutes · Sans engagement</p>
        </div>
      </section>
    </main>
  )
}
