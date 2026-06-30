import { Spotlight } from './Spotlight'
import { profile } from '../content/profile'

// Text-only hero. In 3D mode the robot lives in <FancyBackground/> (fixed, behind
// everything); in Lite mode there's no robot and the hero sits on a solid dark bg.
export function FancyHero() {
  return (
    <section className="fancy-hero" id="top">
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
