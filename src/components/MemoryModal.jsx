import { motion } from 'framer-motion';
import { ImageWithFallback } from './MemoryCard.jsx';

function MemoryModal({ memory, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/78 px-4 py-6 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={memory.title}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-3xl border border-white/10 bg-zinc-950/90 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.65)] md:p-5"
        initial={{ opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-zinc-950/55 text-xl text-slate-100 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-200/45"
        >
          x
        </button>

        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.75fr]">
          <div className="overflow-hidden rounded-[1.35rem] bg-zinc-900">
            <ImageWithFallback
              src={memory.photo}
              alt={`${memory.title} large view`}
              className="h-[62vh] min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-6 px-2 py-3 md:p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-blue-100/60">
                {memory.date}
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight text-zinc-50 md:text-5xl">
                {memory.title}
              </h2>
              <p className="mt-6 text-lg leading-9 text-slate-300/85">
                {memory.modalText}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <ImageWithFallback
                src={memory.spaceImage}
                alt={`Space image for ${memory.date}`}
                className="h-44 w-full object-cover"
                variant="space"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MemoryModal;
