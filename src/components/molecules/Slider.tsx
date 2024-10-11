'use client';

import { SliderData } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Slider = ({ sliderData }: { sliderData: SliderData[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="md:flex hidden gap-2 items-center justify-center my-8 overflow-hidden"
    >
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: ['0%', '-100%'],
          transition: {
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
          },
        }}
        className="flex gap-5"
      >
        {[...sliderData, ...sliderData]?.map((item, i) => (
          <div
            className="flex gap-5 w-80 bg-[#FFFFFF33] p-4 rounded-xl items-center"
            key={i}
          >
            <div className="w-14 h-14 bg-[#FFFFFF66] rounded-xl p-4 flex items-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={32}
                className="w-[28px] h-[32px] object-contain"
              />
            </div>
            <h5 className="text-2xl leading-6 font-extrabold">{item.title}</h5>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
