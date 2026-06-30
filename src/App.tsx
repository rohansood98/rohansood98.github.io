import './fancy/fancy.css'
import { useTheme } from './hooks/useTheme'
import { useMode } from './hooks/useMode'
import { Nav } from './sections/Nav'
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
  return (
    <>
      <Nav theme={theme} onToggle={toggle} mode={mode} onSetMode={set} />
      <main>
        {/* same hero in both modes — Lite just drops the 3D robot */}
        <FancyHero enable3D={mode === 'fancy'} />
        <Marquee />
        <Work />
        <Experience />
        <About />
        <Hobby />
        <Contact />
      </main>
    </>
  )
}
