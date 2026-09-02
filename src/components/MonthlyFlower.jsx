import { motion } from 'framer-motion';
import { getRelationshipStats } from '../data/relationship.js';

function MonthlyFlower() {
  const { months } = getRelationshipStats();
  const petalCount = Math.max(1, months);
  const petals = Array.from({ length: petalCount }, (_, index) => index);

  return (
    <section className="relative mx-auto max-w-4xl px-5 py-14 text-center md:py-24" aria-labelledby="monthly-flower-title">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-rose-100/55">Growing with us</p>
        <h2 id="monthly-flower-title" className="mt-3 font-display text-3xl text-zinc-50 sm:text-4xl">
          A petal for every month
        </h2>

        <div className="relative mx-auto mt-10 h-64 w-64" aria-label={`${months} completed months, ${petalCount} flower petals`}>
          <div className="absolute left-1/2 top-1/2 h-32 w-px origin-top bg-gradient-to-b from-emerald-300/70 to-emerald-500/10" />
          {petals.map((petal) => {
            const rotation = (360 / petalCount) * petal;
            return (
              <motion.span
                key={petal}
                className="absolute left-1/2 top-1/2 h-20 w-10 origin-[50%_100%] rounded-[70%_70%_45%_45%] border border-rose-100/25 bg-gradient-to-t from-fuchsia-400/55 to-rose-100/85 shadow-[0_0_30px_rgba(244,114,182,0.22)]"
                style={{ marginLeft: -20, marginTop: -80, rotate: rotation }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: petal * 0.1, duration: 0.65, type: 'spring' }}
              />
            );
          })}
          <motion.span
            className="absolute left-1/2 top-1/2 z-10 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-amber-200 text-xl text-rose-500 shadow-[0_0_35px_rgba(253,230,138,0.38)]"
            animate={{ boxShadow: ['0 0 25px rgba(253,230,138,.25)', '0 0 45px rgba(253,230,138,.5)', '0 0 25px rgba(253,230,138,.25)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ♥
          </motion.span>
        </div>
        <p className="text-sm text-slate-400">{months} beautiful {months === 1 ? 'month' : 'months'} in bloom</p>
      </motion.div>
    </section>
  );
}

export default MonthlyFlower;
