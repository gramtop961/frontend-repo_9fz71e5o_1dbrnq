import { useState } from 'react'
import { motion } from 'framer-motion'

const units = [
  { id: '3-bed', label: '3-Bed', price: 'AED 3.4 M' },
  { id: '4-bed', label: '4-Bed', price: 'AED 4.6 M' },
  { id: '5-bed', label: '5-Bed', price: 'AED 5.9 M' },
]

export default function FloorPlans() {
  const [active, setActive] = useState(units[0].id)

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">Find Your Perfect Home</h3>
        <p className="text-slate-300 mb-8">Interactive 3D floor plan viewer with unit highlights.</p>

        <div className="flex gap-3 mb-6">
          {units.map((u) => (
            <button key={u.id} onClick={() => setActive(u.id)} className={`rounded-full px-4 py-2 text-sm border ${active === u.id ? 'bg-teal-500 text-white border-teal-400' : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}`}>
              {u.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          {/* 3D placeholder */}
          <motion.div
            className="relative h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden"
            key={active}
            initial={{ rotateY: -10, opacity: 0, scale: 0.98 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-56 w-56 rounded-xl border border-teal-400/40 bg-teal-400/10" />
            </div>
          </motion.div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-slate-200"><span className="font-semibold">Starting from</span> {units.find(u => u.id === active)?.price}</p>
              <p className="mt-2 text-slate-400 text-xs">All prices subject to change. Terms & conditions apply.</p>
              <div className="mt-6 flex gap-3">
                <button className="rounded-full bg-teal-500 px-5 py-2 text-white hover:bg-teal-400">Download Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
