export const CONTACT_EMAIL = 'contact@easy-ai-solutions.ch'

export function contactEmailUrl({ firstName, email, message }: { firstName: string; email: string; message: string }) {
  const body = ['Bonjour Laurent,', '', message.trim(), '', 'Prénom : ' + firstName.trim(), 'E-mail : ' + email.trim()].join('\r\n')
  return 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent('Projet de solution sur mesure') + '&body=' + encodeURIComponent(body)
}
