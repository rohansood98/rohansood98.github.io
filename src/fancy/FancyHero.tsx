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
          {/* "my work" = the career, so this lands on Experience — the page's first
              content section — and the reader flows on into Projects from there. */}
          <a className="btn btn-accent" href="#experience">View my work →</a>
          {/* Resume lives in the nav pill — repeating it here diluted the hero. */}
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
