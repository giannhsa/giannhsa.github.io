import { motion } from 'framer-motion';
import { getRelationshipStats } from '../data/relationship.js';

function RelationshipStats({ memoryCount }) {
  const { months, days } = getRelationshipStats();
  const stats = [
    { value: months, label: 'months together' },
    { value: days, label: 'days of us' },
    { value: memoryCount, label: 'memories saved' },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20" aria-labelledby="our-story-stats">
      <motion.div
        className="rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-9 shadow-deep-glow backdrop-blur-2xl sm:px-8 md:py-12"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.36em] text-indigo-100/55">
          Since 2 May 2026
        </p>
        <h2 id="our-story-stats" className="mt-3 text-center font-display text-3xl text-zinc-50 sm:text-4xl">
          Our story in numbers
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-zinc-950/35 px-4 py-6 text-center">
              <strong className="block font-display text-4xl font-semibold text-indigo-100 md:text-5xl">
                {stat.value}
              </strong>
              <span className="mt-2 block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default RelationshipStats;
