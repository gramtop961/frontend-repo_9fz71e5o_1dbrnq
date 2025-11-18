import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

export default function Location() {
  const items = [
    { label: '12 minutes to Airport' },
    { label: '15 minutes to Business District' },
    { label: '8 minutes to Top Schools & Retail' },
  ]
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Map placeholder with animated pin */}
          <div className="relative h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ y: -10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="relative">
                <MapPin className="h-10 w-10 text-teal-400" />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400"
                  animate={{ scale: [1, 2.2, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">In the Heart of It All</h3>
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.label} className="flex items-center gap-3 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-teal-400" />
                  {it.label}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-400 text-sm">Map zooms and highlighted routes animate as you scroll.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
