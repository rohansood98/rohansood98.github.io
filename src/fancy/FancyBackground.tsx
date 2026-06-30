import { useEffect, useState } from 'react'
import { SplineScene } from './SplineScene'

function useDesktop() {
  const q = '(min-width: 821px)'
  const [desktop, setDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(q).matches : true,
  )
  useEffect(() => {
    const m = window.matchMedia(q)
    const onChange = () => setDesktop(m.matches)
    m.addEventListener('change', onChange)
    return () => m.removeEventListener('change', onChange)
  }, [])
  return desktop
}

/** Fixed 3D robot behind the whole page; dims (a dark overlay fades in) as you scroll
 *  past the hero, so it stays as a faint ambient presence. Desktop-only. */
export function FancyBackground() {
  const desktop = useDesktop()
  const [p, setP] = useState(0) // 0..1 scroll progress over the first ~viewport

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight || 800
      setP(Math.min(1, window.scrollY / (vh * 0.8)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!desktop) return null

  return (
    <div className="fancy-bg" aria-hidden>
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="fancy-bg-spline"
      />
      <div className="fancy-bg-grad" />
      <div className="fancy-bg-dim" style={{ opacity: 0.1 + p * 0.8 }} />
    </div>
  )
}
