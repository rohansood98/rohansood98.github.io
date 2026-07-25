import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, inView } from '../lib/anim'
import { profile } from '../content/profile'

/** Company logo as a rounded tile. Each supplied logo carries its own background,
 *  so the tile is just a clipped, hairlined square. Falls back to the monogram if
 *  the file is missing, so a bad path degrades instead of leaving a broken image. */
function LogoTile({ src, short, org }: { src?: string; short: string; org: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return <span className="tl-logo tl-logo-mono">{short}</span>
  return (
    <img
      className="tl-logo"
      src={src}
      alt={`${org} logo`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>Experience</h2>
          <a className="sec-link" href={profile.resumeUrl} target="_blank" rel="noopener">
            Resume
          </a>
        </motion.div>

        {/* Every role is visible — each card reveals itself as it scrolls into view. */}
        <div className="tl">
          {profile.experience.map((c) => (
            <motion.article className="tl-item" key={c.org} variants={fadeUp} {...inView}>
              <span className="tl-node" aria-hidden />
              <div className="tl-card">
                <div className="tl-head">
                  <LogoTile src={c.logo} short={c.short} org={c.org} />
                  <div>
                    <h3 className="tl-org">{c.org}</h3>
                    <div className="tl-role">{c.role}</div>
                  </div>
                </div>
                <div className="tl-meta">{c.when} · {c.where}</div>
                <ul className="tl-bullets">
                  {c.bullets.map((b) => (
                    <li key={b.slice(0, 16)}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
