import { motion, AnimatePresence } from 'framer-motion';

const FadeInOutEffect = ({ children }) => (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
export default FadeInOutEffect;  