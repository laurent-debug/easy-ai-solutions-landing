import test from 'node:test'
import assert from 'node:assert/strict'
import { CONTACT_EMAIL, contactEmailUrl } from '../lib/contact-email.ts'

test('prépare un e-mail au destinataire fixe avec les caractères français', () => {
  const draft = new URL(contactEmailUrl({ firstName: 'Élodie', email: 'elodie@example.org', message: 'Un outil pour gérer mes réservations & devis ?' }))
  assert.equal(draft.protocol, 'mailto:')
  assert.equal(draft.pathname, CONTACT_EMAIL)
  assert.equal(draft.searchParams.get('subject'), 'Projet de solution sur mesure')
  assert.match(draft.searchParams.get('body'), /Élodie/)
  assert.match(draft.searchParams.get('body'), /réservations & devis \?/)
})

test('le contenu ne peut pas ajouter de destinataire ou de copie cachée', () => {
  const draft = new URL(contactEmailUrl({ firstName: 'Test?bcc=intrus@example.org', email: 'test@example.org', message: 'Bonjour\r\n&bcc=intrus@example.org#fragment' }))
  assert.equal(draft.pathname, CONTACT_EMAIL)
  assert.deepEqual([...draft.searchParams.keys()], ['subject', 'body'])
  assert.equal(draft.hash, '')
  assert.match(draft.searchParams.get('body'), /&bcc=intrus@example.org#fragment/)
})
