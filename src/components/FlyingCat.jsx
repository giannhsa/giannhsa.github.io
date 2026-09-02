import { motion, useReducedMotion } from 'framer-motion';

function FlyingCat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-30 w-28 select-none sm:w-36 md:w-44"
      initial={reduceMotion ? { opacity: 0 } : { x: '-28vw', y: '18vh', opacity: 0 }}
      animate={
        reduceMotion
          ? { x: 'calc(100vw - 8rem)', y: 'calc(100vh - 8rem)', opacity: 0.72 }
          : {
              x: ['-28vw', '18vw', '52vw', '112vw'],
              y: ['18vh', '8vh', '48vh', '22vh'],
              rotate: [-4, 4, -3, 2],
              opacity: [0, 1, 1, 0],
            }
      }
      transition={
        reduceMotion
          ? { duration: 0.5 }
          : { duration: 19, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut', times: [0, 0.32, 0.68, 1] }
      }
      aria-hidden="true"
    >
      <span className="flying-cat-heart absolute left-1/4 top-1/2 text-sm text-rose-300">♥</span>
      <span className="flying-cat-heart absolute left-0 top-2/3 text-xs text-rose-200 [animation-delay:.55s]">♥</span>
      <img
        src="/mascots/flying-orange-cat.png"
        alt=""
        className="relative h-auto w-full drop-shadow-[0_10px_20px_rgba(251,146,60,0.22)]"
        draggable="false"
      />
    </motion.div>
  );
}

export default FlyingCat;
