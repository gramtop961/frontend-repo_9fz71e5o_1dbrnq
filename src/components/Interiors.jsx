import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { key: 'kitchen', title: 'Kitchen', text: 'Premium appliances, stone surfaces, and seamless cabinetry.' },
  { key: 'living', title: 'Living', text: 'Expansive open-plan living bathed in natural light.' },
  { key: 'master', title: 'Master Bedroom', text: 'A serene retreat with warm textures and generous storage.' },
  { key: 'balcony', title: 'Balcony', text: 'Private outdoor space with skyline vistas.' },
]

export default function Interiors() {
  const [index, setIndex] = useState(0)

  function next() { setIndex((i) => (i + 1) % slides.length) }
  function prev() { setIndex((i) => (i - 1 + slides.length) % slides.length) }

  return (
    <section id="interiors" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
        {/* 3D-ish carousel placeholder */}
        <div className="relative h-80 sm:h-[28rem] rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={slides[index].key}
              initial={{ opacity: 0, x: 40, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -40, rotateY: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="h-56 w-80 sm:h-72 sm:w-[28rem] rounded-2xl bg-gradient-to-br from-teal-400/20 to-emerald-500/20 border border-white/10 shadow-2xl" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4">
            <button onClick={prev} className="rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20">Prev</button>
            <button onClick={next} className="rounded-full bg-teal-500 px-4 py-2 text-white hover:bg-teal-400">Next</button>
          </div>
        </div>

        {/* Copy */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Elevated Living Inside & Out</h3>
          <p className="text-slate-300 mb-6">
            Discover premium finishes, smart-home features, and thoughtful design focused on comfort, connectivity, and abundant natural light.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="text-white font-semibold">{slides[index].title}</h4>
            <p className="text-slate-300 text-sm mt-2">{slides[index].text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
