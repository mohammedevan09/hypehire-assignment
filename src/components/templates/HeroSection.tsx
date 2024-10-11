'use client';

import Image from 'next/image';
import SpeechBubble from '../atoms/SpeechBubble';
import ProfileCarousel from '../molecules/ProfileCarousel';
import Header from '../organisms/Header';
import { motion } from 'framer-motion';
import { Profile } from '@/lib/types';

export default function HeroSection({
  profiles,
  children,
}: {
  profiles: Profile[];
  children: React.ReactNode;
}) {
  const data = [
    {
      title: '평균 월 120만원',
      desc: '임금을 해당 국가를 기준으로 계산합니다.',
    },
    {
      title: '최대 3회 인력교체',
      desc: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
    },
    {
      title: '평균 3일, 최대 10일',
      desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-cyan-500 to-blue-500 text-white mx-auto w-full 2xl:h-screen px-4 h-full">
      <Header />

      <div className="grid gap-10 mx-auto my-28 justify-center">
        <div className="container lg:flex grid max-w-7xl mx-auto justify-center">
          <article className="grid gap-10 justify-start font-extrabold">
            <SpeechBubble />
            <div className="grid lg:gap-8 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="xl:text-5xl text-4xl leading-10 grid gap-3"
              >
                <h1>최고의 실력을 가진</h1>
                <h1>외국인 인재를 찾고 계신가요?</h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="2xl:text-2xl md:text-xl text-lg leading-8 grid gap-3"
              >
                <p>법률 및 인사관리 부담없이</p>
                <p>1주일 이내에 원격으로 채용해보세요.</p>
                <p className="2xl:text-lg text-base leading-6 mb-3 lg:block hidden">
                  개발자가 필요하신가요?
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                staggerChildren: 0.5,
                delayChildren: 0.5,
              }}
              className="lg:flex hidden gap-7"
            >
              {data?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-4 w-40"
                >
                  <hr />
                  <h5 className="text-lg leading-6">{item.title}</h5>
                  <p className="text-base leading-6">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </article>
          <ProfileCarousel profiles={profiles} />
        </div>
        {children}
        <div className="lg:hidden grid grid-cols-2 gap-4 px-4">
          {['한국어 능력', '업무 수행 능력', '겸업 여부', '평판 조회']?.map(
            (item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <Image
                  src="/icon/Checkbox.png"
                  alt={item}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] object-contain"
                />
                <p className="text-base leading-6 font-extrabold">{item}</p>
              </div>
            ),
          )}
        </div>
        <p className="lg:hidden block text-base leading-6 font-extrabold text-[#FBFF23] mb-14 px-4 underline">
          개발자가 필요하신가요?
        </p>
      </div>
    </section>
  );
}
