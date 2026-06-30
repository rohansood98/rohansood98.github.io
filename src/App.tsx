import { useTheme } from './hooks/useTheme'
import { Nav } from './sections/Nav'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'
import { Experience } from './sections/Experience'
import { About } from './sections/About'
import { Hobby } from './sections/Hobby'
import { Contact } from './sections/Contact'

export function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Nav theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Hobby />
        <Contact />
      </main>
    </>
  )
}
