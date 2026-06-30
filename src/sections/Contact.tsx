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
            <a href={`mailto:${profile.email}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              Email
            </a>
            <a href={profile.socials.github} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" /></svg>
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
              LinkedIn
            </a>
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
