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
// const SCENE = 'https://prod.spline.design/JmdRMcVJIgZyjSTv/scene.splinecode' // CRT desk robot (dead end: baked-in scroll animation deforms the desk; unfixable our side)
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

  // Spline's look-at maps pageX/pageY against the canvas's cached rect (runtime.js
  // updateRaycaster). Our canvas is position:fixed, so page coords — which include
  // scrollY — must be collapsed to viewport coords, or the gaze drifts and deforms the
  // scene as you scroll. Mirror pageX/pageY onto clientX/clientY for pointer/mouse events
  // while the 3D bg is mounted. This corrects BOTH our forwarded events and the runtime's
  // own scroll-driven pointer re-dispatch, so the scene tracks on cursor move yet doesn't
  // change on scroll. (Nothing in this app reads pageX/pageY, and it's restored on unmount.)
  useEffect(() => {
    if (!desktop) return
    const proto = MouseEvent.prototype
    const px = Object.getOwnPropertyDescriptor(proto, 'pageX')
    const py = Object.getOwnPropertyDescriptor(proto, 'pageY')
    Object.defineProperty(proto, 'pageX', { configurable: true, get() { return this.clientX } })
    Object.defineProperty(proto, 'pageY', { configurable: true, get() { return this.clientY } })
    return () => {
      if (px) Object.defineProperty(proto, 'pageX', px)
      if (py) Object.defineProperty(proto, 'pageY', py)
    }
  }, [desktop])

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
      // Only drive the gaze while the hero is on screen. The pageY override keeps the
      // scene stable through scroll, but moving the mouse while scrolled still maps the
      // look-at wrong for this scene, so we simply don't feed it the cursor down there
      // (where it's dimmed away anyway) — it holds its last hero pose.
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
