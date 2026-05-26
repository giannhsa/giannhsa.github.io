import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const START_DATE = new Date('2026-01-31T21:00:00');

function getElapsedTime() {
  const now = new Date();
  const diff = Math.max(0, now.getTime() - START_DATE.getTime());
  const totalSeconds = Math.floor(diff / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    hasStarted: now >= START_DATE,
  };
}

function TimeUnit({ value, label, pad = true }) {
  const displayValue = pad ? String(value).padStart(2, '0') : String(value);

  return (
    <div className="min-w-[7rem] rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-4 shadow-blue-glow backdrop-blur-2xl sm:min-w-[8rem]">
      <div className="font-display text-3xl leading-none tracking-tight text-zinc-50 md:text-4xl">
        {displayValue}
      </div>
      <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

function TimeCounter() {
  const [elapsed, setElapsed] = useState(() => getElapsedTime());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setElapsed(getElapsedTime());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <motion.div
      className="mx-auto mt-12 max-w-3xl"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
    >
      <p className="text-xs font-medium uppercase tracking-[0.34em] text-blue-100/55">
        Time since the first moment
      </p>
      <p className="mt-3 text-sm text-slate-400/85">
        Since 31 January 2026, 21:00
      </p>

      {elapsed.hasStarted ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          <TimeUnit value={elapsed.days} label="days" pad={false} />
          <TimeUnit value={elapsed.hours} label="hours" />
          <TimeUnit value={elapsed.minutes} label="minutes" />
          <TimeUnit value={elapsed.seconds} label="seconds" />
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-5 text-sm text-slate-300 shadow-blue-glow backdrop-blur-2xl">
          Not started yet
        </div>
      )}
    </motion.div>
  );
}

export default TimeCounter;
