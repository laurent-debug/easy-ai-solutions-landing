import { NextResponse } from 'next/server'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null)

    const prenom =
      typeof body?.prenom === 'string' ? body.prenom.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''

    if (!prenom) {
      return NextResponse.json(
        { error: 'Le prénom est obligatoire.' },
        { status: 400 }
      )
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Le format de l'email est invalide." },
        { status: 400 }
      )
    }

    const apiKey = process.env.BREVO_API_KEY?.trim()
    const listId = Number(process.env.BREVO_GUIDE_LIST_ID)

    if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
      return NextResponse.json(
        {
          error:
            "Le formulaire n'est pas encore configuré côté serveur. Ajoutez BREVO_API_KEY et BREVO_GUIDE_LIST_ID.",
        },
        { status: 500 }
      )
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          PRENOM: prenom,
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    const brevoPayload = await brevoResponse.json().catch(() => null)

    if (!brevoResponse.ok) {
      return NextResponse.json(
        {
          error:
            typeof brevoPayload?.message === 'string'
              ? brevoPayload.message
              : "Impossible d'enregistrer votre demande pour le moment.",
        },
        { status: brevoResponse.status || 502 }
      )
    }

    return NextResponse.json({
      success: true,
      downloadUrl:
        process.env.BREVO_GUIDE_DOWNLOAD_URL?.trim() ||
        '/guide-ia-5-heures.pdf',
    })
  } catch (error) {
    console.error('Guide gratuit submission error:', error)

    return NextResponse.json(
      {
        error:
          "Une erreur est survenue pendant l'envoi. Merci de réessayer dans un instant.",
      },
      { status: 500 }
    )
  }
}
