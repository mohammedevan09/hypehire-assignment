'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="py-4 lg:px-0 px-4 container mx-auto max-w-7xl">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={35}
            height={35}
            className="h-6"
          />
          <span className="font-bold text-lg">hyperhire</span>
        </div>

        <nav className="sm:flex hidden space-x-6">
          <a href="#" className="hover:text-gray-400 flex space-x-2">
            채용 <ChevronDown />
          </a>
          <a href="#" className="hover:text-gray-400">
            해외 개발자활용서비스
          </a>
        </nav>

        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100">
          문의하기
        </button>
      </div>
    </header>
  );
};

export default Header;
