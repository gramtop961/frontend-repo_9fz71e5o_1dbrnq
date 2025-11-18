import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-teal-500" />
              <span className="text-white font-semibold">SkyTown</span>
            </div>
            <p className="mt-4 text-slate-300 text-sm">Phone: +971 55 123 4567<br />Email: hello@skytown.ae<br />Address: Downtown, Dubai</p>
          </div>
          <div className="text-slate-400 text-sm">
            <p>Legal disclaimer: Illustrations and visuals are for representation only. Terms, Privacy, Sitemap.</p>
          </div>
          <div className="flex gap-4 justify-start md:justify-end">
            <a aria-label="Facebook" href="#" className="text-white/70 hover:text-white"><Facebook /></a>
            <a aria-label="Instagram" href="#" className="text-white/70 hover:text-white"><Instagram /></a>
            <a aria-label="Twitter" href="#" className="text-white/70 hover:text-white"><Twitter /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
