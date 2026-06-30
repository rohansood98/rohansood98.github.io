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

// 3D scene behind the page. Swap by changing which line is active — alternatives are
// kept (commented) so we can revert without re-hunting the URLs.
const SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode' // original floating robot
// const SCENE = 'https://prod.spline.design/JmdRMcVJIgZyjSTv/scene.splinecode' // CRT desk robot (abandoned: neck breaks on look-at + legs clip into page)
// const SCENE = 'https://prod.spline.design/0sjYln8btNIBVo5P/scene.splinecode' // boxes hover (abstract grid)

/** Fixed 3D scene behind the whole page; dims (a dark overlay fades in) as you scroll
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

  // The canvas is pointer-transparent (so it never blocks scroll/clicks), so it can't
  // receive mouse events itself. Forward the real cursor position to it as a synthetic
  // pointer/mouse move so the scene still tracks the cursor. rAF-throttled; we ignore
  // our own (untrusted) synthetic events so this can't loop.
  useEffect(() => {
    if (!desktop) return
    let raf = 0
    let cx = 0
    let cy = 0
    const flush = () => {
      raf = 0
      const canvas = document.querySelector<HTMLCanvasElement>('.fancy-bg canvas')
      if (!canvas) return
      const init = { clientX: cx, clientY: cy, bubbles: false }
      canvas.dispatchEvent(new PointerEvent('pointermove', { ...init, pointerType: 'mouse' }))
      canvas.dispatchEvent(new MouseEvent('mousemove', init))
    }
    const onMove = (e: MouseEvent) => {
      if (!e.isTrusted) return
      // Only drive the robot while the hero is on screen. Forwarding the cursor while
      // scrolled feeds the scene's viewport-relative look-at a position that no longer
      // matches what's visible, which cranes the head up and won't self-correct (only
      // scrolling back up does). Below the hero the scene is dimmed away anyway.
      const vh = window.innerHeight || 800
      if (window.scrollY > vh * 0.85) return
      cx = e.clientX
      cy = e.clientY
      if (!raf) raf = requestAnimationFrame(flush)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [desktop])

  if (!desktop) return null

  return (
    <div className="fancy-bg" aria-hidden>
      <SplineScene scene={SCENE} className="fancy-bg-spline" />
      <div className="fancy-bg-grad" />
      <div className="fancy-bg-dim" style={{ opacity: 0.1 + p * 0.8 }} />
    </div>
  )
}
