import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getNextMonthlyAnniversary, isMonthlyAnniversary } from '../data/relationship.js';

function getCountdown(now) {
  const difference = Math.max(0, getNextMonthlyAnniversary(now).getTime() - now.getTime());
  const totalSeconds = Math.floor(difference / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function AnniversaryCountdown() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (isMonthlyAnniversary(now)) return null;

  const countdown = getCountdown(now);

  return (
    <motion.section
      className="mx-auto mt-8 max-w-xl rounded-2xl border border-indigo-200/15 bg-indigo-300/[0.06] px-4 py-4 backdrop-blur-xl sm:px-6"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}
      aria-label="Countdown to our next monthly anniversary"
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-indigo-100/55 sm:text-xs">
        Until our next monthly anniversary
      </p>
      <div className="mt-3 flex items-center justify-center gap-2 text-center sm:gap-5">
        {Object.entries(countdown).map(([label, value]) => (
          <div key={label} className="min-w-[3.3rem] sm:min-w-[4rem]">
            <span className="font-display text-2xl text-indigo-50 sm:text-3xl">
              {String(value).padStart(2, '0')}
            </span>
            <span className="mt-1 block text-[0.55rem] uppercase tracking-wider text-slate-400 sm:text-[0.65rem]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default AnniversaryCountdown;
