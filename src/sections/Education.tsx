import { motion } from 'framer-motion'
import { fadeUp, inView } from '../lib/anim'
import { profile } from '../content/profile'

// Same timeline language as Experience, minus the logo tile.
export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>Education</h2>
        </motion.div>

        <div className="tl">
          {profile.education.map((ed) => (
            <motion.article className="tl-item" key={ed.org} variants={fadeUp} {...inView}>
              <span className="tl-node" aria-hidden />
              <div className="tl-card">
                <h3 className="tl-degree">{ed.role}</h3>
                <div className="tl-role">{ed.org}</div>
                <div className="tl-meta">{ed.when} · {ed.where}</div>
                {ed.note && <span className="tl-chip">{ed.note}</span>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
