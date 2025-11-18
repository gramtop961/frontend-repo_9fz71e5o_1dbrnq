import { motion } from 'framer-motion'

const scenes = [
  { title: 'Playground Time', quote: 'Family moments made easy.' },
  { title: 'Yoga by the Pool', quote: 'Wellness woven into daily life.' },
  { title: 'BBQ Terrace', quote: 'Gather, grill, and connect.' },
  { title: 'Sunset Jog', quote: 'Your track, your pace.' },
]

export default function Community() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">A Lifestyle That Matters</h3>
          <p className="text-slate-300">Everyday pleasures, right at home.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenes.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative h-52 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(20,184,166,0.2), transparent 40%), radial-gradient(circle at 70% 60%, rgba(16,185,129,0.15), transparent 45%)', backgroundSize: '200% 100%' }}
              />
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <h4 className="text-white font-semibold">{s.title}</h4>
                <p className="text-slate-200 text-sm">“{s.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center text-slate-300 text-sm">“Living here feels like resort life – every day.” — Resident</div>
      </div>
    </section>
  )
}
