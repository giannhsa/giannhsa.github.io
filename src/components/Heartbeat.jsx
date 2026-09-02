import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const burstHearts = Array.from({ length: 10 }, (_, index) => {
  const angle = (index / 10) * Math.PI * 2;
  return { id: index, x: Math.cos(angle) * 65, y: Math.sin(angle) * 65 };
});

function Heartbeat() {
  const [burst, setBurst] = useState(0);

  return (
    <div className="relative mt-8 flex flex-col items-center">
      <button
        type="button"
        className="group relative grid h-20 w-20 place-items-center rounded-full border border-rose-200/20 bg-rose-300/10 text-4xl text-rose-300 shadow-[0_0_45px_rgba(244,114,182,0.16)] transition hover:border-rose-200/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
        onClick={() => setBurst((value) => value + 1)}
        aria-label="Send some love"
      >
        <motion.span
          animate={{ scale: [1, 1.16, 1, 1.1, 1] }}
          transition={{ duration: 1.35, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          ♥
        </motion.span>
        <AnimatePresence>
          {burst > 0 && (
            <motion.span key={burst} className="pointer-events-none absolute inset-1/2" aria-hidden="true">
              {burstHearts.map((heart) => (
                <motion.i
                  key={heart.id}
                  className="absolute not-italic text-sm text-rose-200"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0.5 }}
                  animate={{ x: heart.x, y: heart.y, opacity: 0, scale: 1.25 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  ♥
                </motion.i>
              ))}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <p className="mt-3 text-xs tracking-wide text-rose-100/50">Tap to send some love</p>
    </div>
  );
}

export default Heartbeat;
