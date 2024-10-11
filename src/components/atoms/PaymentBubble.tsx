'use client';

import { motion } from 'framer-motion';

const PaymentBubble = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center bg-[#E7FDF9] rounded-lg px-4 py-2 gap-2 text-[#00C696] relative mx-auto lg:-mb-8 -mb-[-12px]"
      >
        <abbr className="p-[2px] w-6 h-6 rounded-full bg-[#00c69448] items-center justify-center flex">
          $
        </abbr>
        <span className="font-bold text-sm">월 100만원</span>
        <div className="absolute left-[40%] bottom-[-9px] w-0 h-0 border-t-[14px] border-white border-x-[14px] border-x-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default PaymentBubble;
