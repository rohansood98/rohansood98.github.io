import type { Theme } from '../hooks/useTheme'
import type { Mode } from '../hooks/useMode'
import { profile } from '../content/profile'

export function Nav({
  theme,
  onToggle,
  mode,
  onSetMode,
}: {
  theme: Theme
  onToggle: () => void
  mode: Mode
  onSetMode: (m: Mode) => void
}) {
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

          {/* version switch — segmented so it's clearly a toggle + shows current state */}
          <div className="seg" role="group" aria-label="Site version">
            <button
              className={`seg-btn${mode === 'fancy' ? ' on' : ''}`}
              onClick={() => onSetMode('fancy')}
              title="Interactive 3D version"
            >
              ◆ 3D
            </button>
            <button
              className={`seg-btn${mode === 'clean' ? ' on' : ''}`}
              onClick={() => onSetMode('clean')}
              title="Lighter, faster version"
            >
              Lite
            </button>
          </div>

          <button className="theme-btn" onClick={onToggle} aria-label="Toggle light / dark theme">
            {theme === 'dark' ? '◐ Light' : '◑ Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
