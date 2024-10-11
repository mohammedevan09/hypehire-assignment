// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const footerIcons = [
    {
      icon: '/icon/icon-code.png',
      title: '해외 개발자 원격 채용',
    },
    {
      icon: '/icon/icon-avatar.png',
      title: '외국인 원격 채용 (비개발)',
    },
    {
      icon: '/icon/KOR.png',
      title: '한국어 가능 외국인 채용',
    },
    {
      icon: '/icon/icon-gear.png',
      title: '해외 개발자 활용 서비스',
    },
  ];

  const bottomFooter = [
    {
      title: '상호명',
      subtitle: '하이퍼하이어',
      address: 'Hyperhire India Private Limited',
    },
    {
      title: '대표 CEO',
      subtitle: '김주현',
      address: 'Juhyun Kim',
    },
    {
      title: '사업자등록번호 CIN',
      subtitle: '427-86-01187',
      address: 'U74110DL2016PTC290812 ',
    },
    {
      title: '주소 ADDRESS',
      subtitle: '서울특별시 강남대로 479, 지하 1층 238호 ',
      address:
        'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  ];

  return (
    <footer className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0 font-bold grid gap-3">
            <Image src="/hypehire.png" alt="Hypehire" width={180} height={34} />
            <p className="text-sm text-[#343741] mt-2">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="text-sm text-[#5E626F] mt-1">010-0000-0000</p>
            <p className="text-sm text-[#5E626F]">aaaaa@naver.com</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {footerIcons?.map((item, index) => (
              <div
                key={index}
                className="grid justify-start items-center w-[187px] h-36 gap-3 lg:p-4 p-2"
              >
                <div className="w-6 h-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <p className="text-xs text-center text-[#343741] font-extrabold leading-5">
                  {item?.title}
                </p>
                <Link
                  href={'#'}
                  className="text-[#5E626F] flex items-center gap-2"
                >
                  바로가기 <ExternalLink size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:flex lg:gap-5 gap-10 items-center justify-between my-12 font-bold text-xs">
          <div className="grid grid-cols-2 gap-5 w-full">
            {bottomFooter.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="grid justify-start items-center gap-2"
              >
                <h3 className="text-[#343741]">{item?.title}</h3>
                <p className="text-[#5E626F]">{item?.subtitle}</p>
                <p className="text-[#5E626F]">{item?.address}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-5 gap-8 w-full mt-8">
            {bottomFooter.slice(2).map((item, index) => (
              <div
                key={index}
                className="grid justify-start items-center gap-2"
              >
                <h3 className="text-[#343741]">{item?.title}</h3>
                <p className="text-[#5E626F]">{item?.subtitle}</p>
                <p className="text-[#5E626F]">{item?.address}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <p className="text-xs text-[#5E626F] font-bold">© 2023 Hyperhire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
