'use client'

import { type FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
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
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault()
      setErrors(nextErrors)
      return
    }

    if (formData.emailAddressCheck.trim()) {
      event.preventDefault()
      setErrors({})
      return
    }

    setErrors({})
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

            <form
              className={styles.formArea}
              onSubmit={handleSubmit}
              method="POST"
              action={BREVO_FORM_ACTION}
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="guide-subscription-help"
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
                className={styles.button}
              >
                Recevoir le guide par e-mail
                <ArrowRight aria-hidden="true" />
              </button>

              <p id="guide-subscription-help" className={styles.legal}>
                La réponse à votre inscription s’affiche dans un nouvel onglet.
                Vous pouvez aussi <a href={GUIDE_DOWNLOAD_URL} download>télécharger le guide directement <Download aria-hidden="true" className="inline h-4 w-4" /></a>.
                <br />
                <Link href="/politique-de-confidentialite">Confidentialité des données</Link>
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


        <footer className={styles.brandTag}>
          <Link href="/">easy-ai-solutions.ch</Link> ·
          Guide offert gratuitement
        </footer>
      </section>
    </main>
  )
}
