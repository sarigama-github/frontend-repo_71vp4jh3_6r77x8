import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Card from './components/Card'
import { projects } from './data/projects'

function App() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pt-16 pb-28">
        <section className="text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600"
          >
            A modern playing-card portfolio
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 text-slate-600 max-w-2xl mx-auto"
          >
            Showcase your work as a deck of cards. Click any card to flip into a detailed view.
          </motion.p>
        </section>

        <section id="projects" className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={p.slug} project={p} index={i} onClick={() => navigate(`/project/${p.slug}`)} />
          ))}
        </section>
      </main>

      <footer id="contact" className="border-t border-white/60 bg-white/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-10 text-center text-slate-600">
          <p className="text-sm">Built with care. Get in touch: <a href="mailto:you@example.com" className="underline decoration-dotted">you@example.com</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
