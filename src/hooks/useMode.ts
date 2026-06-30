import { useEffect, useState } from 'react'

export type Mode = 'fancy' | 'clean'

function initial(): Mode {
  if (typeof window === 'undefined') return 'fancy'
  const saved = window.localStorage.getItem('mode') as Mode | null
  if (saved) return saved
  // first visit: 3D on desktop, Lite on phones
  return window.matchMedia('(min-width: 821px)').matches ? 'fancy' : 'clean'
}

export function useMode() {
  const [mode, setMode] = useState<Mode>(initial)
  useEffect(() => {
    window.localStorage.setItem('mode', mode)
  }, [mode])
  return { mode, set: setMode }
}
