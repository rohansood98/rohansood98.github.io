import type { Theme } from '../hooks/useTheme'
import { profile } from '../content/profile'

export function Nav({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top">Rohan Sood<span className="dot">.</span></a>
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href={profile.socials.github} target="_blank" rel="noopener">GitHub</a>
          <a href="#contact">Contact</a>
          <button className="theme-btn" onClick={onToggle} aria-label="Toggle theme">
            {theme === 'dark' ? '◐ Light' : '◑ Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
