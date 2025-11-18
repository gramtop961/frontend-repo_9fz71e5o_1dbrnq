import { motion } from 'framer-motion'
import { Building2, MapPin, Users, PanelsTopLeft } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Spacious Townhouses',
    desc: 'Thoughtfully planned layouts with expansive living areas and seamless indoor-outdoor flow.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Perfectly connected to key city hubs with effortless access to roads and transit.',
  },
  {
    icon: Users,
    title: 'Family-Friendly Community',
    desc: 'Parks, play areas, and social spaces designed for togetherness and wellbeing.',
  },
  {
    icon: PanelsTopLeft,
    title: 'Modern Design & Finishes',
    desc: 'Premium materials, refined details, and smart-home readiness throughout.',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose Us</h2>
          <p className="mt-3 text-slate-300">Interactive highlights that set our community apart.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-sm hover:border-teal-400/40"
            >
              <div className="relative h-20 mb-6">
                <div className="absolute inset-0 rounded-xl bg-teal-400/10 group-hover:bg-teal-400/20 transition-colors" />
                <f.icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-teal-300 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
