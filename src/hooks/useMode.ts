import { useEffect, useState } from 'react'

export type Mode = 'fancy' | 'clean'

function initial(): Mode {
  if (typeof window === 'undefined') return 'clean'
  const saved = window.localStorage.getItem('mode') as Mode | null
  if (saved) return saved
  // first visit: Lite by default on every device; 3D is opt-in via the nav toggle
  return 'clean'
}

export function useMode() {
  const [mode, setMode] = useState<Mode>(initial)
  useEffect(() => {
    window.localStorage.setItem('mode', mode)
  }, [mode])
  return { mode, set: setMode }
}
