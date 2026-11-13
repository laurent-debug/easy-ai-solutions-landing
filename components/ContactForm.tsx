'use client'

import { useState } from 'react'
import { CONTACT_EMAIL, contactEmailUrl } from '@/lib/contact-email'

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', email: '', message: '' })
  const [errorMessage, setErrorMessage] = useState('')
  const [prepared, setPrepared] = useState(false)

  function updateField(field: keyof typeof formData, value: string) {
    setFormData(current => ({ ...current, [field]: value }))
    setErrorMessage('')
    setPrepared(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formData.firstName.trim() || !formData.message.trim()) {
      setErrorMessage('Merci de renseigner votre prénom et votre message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Merci de vérifier votre adresse e-mail.')
      return
    }
    window.location.href = contactEmailUrl(formData)
    setPrepared(true)
  }

  return (
    <form action={'mailto:' + CONTACT_EMAIL} method="post" encType="text/plain" onSubmit={handleSubmit} className="space-y-6" aria-describedby="contact-mail-help">
      <div>
        <label htmlFor="contact-first-name" className="mb-1 block text-sm font-medium text-navy/80">Prénom</label>
        <input id="contact-first-name" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={event => updateField('firstName', event.target.value)} maxLength={80} required placeholder="Votre prénom" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage/20" />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-navy/80">E-mail</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={event => updateField('email', event.target.value)} maxLength={254} required placeholder="vous@exemple.com" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage/20" />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-navy/80">Votre projet</label>
        <textarea id="contact-message" name="message" rows={4} value={formData.message} onChange={event => updateField('message', event.target.value)} maxLength={5000} required placeholder="Quelle tâche ou quel parcours souhaitez-vous simplifier ?" className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 outline-none transition-all focus:border-sage focus:ring-2 focus:ring-sage/20" />
      </div>
      {errorMessage && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">{errorMessage}</p>}
      <button type="submit" data-track-event="contact_click" data-track-target="email" data-track-placement="contact" className="w-full rounded-xl bg-accent px-8 py-4 font-semibold text-navy shadow-lg shadow-accent/20 transition-all hover:bg-accent/90">Préparer mon e-mail</button>
      <p id="contact-mail-help" className="text-sm leading-relaxed text-navy/70">Votre messagerie s’ouvre avec votre message. Vous pourrez le relire puis l’envoyer à Laurent.</p>
      {prepared && <p role="status" className="rounded-lg bg-sage/10 p-3 text-sm text-navy">Votre message est préparé. Il reste à l’envoyer depuis votre messagerie.</p>}
      <p className="text-sm text-navy/70">Vous pouvez aussi écrire directement à <a href={'mailto:' + CONTACT_EMAIL} data-track-event="contact_click" data-track-target="email" data-track-placement="contact" className="font-semibold text-sage underline underline-offset-4">{CONTACT_EMAIL}</a>.</p>
    </form>
  )
}
