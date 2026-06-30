import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, inView } from '../lib/anim'
import { profile } from '../content/profile'

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

export function Experience() {
  const [active, setActive] = useState(0)
  const e = profile.experience[active]

  return (
    <section className="section" id="experience">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>Experience</h2>
          <a className="idx" href={profile.resumeUrl} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>
            résumé.pdf ↓
          </a>
        </motion.div>

        <motion.div className="xp" variants={fadeUp} {...inView}>
          {/* left: company tabs */}
          <div className="xp-tabs" role="tablist" aria-label="Companies">
            {profile.experience.map((c, i) => (
              <button
                key={c.org}
                className={`xp-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                <span className="xp-ava">{c.short}</span>
                {c.org}
              </button>
            ))}
          </div>

          {/* right: selected role */}
          <div className="xp-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>{e.role} <span className="org">@ {e.org}</span></h3>
                <div className="xp-when">{e.when}</div>
                <div className="xp-where">{e.where}</div>
                <div className="xp-bullets">
                  {e.bullets.map((b) => (
                    <div className="xp-bullet" key={b.slice(0, 16)}>
                      <Check />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} {...inView}>
          <div className="sub-h">Education</div>
          <div className="edu">
            {profile.education.map((ed) => (
              <div className="edu-row" key={ed.org}>
                <span className="edu-role">{ed.role}</span>
                <span className="edu-org">{ed.org}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
