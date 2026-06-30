import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/anim'
import { profile } from '../content/profile'

const h = profile.hero

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="glow" />
      <motion.div className="wrap" variants={stagger} initial="hidden" animate="show">
        <motion.span className="eyebrow" variants={fadeUp}>{h.eyebrow}</motion.span>
        <motion.h1 variants={fadeUp}>
          {h.line1}
          <span className="ghost">{h.ghost}</span>
          <br />
          {h.line2}
        </motion.h1>
        <motion.p className="lead" variants={fadeUp}>{h.lead}</motion.p>
        <motion.div className="actions" variants={fadeUp}>
          <a className="btn btn-accent" href="#work">View work →</a>
          <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noopener">résumé.pdf</a>
          <a className="btn btn-ghost" href={`mailto:${profile.email}`}>get in touch</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
