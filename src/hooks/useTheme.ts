import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

function initial(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const saved = window.localStorage.getItem('theme') as Theme | null
  return saved ?? 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initial)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}
