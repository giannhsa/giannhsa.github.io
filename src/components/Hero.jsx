import { motion, useScroll, useTransform } from 'framer-motion';
import TimeCounter from './TimeCounter.jsx';
import AnniversaryCelebration from './AnniversaryCelebration.jsx';
import AnniversaryCountdown from './AnniversaryCountdown.jsx';

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 86)}%`,
  top: `${10 + ((index * 29) % 74)}%`,
  size: index % 4 === 0 ? 'h-1.5 w-1.5' : 'h-1 w-1',
  delay: index * 0.18,
}));

function Hero({ anniversaryMode = false }) {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], ['0%', '16%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24 text-center">
      <motion.div className="absolute inset-0" style={{ y: heroY, opacity: heroOpacity }}>
        <div className="absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-[12%] top-[38%] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className={`absolute rounded-full bg-blue-100/80 shadow-[0_0_22px_rgba(147,197,253,0.55)] ${particle.size}`}
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.18, 0.85, 0.24], scale: [0.8, 1.25, 0.9] }}
            transition={{
              duration: 4.5 + (particle.id % 5),
              repeat: Infinity,
              delay: particle.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <AnniversaryCelebration />
        <p className={`mb-6 text-xs font-medium uppercase tracking-[0.42em] ${anniversaryMode ? 'text-rose-100/70' : 'text-indigo-200/60'}`}>
          {anniversaryMode ? 'Celebrating us' : 'Personal archive'}
        </p>
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-zinc-50 md:text-8xl">
          {anniversaryMode ? 'Another Beautiful Month Together' : 'Our Favorite Moments'}
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-300/78 md:text-xl">
          {anniversaryMode
            ? 'Today the whole page is celebrating our story, our memories, and everything still ahead.'
            : 'A quiet timeline of dates, photographs, and the small details that stayed.'}
        </p>
        <AnniversaryCountdown />
        <TimeCounter />
      </motion.div>
    </section>
  );
}

export default Hero;
