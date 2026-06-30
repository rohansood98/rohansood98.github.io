import { motion } from 'framer-motion'
import { fadeUp, inView } from '../lib/anim'
import { profile } from '../content/profile'

const hb = profile.hobby

export function Hobby() {
  return (
    <section className="section" id="studio">
      <div className="wrap">
        <motion.a className="hobby" href={hb.href} target="_blank" rel="noopener"
          variants={fadeUp} {...inView}>
          <div>
            <div className="k">{hb.kicker}</div>
            <h3>{hb.title} ↗</h3>
            <p>{hb.body}</p>
          </div>
          <div className="serif" style={{ fontStyle: 'italic', fontSize: 'clamp(40px,7vw,72px)', color: 'var(--accent)', lineHeight: 1 }}>
            lisnara
          </div>
        </motion.a>
      </div>
    </section>
  )
}
