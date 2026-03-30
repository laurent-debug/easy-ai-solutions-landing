'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Download } from 'lucide-react'
import styles from './guide-gratuit.module.css'

type FormData = {
  prenom: string
  email: string
  emailAddressCheck: string
}

type FormErrors = {
  prenom?: string
  email?: string
  form?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const BREVO_FORM_ACTION =
  'https://f33d21fe.sibforms.com/serve/MUIFADqWXNVpI5mf5PyuZ5p1CSRpGT8jXl70mCQzDON6DFZwEEeI-33_r_Mmd4a3Mamzyyc6Quxc41tgU6ghDAnpGm-va6xy_pdNRMn7MTqJ9XChpY8Rha-beza1onddPlmEYIqs2X2IfNe11r-0V3OKSdEt8z4wdCH41q3D1Z1GqxRxdtVakHqN-2cn7QFB8G2m_jMVBJjqxC0y'
const GUIDE_DOWNLOAD_URL = '/guide-ia-5-heures.pdf'

const PILLS = [
  { icon: '✍️', label: 'Rédaction' },
  { icon: '💬', label: 'Automatisation' },
  { icon: '📋', label: 'Réunions' },
  { icon: '🎨', label: 'Visuels' },
  { icon: '📊', label: 'Analyse' },
]

export default function GuideGratuitPageClient() {
  const [formData, setFormData] = useState<FormData>({
    prenom: '',
    email: '',
    emailAddressCheck: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const validateForm = () => {
    const nextErrors: FormErrors = {}

    if (!formData.prenom.trim()) {
      nextErrors.prenom = 'Le prénom est obligatoire.'
    }

    if (!formData.email.trim()) {
      nextErrors.email = "L'email est obligatoire."
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = "Le format de l'email semble invalide."
    }

    return nextErrors
  }

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))

    setErrors((current) => ({
      ...current,
      [field === 'prenom' || field === 'email' ? field : 'form']: undefined,
      form: undefined,
    }))

    if (status === 'error') {
      setStatus('idle')
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault()
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    if (formData.emailAddressCheck.trim()) {
      event.preventDefault()
      setErrors({})
      setStatus('success')
      return
    }

    setErrors({})
    setStatus('loading')
  }

  const handleIframeLoad = () => {
    if (status === 'loading') {
      setStatus('success')
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Guide gratuit
          </div>

          <h1 className={styles.title}>
            Gagne <span>5h par semaine</span> avec l&apos;IA
          </h1>

          <p className={styles.subtitle}>
            5 façons concrètes testées par un entrepreneur, sans jargon, sans
            formation, sans perdre de temps.
          </p>
        </header>

        <div className={styles.pills} aria-label="Contenu du guide">
          {PILLS.map((pill) => (
            <span key={pill.label} className={styles.pill}>
              <span className={styles.pillIcon} aria-hidden="true">
                {pill.icon}
              </span>
              {pill.label}
            </span>
          ))}
        </div>

        {status === 'success' ? (
          <div className={styles.success} aria-live="polite">
            <div className={styles.successIcon}>
              <Check aria-hidden="true" />
            </div>

            <h2 className={styles.successTitle}>
              C&apos;est parti, <span>{formData.prenom.trim()}</span> !
            </h2>

            <p className={styles.successText}>
              Vérifie ta boîte mail, le guide arrive dans quelques secondes.
              Pense aussi à vérifier tes spams si tu ne le vois pas.
            </p>

            <div className={styles.successActions}>
              <a
                href={GUIDE_DOWNLOAD_URL}
                download
                className={`${styles.button} ${styles.downloadButton}`}
              >
                Télécharger le guide
                <Download aria-hidden="true" />
              </a>

              <a href="https://easy-ai-solutions.ch" className={styles.successLink}>
                Découvrir Easy AI Solutions
              </a>
            </div>
          </div>
        ) : (
          <>
            <form
              className={styles.formArea}
              onSubmit={handleSubmit}
              method="POST"
              action={BREVO_FORM_ACTION}
              target="guide_gratuit_iframe"
              data-type="subscription"
              noValidate
            >
              <div className={styles.formSpacer} aria-hidden="true" />

              <label className={styles.label} htmlFor="PRENOM">
                Prénom
              </label>
              <input
                id="PRENOM"
                name="PRENOM"
                type="text"
                autoComplete="given-name"
                placeholder="Laurent"
                value={formData.prenom}
                onChange={(event) =>
                  handleFieldChange('prenom', event.currentTarget.value)
                }
                className={`${styles.input} ${
                  errors.prenom ? styles.inputError : ''
                }`}
              />
              {errors.prenom ? (
                <p className={styles.errorText} role="alert">
                  {errors.prenom}
                </p>
              ) : null}

              <label className={styles.label} htmlFor="EMAIL">
                Email
              </label>
              <input
                id="EMAIL"
                name="EMAIL"
                type="email"
                autoComplete="email"
                placeholder="laurent@monentreprise.ch"
                value={formData.email}
                onChange={(event) =>
                  handleFieldChange('email', event.currentTarget.value)
                }
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ''
                }`}
              />
              {errors.email ? (
                <p className={styles.errorText} role="alert">
                  {errors.email}
                </p>
              ) : null}

              <div className={styles.honeypotField} aria-hidden="true">
                <label htmlFor="email_address_check">Ne pas remplir ce champ</label>
                <input
                  id="email_address_check"
                  name="email_address_check"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.emailAddressCheck}
                  onChange={(event) =>
                    handleFieldChange(
                      'emailAddressCheck',
                      event.currentTarget.value
                    )
                  }
                />
              </div>

              <input type="hidden" name="locale" value="fr" />

              {errors.form ? (
                <p className={styles.formError} role="alert">
                  {errors.form}
                </p>
              ) : null}

              <button
                type="submit"
                className={`${styles.button} ${
                  status === 'loading' ? styles.buttonDisabled : ''
                }`}
                disabled={status === 'loading'}
              >
                {status === 'loading'
                  ? 'Envoi en cours...'
                  : 'Recevoir le guide gratuit'}
                <ArrowRight aria-hidden="true" />
              </button>

              <p className={styles.legal}>
                Formulaire relié directement à Brevo pour contourner les
                limitations d&apos;IP changeantes, avec protection anti-bot
                intégrée.
                <br />
                <a href="https://easy-ai-solutions.ch">easy-ai-solutions.ch</a>
              </p>
            </form>

            <iframe
              name="guide_gratuit_iframe"
              title="Soumission du formulaire guide gratuit"
              className={styles.hiddenIframe}
              onLoad={handleIframeLoad}
            />

            <div className={styles.divider}>
              <hr />
              <span>À propos de l&apos;auteur</span>
              <hr />
            </div>

            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src="/laurent-portrait.webp"
                  alt="Laurent Cornu"
                  fill
                  sizes="44px"
                  className={styles.avatarImage}
                />
              </div>

              <div className={styles.authorInfo}>
                <p>Laurent Cornu</p>
                <p>Fondateur · Easy AI Solutions</p>
              </div>
            </div>
          </>
        )}

        <footer className={styles.brandTag}>
          <a href="https://easy-ai-solutions.ch">easy-ai-solutions.ch</a> ·
          Guide offert gratuitement
        </footer>
      </section>
    </main>
  )
}
