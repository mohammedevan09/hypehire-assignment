import { NextResponse } from 'next/server';
import { SliderData } from '@/lib/types';

export async function GET() {
  const sliderData: SliderData[] = [
    {
      icon: '/icon/icon-marketing.png',
      title: '해외 마케팅',
    },
    {
      icon: '/icon/icon-image.png',
      title: '퍼블리셔',
    },
    {
      icon: '/icon/icon-box.png',
      title: '캐드원(제도사)',
    },
    {
      icon: '/icon/icon-target.png',
      title: '해외 세일즈',
    },
    {
      icon: '/icon/icon-call.png',
      title: '해외 CS',
    },
  ];

  return NextResponse.json(sliderData);
}
