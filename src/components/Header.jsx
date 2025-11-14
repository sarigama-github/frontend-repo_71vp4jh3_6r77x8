import { Link, NavLink } from 'react-router-dom'
import { Menu, Github, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/40 border-b border-white/50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-black tracking-tight text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">Your Name</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <NavLink to="/" className={({isActive}) => `${isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Home
          </NavLink>
          <a href="#projects" className="text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-white/60">
            <Github size={16}/> <span>GitHub</span>
          </a>
        </nav>
        <button className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
