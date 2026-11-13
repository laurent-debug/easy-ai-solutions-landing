import test from 'node:test'
import assert from 'node:assert/strict'
import { createClickEvent, hasPrivacyOptOut, sanitizePageUrl, isProductionOrigin } from '../lib/click-analytics.ts'

const projectIds = ['agenda-virtuel-lac-souterrain', 'atelier-os', 'fermentierra', 'bulk-invoice', 'prompteur-pop']
const publicPaths = ['/', '/blog', '/realisations/fermentierra']

test('un clic Calendly reste une intention et ne transporte que deux libellés', () => {
  assert.deepEqual(createClickEvent('booking_click', 'calendly', 'hero', projectIds), {
    name: 'booking_click', data: { target: 'calendly', placement: 'hero' },
  })
  assert.equal(createClickEvent('appointment_scheduled', 'calendly', 'hero', projectIds), null)
  assert.equal(createClickEvent('lead_created', 'form', 'contact', projectIds), null)
})

test('les cibles et emplacements libres contenant des données personnelles sont refusés', () => {
  assert.equal(createClickEvent('booking_click', 'personne@example.com', 'hero', projectIds), null)
  assert.equal(createClickEvent('contact_click', 'email', 'personne@example.com', projectIds), null)
  assert.equal(createClickEvent('case_study_click', 'fermentierra?email=personne@example.com', 'portfolio', projectIds), null)
  assert.equal(createClickEvent(null, 'form', 'navigation', projectIds), null)
})

test('les cas actuels sont suivis, un ancien projet ou une cible inconnue ne le sont pas', () => {
  assert.deepEqual(createClickEvent('case_study_click', 'fermentierra', 'portfolio', projectIds), {
    name: 'case_study_click', data: { target: 'fermentierra', placement: 'portfolio' },
  })
  assert.equal(createClickEvent('case_study_click', 'notenda', 'portfolio', projectIds), null)
  assert.equal(createClickEvent('project_site_click', 'https://example.com', 'portfolio', projectIds), null)
})

test('l’adresse des pages est nettoyée de ses paramètres et fragments', () => {
  assert.equal(sanitizePageUrl('https://www.easy-ai-solutions.ch/realisations/fermentierra?email=personne@example.com#secret', publicPaths), 'https://www.easy-ai-solutions.ch/realisations/fermentierra')
  assert.equal(sanitizePageUrl('https://easy-ai-solutions.ch/?utm_source=test', publicPaths), 'https://easy-ai-solutions.ch/')
})

test('les URL inconnues, privées, locales et de prévisualisation sont exclues', () => {
  for (const url of ['https://www.easy-ai-solutions.ch/client/personne@example.com', 'http://127.0.0.1:8780/', 'https://preview.vercel.app/', 'https://example.com/', 'javascript:alert(1)', '/blog']) {
    assert.equal(sanitizePageUrl(url, publicPaths), null)
  }
  assert.equal(isProductionOrigin('http://easy-ai-solutions.ch'), false)
})

test('Do Not Track et Global Privacy Control bloquent le suivi', () => {
  assert.equal(hasPrivacyOptOut('1', false), true)
  assert.equal(hasPrivacyOptOut('0', true), true)
  assert.equal(hasPrivacyOptOut(undefined, true), true)
  assert.equal(hasPrivacyOptOut('0', false), false)
  assert.equal(hasPrivacyOptOut(null, undefined), false)
})
