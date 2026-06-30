import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

export function SplineScene({ scene, className }: { scene: string; className?: string }) {
  return (
    <Suspense fallback={<div className="spline-fallback"><span className="loader" /></div>}>
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
