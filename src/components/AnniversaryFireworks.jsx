import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const particles = Array.from({ length: 28 }, (_, index) => {
  const angle = (index / 28) * Math.PI * 2;
  const distance = 90 + (index % 5) * 24;
  return {
    id: index,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: (index % 4) * 0.035,
    color: ['#fecdd3', '#f9a8d4', '#e9d5ff', '#c7d2fe'][index % 4],
  };
});

function AnniversaryFireworks({ active }) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active || reduceMotion) return undefined;
    const todayKey = `anniversary-fireworks-${new Date().toDateString()}`;
    if (window.sessionStorage.getItem(todayKey)) return undefined;

    window.sessionStorage.setItem(todayKey, 'shown');
    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 3200);
    return () => window.clearTimeout(timeout);
  }, [active, reduceMotion]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {[30, 70].map((left, burstIndex) => (
        <div key={left} className="absolute top-[32%]" style={{ left: `${left}%` }}>
          {particles.map((particle) => (
            <motion.span
              key={`${burstIndex}-${particle.id}`}
              className="absolute text-sm drop-shadow-[0_0_8px_rgba(251,207,232,0.8)]"
              style={{ color: particle.color }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.2 }}
              animate={{ x: particle.x, y: particle.y, opacity: [0, 1, 1, 0], scale: [0.2, 1, 0.8] }}
              transition={{ duration: 1.7, delay: 0.35 + burstIndex * 0.45 + particle.delay, ease: 'easeOut' }}
            >
              {particle.id % 3 === 0 ? '♥' : '✦'}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnniversaryFireworks;
