import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/anim'
import { profile } from '../content/profile'

export function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <motion.div className="wrap" variants={stagger} {...inView}>
          <motion.span className="eyebrow" variants={fadeUp} style={{ justifyContent: 'center' }}>
            Open to AI/ML roles & collaborations
          </motion.span>
          <motion.h2 variants={fadeUp} style={{ marginTop: 20 }}>
            Let’s build<br />something <a href={`mailto:${profile.email}`}>good.</a>
          </motion.h2>
          <motion.p className="sub" variants={fadeUp}>
            The fastest way to reach me is email. I read every note.
          </motion.p>
          <motion.div className="socials" variants={fadeUp}>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.socials.github} target="_blank" rel="noopener">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          </motion.div>
        </motion.div>
      </section>

      <footer className="foot">
        <div className="wrap">
          <span>© 2026 {profile.name}</span>
          <span><a href="#top">Back to top ↑</a></span>
        </div>
      </footer>
    </>
  )
}
