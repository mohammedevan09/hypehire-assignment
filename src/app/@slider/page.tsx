import Slider from '@/components/molecules/Slider';
import { SliderData } from '@/lib/types';
import { data } from '@/lib/utils';
import React from 'react';

export const dynamic = 'force-dynamic';

const page = async () => {
  const sliderData: SliderData[] = await data('/api/sliderData');
  return <Slider sliderData={sliderData} />;
};

export default page;
