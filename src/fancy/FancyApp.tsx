import './fancy.css'
import { useTheme } from '../hooks/useTheme'
import { Nav } from '../sections/Nav'
import { FancyHero } from './FancyHero'
import { Marquee } from './Marquee'
import { Work } from '../sections/Work'
import { Experience } from '../sections/Experience'
import { About } from '../sections/About'
import { Hobby } from '../sections/Hobby'
import { Contact } from '../sections/Contact'

export function FancyApp() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <FancyHero />
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
