import { motion } from 'framer-motion'

export default function Card({ project, onClick, index }) {
  const delay = index * 0.06
  const suitEmoji = {
    heart: '❤',
    diamond: '♦',
    club: '♣',
    spade: '♠',
  }[project.suit] || '♠'

  return (
    <motion.button
      onClick={onClick}
      initial={{ y: 30, opacity: 0, rotate: -2 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      whileHover={{ y: -8, rotate: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative w-full text-left`}
    >
      <div className={`rounded-2xl p-5 bg-white/80 backdrop-blur shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-white/60`}>        
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden>{suitEmoji}</span>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.subtitle}</p>
            </div>
          </div>
          <span className="text-gray-300 group-hover:text-gray-400 transition-colors">{project.icon}</span>
        </div>

        <div className={`mt-4 h-1.5 rounded-full bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo}`}></div>

        <div className="mt-4 text-sm text-gray-700 line-clamp-2">
          {project.description}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((t) => (
            <span key={t} className="text-[11px] uppercase tracking-wide bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
