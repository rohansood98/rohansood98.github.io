import './fancy/fancy.css'
import { useTheme } from './hooks/useTheme'
import { useMode } from './hooks/useMode'
import { Nav } from './sections/Nav'
import { FancyBackground } from './fancy/FancyBackground'
import { FancyHero } from './fancy/FancyHero'
import { Marquee } from './fancy/Marquee'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { About } from './sections/About'
import { Hobby } from './sections/Hobby'
import { Contact } from './sections/Contact'

export function App() {
  const { theme, toggle } = useTheme()
  const { mode, set } = useMode()
  const fancy = mode === 'fancy'
  return (
    <>
      {/* 3D robot fixed behind everything (desktop, 3D mode); dims on scroll */}
      {fancy && <FancyBackground />}
      <div className={fancy ? 'shell is-3d' : 'shell'}>
        <Nav theme={theme} onToggle={toggle} mode={mode} onSetMode={set} />
        <main>
          <FancyHero />
          <Marquee />
          <Work />
          <Experience />
          <About />
          <Hobby />
          <Contact />
        </main>
      </div>
    </>
  )
}
