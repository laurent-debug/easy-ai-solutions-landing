'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({ firstName: '', email: '', message: '' })
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE')
  const [errorMessage, setErrorMessage] = useState('')

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    // Validation
    if (!formData.firstName.trim()) {
      setErrorMessage("Le prénom est obligatoire")
      return
    }
    if (!isValidEmail(formData.email)) {
      setErrorMessage("Format d'email invalide")
      return
    }
    if (!formData.message.trim()) {
      setErrorMessage("Le message est obligatoire")
      return
    }

    setStatus('LOADING')

    try {
      const { error } = await supabase
        .from('ContactRequest')
        .insert([
          {
            firstName: formData.firstName,
            email: formData.email,
            message: formData.message,
            status: 'PENDING',
          }
        ])

      if (error) throw error
      
      setStatus('SUCCESS')
    } catch (err: any) {
      console.error(err)
      setErrorMessage("Erreur système, veuillez réessayer")
      setStatus('ERROR')
    }
  }

  if (status === 'SUCCESS') {
    return (
      <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20 animate-fade-in">
        <div className="w-16 h-16 bg-sage text-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Message envoyé !</h3>
        <p className="text-navy/70">Merci pour votre message. Je vous recontacterai très vite.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-navy/80 mb-1">Prénom</label>
        <input
          type="text"
          id="firstName"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
          placeholder="Votre prénom"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
          placeholder="vous@exemple.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy/80 mb-1">Message</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all resize-y"
          placeholder="Comment puis-je vous aider ?"
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'LOADING'}
        className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-8 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-accent/20"
      >
        {status === 'LOADING' ? 'Envoi en cours...' : 'Envoyer mon message'}
      </button>
    </form>
  )
}
