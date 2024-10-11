'use client';

import { motion } from 'framer-motion';

const SpeechBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex items-center"
    >
      <div className="relative text-[#40E2E8] bg-white text-lg font-bold py-2 px-4 rounded-xl">
        <span>풀타임, 파트타임</span>
        <div className="absolute left-2 bottom-[-9px] w-0 h-0 border-t-[14px] border-white border-x-[14px] border-x-transparent"></div>
      </div>
    </motion.div>
  );
};

export default SpeechBubble;
