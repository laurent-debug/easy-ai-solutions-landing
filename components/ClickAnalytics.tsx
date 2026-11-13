'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { track } from '@vercel/analytics'
import {
  createClickEvent, hasPrivacyOptOut, isProductionOrigin, sanitizePageUrl,
} from '@/lib/click-analytics'

function trackingIsDisabled() {
  const privacyNavigator = navigator as Navigator & { globalPrivacyControl?: boolean }
  return hasPrivacyOptOut(navigator.doNotTrack, privacyNavigator.globalPrivacyControl)
}

function subscribeToBrowserState(onChange: () => void) {
  window.addEventListener('pageshow', onChange)
  document.addEventListener('visibilitychange', onChange)
  return () => {
    window.removeEventListener('pageshow', onChange)
    document.removeEventListener('visibilitychange', onChange)
  }
}

function analyticsAreAllowed() {
  return isProductionOrigin(window.location.origin) && !trackingIsDisabled()
}

function analyticsOnServer() {
  return false
}

export default function ClickAnalytics({ publicPaths, projectIds, configured = false }: { publicPaths: string[]; projectIds: string[]; configured?: boolean }) {
  const allowedInBrowser = useSyncExternalStore(subscribeToBrowserState, analyticsAreAllowed, analyticsOnServer)
  const enabled = configured && allowedInBrowser

  useEffect(() => {
    if (trackingIsDisabled()) return
    const live = configured && isProductionOrigin(window.location.origin)
    const local = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)
    if (!live && !local) return

    function handleClick(event: MouseEvent) {
      try {
        if (trackingIsDisabled() || !publicPaths.includes(window.location.pathname)) return
        if (event.type === 'auxclick' ? event.button !== 1 : event.button !== 0) return
        const link = event.target instanceof Element ? event.target.closest('a[data-track-event], button[data-track-event]') : null
        if (!link) return
        const click = createClickEvent(
          link.getAttribute('data-track-event'),
          link.getAttribute('data-track-target'),
          link.getAttribute('data-track-placement'),
          projectIds,
        )
        if (!click) return
        if (live) {
          track(click.name, click.data)
        } else if (process.env.NODE_ENV === 'development') {
          console.debug('[Easy AI clicks]', click.name, click.data)
        }
      } catch {
        // Le suivi ne doit jamais interrompre la navigation.
      }
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('auxclick', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('auxclick', handleClick, true)
    }
  }, [publicPaths, projectIds, enabled, configured])

  if (!enabled) return null
  return <Analytics debug={false} beforeSend={event => {
    if (trackingIsDisabled()) return null
    const url = sanitizePageUrl(event.url, publicPaths)
    return url ? { ...event, url } : null
  }} />
}
