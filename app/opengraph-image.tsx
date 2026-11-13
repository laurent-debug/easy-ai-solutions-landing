import { ImageResponse } from 'next/og'

export const alt = 'Easy AI Solutions — IA pratique et outils métier'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px', background: '#f5f7f3', color: '#1e293b', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>Easy AI Solutions</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Plus de temps pour votre métier.</div>
        <div style={{ fontSize: 30, color: '#4e6b54' }}>IA pratique · Audit · Développement · Livraison</div>
      </div>
      <div style={{ display: 'flex', fontSize: 24 }}>Laurent Cornu · Suisse romande</div>
    </div>,
    size,
  )
}
