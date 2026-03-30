'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, Download } from 'lucide-react'
import styles from './guide-gratuit.module.css'

type FormData = {
  prenom: string
  email: string
}

type FormErrors = {
  prenom?: string
  email?: string
  form?: string
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PILLS = [
  { icon: '✍️', label: 'Rédaction' },
  { icon: '💬', label: 'Automatisation' },
  { icon: '📋', label: 'Réunions' },
  { icon: '🎨', label: 'Visuels' },
  { icon: '📊', label: 'Analyse' },
]

export default function GuideGratuitPageClient() {
  const [formData, setFormData] = useState<FormData>({ prenom: '', email: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [downloadUrl, setDownloadUrl] = useState('/guide-ia-5-heures.pdf')

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
      [field]: undefined,
      form: undefined,
    }))

    if (status === 'error') {
      setStatus('idle')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setErrors({})
    setStatus('loading')

    try {
      const response = await fetch('/api/guide-gratuit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prenom: formData.prenom.trim(),
          email: formData.email.trim(),
        }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        throw new Error(
          typeof result?.error === 'string'
            ? result.error
            : "Impossible d'envoyer votre demande pour le moment."
        )
      }

      if (typeof result?.downloadUrl === 'string' && result.downloadUrl.trim()) {
        setDownloadUrl(result.downloadUrl)
      }

      setStatus('success')
    } catch (error) {
      setStatus('error')
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue pendant l'envoi du formulaire.",
      })
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
                href={downloadUrl}
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
            <form className={styles.formArea} onSubmit={handleSubmit} noValidate>
              <div className={styles.formSpacer} aria-hidden="true" />

              <label className={styles.label} htmlFor="prenom">
                Prénom
              </label>
              <input
                id="prenom"
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

              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                id="email"
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
                Pas de spam. Juste le guide PDF, directement dans ta boîte.
                <br />
                <a href="https://easy-ai-solutions.ch">easy-ai-solutions.ch</a>
              </p>
            </form>

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
