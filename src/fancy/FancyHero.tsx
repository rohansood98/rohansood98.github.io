import { useEffect, useState } from 'react'
import { Spotlight } from './Spotlight'
import { SplineScene } from './SplineScene'
import { profile } from '../content/profile'

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

export function FancyHero({ enable3D }: { enable3D: boolean }) {
  const desktop = useDesktop()
  const show3D = enable3D && desktop
  return (
    <section className="fancy-hero" id="top">
      {/* 3D only when enabled (3D mode) AND on desktop — phones never load the heavy scene */}
      {show3D && (
        <>
          <div className="fh-spline-wrap">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="fh-spline"
            />
          </div>
          <div className="fh-scrim" />
        </>
      )}
      <Spotlight className="fh-spot" fill="#5b8cff" />

      <div className="wrap fh-content">
        <span className="eyebrow">{profile.hero.eyebrow}</span>
        <h1 className="fh-title">
          Building <span className="it">agentic</span> AI systems that ship.
        </h1>
        <p className="fh-lead">{profile.hero.lead}</p>
        <div className="fh-actions">
          <a className="btn btn-accent" href="#work">View work →</a>
          <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noopener">résumé.pdf</a>
        </div>
      </div>
    </section>
  )
}
