import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { articles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Blog : IA pratique, outils métier et automatisation',
  description: 'Des guides pour simplifier le quotidien des petites entreprises : IA pratique, outils sur mesure et automatisation administrative.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Le blog Easy AI Solutions', description: 'Des repères concrets pour faire avancer votre projet.', url: '/blog', images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Easy AI Solutions — IA et outils métier' }] },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-navy">
      <nav aria-label="Navigation du blog" className="border-b border-slate-200 px-6 py-5 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <Link href="/" className="inline-flex items-center gap-2 font-bold"><ArrowLeft aria-hidden="true" className="h-5 w-5" />Easy AI Solutions</Link>
          <Link href="/#contact" data-track-event="contact_click" data-track-target="form" data-track-placement="blog" className="font-semibold text-sage underline underline-offset-4">Parlons de votre projet</Link>
        </div>
      </nav>
      <header className="bg-[#f5f7f3] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sage">Le blog</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Des repères concrets pour simplifier votre activité.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy/80">IA pratique, outils métier et automatisation : des guides pour comprendre les options et préparer un projet adapté à votre quotidien.</p>
        </div>
      </header>
      <section aria-label="Articles du blog" className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-2 lg:px-8">
        {articles.map(article => (
          <article key={article.slug} className="flex flex-col rounded-2xl border border-slate-200 p-7 md:p-9">
            <p className="text-sm font-semibold text-sage">{article.category}</p>
            <h2 className="mt-4 text-2xl font-bold"><Link href={`/blog/${article.slug}`} className="hover:text-sage">{article.title}</Link></h2>
            <p className="mt-4 flex-1 leading-relaxed text-navy/80">{article.description}</p>
            <Link href={`/blog/${article.slug}`} className="mt-7 inline-flex items-center gap-2 self-start font-bold text-sage">Lire le guide<span className="sr-only"> : {article.title}</span><ArrowRight aria-hidden="true" className="h-5 w-5" /></Link>
          </article>
        ))}
      </section>
    </main>
  )
}
