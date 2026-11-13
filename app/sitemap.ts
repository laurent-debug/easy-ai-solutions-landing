import { articles } from '@/lib/articles'
import { projects } from '@/lib/projects'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.easy-ai-solutions.ch'

  return [
    { url: `${baseUrl}/guide-ia`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'monthly', priority: 0.8 },
    ...articles.map(article => ({ url: `${baseUrl}/blog/${article.slug}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...projects.map(project => ({
      url: `${baseUrl}/realisations/${project.id}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/guide-gratuit`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/prompteur`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-de-confidentialite`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
