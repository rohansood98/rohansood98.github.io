import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/anim'
import { profile } from '../content/profile'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>Experience</h2>
          <a className="idx" href={profile.resumeUrl} target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>
            résumé.pdf ↓
          </a>
        </motion.div>

        <motion.div className="timeline" variants={stagger} {...inView}>
          {profile.experience.map((e) => (
            <motion.div className="tl-row" key={e.org + e.when} variants={fadeUp}>
              <div className="tl-when">
                <span className="mono">{e.when}</span>
                <span className="tl-where">{e.where}</span>
              </div>
              <div className="tl-body">
                <h3 className="tl-role">{e.role} <span className="tl-org">· {e.org}</span></h3>
                <p className="tl-note">{e.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="edu" variants={fadeUp} {...inView}>
          {profile.education.map((ed) => (
            <div className="edu-row" key={ed.org}>
              <span className="edu-role">{ed.role}</span>
              <span className="edu-org">{ed.org}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
