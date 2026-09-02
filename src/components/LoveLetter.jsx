import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function LoveLetter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-rose-100/55">One last thing</p>
      <h2 className="mt-3 font-display text-4xl text-zinc-50 sm:text-5xl">A note for you</h2>

      <button
        type="button"
        className="group relative mt-10 h-40 w-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-200"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="love-letter"
      >
        <motion.span
          className="absolute inset-0 rounded-xl border border-rose-100/20 bg-gradient-to-br from-rose-200 to-rose-300 shadow-[0_25px_70px_rgba(244,114,182,0.2)]"
          animate={{ y: open ? 16 : [0, -5, 0] }}
          transition={open ? { duration: 0.4 } : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="absolute left-0 top-0 h-0 w-0 border-l-[120px] border-r-[120px] border-t-[82px] border-l-transparent border-r-transparent border-t-rose-100"
          style={{ transformOrigin: 'top center' }}
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.55 }}
        />
        <span className="absolute inset-0 grid place-items-center pt-8 text-3xl text-rose-600">♥</span>
        <span className="sr-only">{open ? 'Close love letter' : 'Open love letter'}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.article
            id="love-letter"
            className="relative z-10 -mt-20 w-full max-w-xl rounded-2xl border border-rose-200/30 bg-[#fff8f3] px-7 py-10 text-left text-zinc-800 shadow-[0_30px_100px_rgba(244,114,182,0.25)] sm:px-12 sm:py-12"
            initial={{ opacity: 0, y: 70, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.92 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <p className="font-display text-3xl text-rose-800">My love,</p>
            <p className="mt-6 font-display text-lg leading-8 text-zinc-700 sm:text-xl">
              Every memory here is a little piece of how happy you make me. Thank you for the laughter,
              the quiet moments, and every beautiful day we keep adding to our story.
            </p>
            <p className="mt-5 font-display text-lg leading-8 text-zinc-700 sm:text-xl">
              I would choose you in every timeline. Here’s to everything still waiting for us.
            </p>
            <p className="mt-8 font-display text-2xl text-rose-700">Always yours ♥</p>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}

export default LoveLetter;
