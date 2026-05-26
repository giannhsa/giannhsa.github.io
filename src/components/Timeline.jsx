import { motion } from 'framer-motion';
import MemoryCard from './MemoryCard.jsx';

function Timeline({ memories, onOpenMemory }) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
      <div className="sticky top-8 z-10 mx-auto mb-16 hidden w-fit rounded-full border border-white/10 bg-zinc-950/45 px-5 py-2 text-xs font-medium uppercase tracking-[0.32em] text-slate-300/70 shadow-blue-glow backdrop-blur-xl md:block">
        Memory timeline
      </div>

      <div className="absolute left-6 top-20 h-[calc(100%-10rem)] w-px bg-gradient-to-b from-transparent via-indigo-300/28 to-transparent md:left-1/2" />

      <div className="space-y-14 md:space-y-24">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            className={`relative grid gap-6 pl-8 md:grid-cols-2 md:gap-16 md:pl-0 ${
              index % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'
            }`}
            initial={{ opacity: 0, y: 54, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="sticky top-28 z-10 hidden h-fit justify-self-center md:block">
              <span className="block h-3 w-3 rounded-full border border-blue-200/60 bg-indigo-200 shadow-[0_0_30px_rgba(129,140,248,0.75)]" />
            </div>
            <span className="absolute left-[18px] top-8 h-3 w-3 rounded-full border border-blue-200/60 bg-indigo-200 shadow-[0_0_24px_rgba(129,140,248,0.65)] md:hidden" />
            <MemoryCard memory={memory} onOpen={() => onOpenMemory(memory)} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
