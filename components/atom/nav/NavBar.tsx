import { EuphyLogo } from '@/assets/pngs';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { HamburgerSVG } from '@/assets';

interface NavBarProps {
  handleOnClick: () => void;
  asVA: boolean;
}

const links = [
  { index: 1, link: '/', title: 'Home' },
  { index: 2, link: '#Projects', title: 'Projects' },
  { index: 3, link: '/', title: 'About' },
];

const NavBar: React.FC<NavBarProps> = (props) => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <nav className="relative bg-modernity-accent-1 w-full mx-auto p-6 select-none">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Image
            alt="Euphy's Corner Logo"
            className="w-auto max-h-10 hover:scale-120 hover:animate-bounce md:max-h-16"
            src={EuphyLogo}
          />
        </div>

        <div className="hidden md:flex space-x-12 ">
          {links.map((link) => (
            <a
              key={link.index}
              id={link.title}
              href={link.link}
              className="hover:text-modernity-primary-3 font-semibold hover:font-bold"
            >
              {link.title}
            </a>
          ))}
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={props.handleOnClick}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div
            className="w-10 h-5 bg-gray-200 
          peer-focus:outline-none 
          ring-2 ring-modernity-primary-2
           rounded-full peer 
            peer-checked:after:translate-x-full
            peer-checked:after:border-white after:content-[''] 
            after:absolute after:top-[-1] after:left-[4px] after:bg-white 
             after:border after:rounded-full after:h-4 
            after:w-3.5 after:transition-all 
            peer-checked:bg-modernity-primary-3"
          ></div>
          <span className="ml-3 text-sm text-modernity-accent-2 dark:text-gray-300 font-semibold hover:text-modernity-primary-3">
            As a Virtual Assistant
          </span>
        </label>
        <a
          href={
            props.asVA
              ? 'mailto:programmer.amilissa@gmail.com'
              : 'mailto:va.amilissa@gmail.com'
          }
          className="hidden md:block rounded-2xl h-12 bg-modernity-primary-3 p-3 px-5 pt-2 baseline text-modernity-accent-1 font-semibold hover:scale-110 transition-transform hover:text-modernity-accent-2 hover:bg-modernity-primary-2"
        >
          {props.asVA
            ? 'va.amilissa@gmail.com'
            : 'programmer.amilissa@gmail.com'}
        </a>

        <button
          id="menu-btn"
          className="block h-9 w-9 hamburger md:hidden  focus:outline-none"
          onClick={() => setShowMobileNav(!showMobileNav)}
        >
          <HamburgerSVG />
        </button>
      </div>

      <div className="md:hidden">
        {showMobileNav && (
          <div
            id="menu"
            className="flex flex-col items-center self-end py-4 space-y-6 bg-modernity-accent-1"
          >
            {links.map((link) => (
              <a
                key={link.index}
                href={link.link}
                className="hover:text-modernity-primary-3 hover:font-semibold"
              >
                {link.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export { NavBar };
