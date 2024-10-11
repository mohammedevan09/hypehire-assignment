import { NextResponse } from 'next/server';
import { Profile } from '@/lib/types';

export async function GET() {
  const profiles: Profile[] = [
    {
      image: '/dummy.png',
      name: 'Abhishek Gupta',
      job: '마케팅',
      experience: '2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
    {
      image: '/dummy.png',
      name: 'Rohan Gupta',
      job: '마케팅',
      experience: '4y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
    {
      image: '/dummy.png',
      name: 'Vicky Gupta',
      job: '마케팅',
      experience: '5y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
  ];
  return NextResponse.json(profiles);
}
