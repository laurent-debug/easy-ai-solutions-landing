export const metadata = {
  title: 'Prompteur Pop | Easy AI Solutions',
  description:
    'Prompteur web mobile pour enregistrer des videos YouTube avec defilement, segments et miroir.',
}

export default function PrompteurPage() {
  return (
    <main className="min-h-screen bg-[#101114]">
      <iframe
        title="Prompteur Pop"
        src="/prompteur/index.html"
        className="block h-screen w-screen border-0"
      />
    </main>
  )
}
