import { motion } from 'framer-motion'
import { fadeUp, stagger, inView } from '../lib/anim'
import { profile } from '../content/profile'

const ROMAN = ['i', 'ii', 'iii', 'iv', 'v', 'vi']

export function Work() {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <motion.div className="sec-head" variants={fadeUp} {...inView}>
          <h2>Selected work</h2>
          <span className="idx">{String(profile.projects.length).padStart(2, '0')} projects</span>
        </motion.div>

        <motion.div className="work-list" variants={stagger} {...inView}>
          {profile.projects.map((p, i) => {
            const Row: any = p.href ? motion.a : motion.div
            const linkProps = p.href ? { href: p.href, target: '_blank', rel: 'noopener' } : {}
            return (
              <Row className="work-row" key={p.title} variants={fadeUp} {...linkProps}>
                <span className="w-idx">{ROMAN[i]}</span>
                <div>
                  <div className="w-title">{p.title}</div>
                  <div className="w-desc">{p.desc}</div>
                  <div className="w-tags">
                    {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="w-meta">
                  <span className="w-impact">{p.impact}</span>
                  <span className="w-access">{p.access}</span>
                  {p.href && <span className="w-go">View ↗</span>}
                </div>
              </Row>
            )
          })}
        </motion.div>

        <motion.div className="more-line" variants={fadeUp} {...inView}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '28px', fontFamily: 'var(--mono)', fontSize: '13px' }}>
          <span style={{ color: 'var(--faint)' }}>More —</span>
          {profile.more.map((m) => (
            <a key={m.title} href={m.href} target="_blank" rel="noopener"
              style={{ color: 'var(--muted)' }}>
              {m.title} <span style={{ color: 'var(--faint)' }}>· {m.note}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
