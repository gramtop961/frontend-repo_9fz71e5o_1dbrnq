import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Interiors from './components/Interiors'
import Location from './components/Location'
import Community from './components/Community'
import FloorPlans from './components/FloorPlans'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onBook={() => setBookOpen(true)} />
      <Features />
      <Showcase />
      <Interiors />
      <Location />
      <Community />
      <FloorPlans />
      <CTA />
      <Footer />

      {/* Simple booking modal */}
      {bookOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm">
          <div className="w-[90vw] max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h4 className="text-xl font-semibold">Book Your Viewing</h4>
            <p className="mt-2 text-slate-300 text-sm">Leave your details and well get in touch shortly.</p>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 placeholder:text-slate-400" placeholder="Full Name" />
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 placeholder:text-slate-400" placeholder="Email" type="email" />
              <input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 placeholder:text-slate-400" placeholder="Phone" />
              <div className="flex justify-end gap-2 pt-2">
                <button type="button" onClick={() => setBookOpen(false)} className="rounded-lg px-4 py-2 bg-white/10 hover:bg-white/20">Cancel</button>
                <button type="button" className="rounded-lg px-4 py-2 bg-teal-500 hover:bg-teal-400">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
