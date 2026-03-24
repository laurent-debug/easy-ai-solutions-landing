'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ PRENOM: '', EMAIL: '', MESSAGE: '' })
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE')
  const [errorMessage, setErrorMessage] = useState('')

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    setErrorMessage('')

    // Validation
    if (!formData.PRENOM.trim()) {
      setErrorMessage("Le prénom est obligatoire")
      e.preventDefault()
      return
    }
    if (!isValidEmail(formData.EMAIL)) {
      setErrorMessage("Format d'email invalide")
      e.preventDefault()
      return
    }
    if (!formData.MESSAGE.trim()) {
      setErrorMessage("Le message est obligatoire")
      e.preventDefault()
      return
    }

    // Le formulaire est valide, on laisse le navigateur soumettre vers l'iframe
    setStatus('LOADING')
  }

  const handleIframeLoad = () => {
    if (status === 'LOADING') {
      setStatus('SUCCESS')
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
    <>
      <form 
        id="sib-form" 
        method="POST" 
        action="https://f33d21fe.sibforms.com/serve/MUIFADqWXNVpI5mf5PyuZ5p1CSRpGT8jXl70mCQzDON6DFZwEEeI-33_r_Mmd4a3Mamzyyc6Quxc41tgU6ghDAnpGm-va6xy_pdNRMn7MTqJ9XChpY8Rha-beza1onddPlmEYIqs2X2IfNe11r-0V3OKSdEt8z4wdCH41q3D1Z1GqxRxdtVakHqN-2cn7QFB8G2m_jMVBJjqxC0y"
        target="hidden_iframe"
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
        <div>
          <label htmlFor="PRENOM" className="block text-sm font-medium text-navy/80 mb-1">Prénom</label>
          <input
            type="text"
            id="PRENOM"
            name="PRENOM"
            value={formData.PRENOM}
            onChange={(e) => setFormData({ ...formData, PRENOM: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
            placeholder="Votre prénom"
            required
          />
        </div>

        <div>
          <label htmlFor="EMAIL" className="block text-sm font-medium text-navy/80 mb-1">Email</label>
          <input
            type="email"
            id="EMAIL"
            name="EMAIL"
            value={formData.EMAIL}
            onChange={(e) => setFormData({ ...formData, EMAIL: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all"
            placeholder="vous@exemple.com"
            required
          />
        </div>

        <div>
          <label htmlFor="MESSAGE" className="block text-sm font-medium text-navy/80 mb-1">Message</label>
          <textarea
            id="MESSAGE"
            name="MESSAGE"
            rows={4}
            value={formData.MESSAGE}
            onChange={(e) => setFormData({ ...formData, MESSAGE: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all resize-y"
            placeholder="Comment puis-je vous aider ?"
            required
          />
        </div>

        {/* Honeypot Field (Invisible pour les humains, rempli par les bots) */}
        <input 
          type="text" 
          name="email_address_check" 
          value="" 
          style={{ display: 'none', position: 'absolute', left: '-5000px' }} 
          readOnly 
        />
        <input type="hidden" name="locale" value="fr" />

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

      {/* Iframe cachée pour intercepter la réponse de Brevo et rester sur la page */}
      <iframe 
        name="hidden_iframe" 
        id="hidden_iframe" 
        style={{ display: 'none' }} 
        onLoad={handleIframeLoad}
      />
    </>
  )
}


