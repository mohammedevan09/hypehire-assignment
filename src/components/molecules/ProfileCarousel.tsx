'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Profile } from '@/lib/types';
import ProfileCard from '../atoms/ProfileCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PaymentBubble from '../atoms/PaymentBubble';

const ProfileCarousel = ({ profiles }: { profiles: Profile[] }) => {
  const [coverflowConfig, setCoverflowConfig] = useState({
    stretch: 200,
    depth: 80,
    modifier: 2.5,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCoverflowConfig({ stretch: 200, depth: 80, modifier: 2.5 });
      } else if (width >= 768) {
        setCoverflowConfig({ stretch: 120, depth: 80, modifier: 3.5 });
      } else {
        setCoverflowConfig({ stretch: 100, depth: 80, modifier: 3.1 });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid items-start lg:mb-0 mb-5 lg:mt-0 mt-10">
      <PaymentBubble />

      <div className="relative lg:max-w-[650px] md:max-w-[550px] max-w-[350px] flex items-center justify-center mx-auto">
        <Swiper
          key={`${coverflowConfig.stretch}-${coverflowConfig.modifier}`}
          effect={'coverflow'}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: coverflowConfig.stretch,
            depth: coverflowConfig.depth,
            modifier: coverflowConfig.modifier,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper_container"
          speed={1400}
        >
          {profiles?.map((profile, i) => (
            <SwiperSlide key={i}>
              <ProfileCard profile={profile} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-controller absolute flex justify-between w-full">
          <div className="swiper-button-prev cursor-pointer">
            <ChevronLeft />
          </div>
          <div className="swiper-button-next cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCarousel;
