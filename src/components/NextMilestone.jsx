import { motion } from 'framer-motion';
import { ImageWithFallback } from './MemoryCard.jsx';

function NextMilestone({ milestone }) {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-20">
      <motion.article
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/55 shadow-blue-glow backdrop-blur-2xl"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/14 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-12 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px] overflow-hidden bg-zinc-900 lg:min-h-[420px]">
            <ImageWithFallback
              src={milestone.image}
              alt={`${milestone.title} preview`}
              className="h-full min-h-[280px] w-full object-cover opacity-85 transition duration-1000 hover:scale-[1.03] lg:min-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/80" />
          </div>

          <div className="relative flex flex-col justify-center p-7 md:p-10 lg:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-blue-100/60">
              {milestone.date}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-zinc-50 md:text-6xl">
              {milestone.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300/82">
              {milestone.subtitle}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400/78 md:text-base">
              {milestone.description}
            </p>

            <div className="mt-10 flex items-center gap-4" aria-hidden="true">
              <div className="relative h-px flex-1 overflow-hidden bg-white/10">
                <motion.span
                  className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blue-200/80 to-transparent"
                  animate={{ x: ['-120%', '320%'] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <motion.div
                className="grid h-12 w-12 place-items-center rounded-full border border-blue-100/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                <span className="h-2 w-2 rounded-full bg-blue-100 shadow-[0_0_22px_rgba(147,197,253,0.75)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}

export default NextMilestone;
