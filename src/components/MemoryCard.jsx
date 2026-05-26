import { useState } from 'react';
import { motion } from 'framer-motion';

function ImageWithFallback({ src, alt, className, variant = 'photo' }) {
  const [failed, setFailed] = useState(false);
  const gradient =
    variant === 'space'
      ? 'from-slate-950 via-indigo-950 to-purple-950'
      : 'from-zinc-900 via-slate-900 to-indigo-950';

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      >
        <div className="absolute inset-0 opacity-40 stars" />
        <span className="relative px-5 text-center text-sm font-medium tracking-wide text-slate-300/80">
          Image placeholder
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function MemoryCard({ memory, onOpen }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="grid gap-0 lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-[300px] overflow-hidden bg-zinc-900">
          <ImageWithFallback
            src={memory.photo}
            alt={`${memory.title} personal memory`}
            className="h-full min-h-[300px] w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/18 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.36em] text-blue-100/70">
              {memory.date}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-zinc-50 md:text-4xl">
              {memory.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7 p-6 md:p-8">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/45">
            <ImageWithFallback
              src={memory.spaceImage}
              alt={`Space image for ${memory.date}`}
              className="h-40 w-full object-cover opacity-90 transition duration-700 group-hover:opacity-100"
              variant="space"
            />
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-200/82">{memory.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400/78">
              {memory.modalText}
            </p>
          </div>

          <motion.button
            type="button"
            onClick={onOpen}
            className="w-fit rounded-full border border-white/12 bg-white/[0.065] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-200/35 hover:bg-blue-100/10 focus:outline-none focus:ring-2 focus:ring-blue-200/45"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
          >
            Open memory
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

export { ImageWithFallback };
export default MemoryCard;
