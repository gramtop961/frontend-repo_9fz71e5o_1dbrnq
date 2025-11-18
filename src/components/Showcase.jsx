import { motion } from 'framer-motion'

export default function Showcase() {
  const captions = [
    'Arrive home to wide boulevards & lush landscaping',
    'Private entrance foyer sets the tone',
    'Open-plan living with floor-to-ceiling glazing',
  ]

  return (
    <section className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-0 sm:px-6">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none sm:rounded-3xl border border-white/10">
          {/* Placeholder video-style gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

          {/* Simulated walkthrough using background gradients */}
          <motion.div
            className="absolute inset-0"
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: '100% 50%' }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.06), transparent 30%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.04), transparent 35%)', backgroundSize: '200% 100%' }}
          />

          {/* Captions overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 sm:p-10 space-y-2">
              {captions.map((c, i) => (
                <motion.p
                  key={c}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.6, duration: 0.6 }}
                  className="inline-block rounded-full bg-black/40 px-4 py-2 text-slate-100 backdrop-blur-md text-sm sm:text-base"
                >
                  {c}
                </motion.p>
              ))}

              <div className="pt-4">
                <a href="#interiors" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-white hover:bg-white/20 backdrop-blur-md">
                  Explore Interiors →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
