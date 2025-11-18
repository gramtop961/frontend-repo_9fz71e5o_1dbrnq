import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white"
        >
          Make It Yours Today
        </motion.h3>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Secure your place in this landmark community.</p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="rounded-full bg-teal-500 px-6 py-3 text-white font-semibold hover:bg-teal-400">Book Site Visit</button>
          <button className="rounded-full bg-white/10 px-6 py-3 text-white hover:bg-white/20">Request Virtual Tour</button>
        </div>
        <div className="mt-10 text-slate-400 text-sm">Subtle particles float to create a premium ambience.</div>
      </div>
    </section>
  )
}
