import { AnimatePresence, motion } from 'framer-motion';
import React, { Suspense } from 'react';

 const directionPreset = {
  left: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  right: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
};

const Slider = (
  { children, direction = 'left', styleProps = {}, ...props }
) => {
  return (
    <Suspense>
      <AnimatePresence>
        <motion.div
          {...props}
          style={{ textAlign: 'center', ...styleProps }}
          variants={directionPreset[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
        >
            {children}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};

export default Slider
