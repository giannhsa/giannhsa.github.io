import { motion } from 'framer-motion';
import { isMonthlyAnniversary } from '../data/relationship.js';

const hearts = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${4 + ((index * 29) % 92)}%`,
  delay: (index % 6) * 0.35,
  duration: 4.5 + (index % 4),
  size: index % 3 === 0 ? 'text-lg' : 'text-xs',
}));

function AnniversaryCelebration({ today = new Date() }) {
  if (!isMonthlyAnniversary(today)) return null;

  return (
    <motion.aside
      className="relative mx-auto mb-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-rose-200/25 bg-gradient-to-br from-rose-400/15 via-fuchsia-400/10 to-indigo-400/15 px-5 py-6 shadow-[0_20px_80px_rgba(244,114,182,0.15)] backdrop-blur-md sm:px-8 sm:py-7"
      initial={{ opacity: 0, scale: 0.94, y: -14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.7, ease: 'easeOut' }}
      aria-label="Happy anniversary"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className={`anniversary-heart absolute -bottom-6 text-rose-200/60 ${heart.size}`}
            style={{
              left: heart.left,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="relative">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-rose-100/70 sm:text-xs">
          Today is ours
        </p>
        <h2 className="mt-2 font-display text-3xl leading-tight text-rose-50 sm:text-4xl">
          Happy Anniversary, my love ♥
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-rose-50/70 sm:text-base">
          Another month of us, and another reason to celebrate every little moment together.
        </p>
      </div>
    </motion.aside>
  );
}

export default AnniversaryCelebration;
