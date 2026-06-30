import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/anim'
import { profile } from '../content/profile'

const a = profile.about

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>About</h2>
        </motion.div>

        <motion.div className="about-grid" variants={stagger} {...inView}>
          <motion.p className="about-lead" variants={fadeUp}>
            I build AI that earns its place — measured by what it <em>ships</em> and what it <em>saves</em>, not by the demo.
          </motion.p>
          <motion.div variants={fadeUp}>
            <div className="about-body">
              {a.body.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
            </div>
            <div className="facts">
              {a.facts.map((f) => (
                <div className="fact" key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">{f.v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
