import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Header from '../components/Header'
import { projects } from '../data/projects'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Project not found.</p>
          <Link to="/" className="text-blue-600 underline">Go back</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-white to-slate-100">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-10 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800">
          <ArrowLeft size={18}/> Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 rounded-2xl p-6 bg-white/80 backdrop-blur border border-white/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-start gap-4">
            <div className={`w-14 h-20 rounded-xl bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} shadow-inner`} />
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900">{project.title}</h1>
              <p className="text-slate-600">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-6 text-slate-700 leading-relaxed">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags?.map(t => (
              <span key={t} className="text-xs uppercase tracking-wide bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{t}</span>
            ))}
          </div>

          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ExternalLink size={16}/> Visit project
            </a>
          )}
        </motion.div>
      </main>
    </div>
  )
}
