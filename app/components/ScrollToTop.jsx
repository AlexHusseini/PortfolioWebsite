'use client';

import { motion } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="scroll-to-top"
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ y: -3, boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)' }}
      whileTap={{ scale: 0.95 }}
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon fontSize="medium" />
    </motion.button>
  );
} 