import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Hero({ onBook }) {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-slate-900">
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />}> 
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </Suspense>

      {/* Soft gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/70" />

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
            >
              Discover Your Next Home in the Sky
            </motion.h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-100/90 max-w-2xl">
              Premium 3, 4 & 5-bed townhouses starting from AED 3.4 M
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button onClick={onBook} className="rounded-full bg-teal-500 px-6 py-3 text-white font-semibold shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition-colors">
                Book Your Viewing
              </button>
            </div>
          </motion.div>

          {/* Motif rising animation */}
          <motion.div
            initial={{ y: 80, opacity: 0, rotateX: 30 }}
            animate={{ y: 0, opacity: 0.8, rotateX: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="mt-16 h-24 w-24 rounded-xl bg-gradient-to-br from-teal-400/70 to-emerald-500/70 backdrop-blur-md border border-white/20 shadow-2xl"
            aria-hidden
          />
        </div>
      </div>
    </section>
  )
}
