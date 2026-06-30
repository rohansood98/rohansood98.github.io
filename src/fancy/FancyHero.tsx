import { Spotlight } from './Spotlight'
import { SplineScene } from './SplineScene'
import { profile } from '../content/profile'

export function FancyHero() {
  return (
    <section className="fancy-hero" id="top">
      <div className="wrap">
        <div className="fh-card">
          <Spotlight className="fh-spot" fill="#5b8cff" />
          <div className="fh-grid">
            <div className="fh-left">
              <span className="eyebrow">{profile.hero.eyebrow}</span>
              <h1 className="fh-title">
                Building <span className="it">agentic</span> AI systems that ship.
              </h1>
              <p className="fh-lead">{profile.hero.lead}</p>
              <div className="actions">
                <a className="btn btn-accent" href="#work">View work →</a>
                <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noopener">résumé.pdf</a>
              </div>
            </div>
            <div className="fh-right">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="fh-spline"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
