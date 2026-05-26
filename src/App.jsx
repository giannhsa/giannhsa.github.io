import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Hero from './components/Hero.jsx';
import Timeline from './components/Timeline.jsx';
import MemoryModal from './components/MemoryModal.jsx';
import NextMilestone from './components/NextMilestone.jsx';
import { memories, nextMilestone } from './data/memories.js';

function App() {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const { scrollYProgress } = useScroll();
  const ambientY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      <motion.div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(79,70,229,0.35),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(37,99,235,0.18),transparent_26%),radial-gradient(circle_at_20%_78%,rgba(88,28,135,0.26),transparent_30%),linear-gradient(180deg,#050507_0%,#09090f_48%,#030306_100%)]"
        style={{ y: ambientY }}
      />
      <div className="pointer-events-none fixed inset-0 stars opacity-60" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent" />

      <div className="relative z-10">
        <Hero />
        <Timeline memories={memories} onOpenMemory={setSelectedMemory} />
        <NextMilestone milestone={nextMilestone} />

        <section className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.42em] text-indigo-200/55">
              For what comes next
            </p>
            <h2 className="font-display text-4xl tracking-tight text-zinc-100 md:text-6xl">
              Still collecting moments.
            </h2>
          </motion.div>
        </section>
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
