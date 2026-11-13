export const PRODUCTION_ORIGINS = ['https://www.easy-ai-solutions.ch', 'https://easy-ai-solutions.ch'] as const

export type ClickEventName = 'booking_click' | 'contact_click' | 'case_study_click' | 'project_site_click'
export type ClickEvent = { name: ClickEventName; data: { target: string; placement: string } }

const placements = new Set(['navigation', 'hero', 'contact', 'offer', 'case_study', 'portfolio', 'blog', 'footer'])

export function isProductionOrigin(origin: string): boolean {
  return (PRODUCTION_ORIGINS as readonly string[]).includes(origin)
}

export function hasPrivacyOptOut(doNotTrack: string | null | undefined, globalPrivacyControl: boolean | undefined): boolean {
  return doNotTrack === '1' || globalPrivacyControl === true
}

export function createClickEvent(
  name: string | null,
  target: string | null,
  placement: string | null,
  projectIds: readonly string[],
): ClickEvent | null {
  if (!name || !target || !placement || !placements.has(placement)) return null
  switch (name) {
    case 'booking_click':
      if (target !== 'calendly') return null
      break
    case 'contact_click':
      if (target !== 'form' && target !== 'email') return null
      break
    case 'case_study_click':
    case 'project_site_click':
      if (!projectIds.includes(target)) return null
      break
    default:
      return null
  }
  return { name, data: { target, placement } }
}

export function sanitizePageUrl(rawUrl: string, publicPaths: readonly string[]): string | null {
  try {
    const url = new URL(rawUrl)
    if (!isProductionOrigin(url.origin) || !publicPaths.includes(url.pathname)) return null
    return url.origin + url.pathname
  } catch {
    return null
  }
}
