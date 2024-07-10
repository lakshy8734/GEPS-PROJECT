'use client'

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaQuoteLeft } from "react-icons/fa"
import { MdOutlineNewspaper, MdPeopleAlt, MdOutlinePermContactCalendar } from "react-icons/md"
import { FaRoute } from "react-icons/fa6"
import logo from '@/public/logo.svg';

const Sidebar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { title: "Home", path: "/#", icon: <FaHome/> },
    { title: "Whitepaper", path: "/whitepaper", icon: <MdOutlineNewspaper/> },
    { title: "About Us", path: "/#about-us", icon: <MdPeopleAlt/> },
    { title: "Roadmap", path: "/#roadmap", icon: <FaRoute/> },
    { title: "FAQs", path: "/faqs", icon: <FaQuoteLeft/> },
    { title: "Contact Us", path: "/contact-us", icon: <MdOutlinePermContactCalendar/> },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] header-bg"></div>
      <div
        id="application-sidebar"
        className={`fixed top-0 start-0 bottom-0 z-[60] w-16 md:w-20 lg:w-64 bg-transparent overflow-y-auto transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900/10 dark:backdrop-blur`}
      >
        <nav className="hs-accordion-group size-full flex flex-col" data-hs-accordion-always-open="">
          <div className="flex items-center justify-between pt-4 pe-4 ps-4 md:ps-7">
            <Link href="/">
              <Image
                src={logo}
                className="rounded-full"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
            <button
              className="md:hidden text-white hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="h-full">
            <ul className="space-y-1.5 p-4">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className={`flex items-center gap-x-3 py-2 px-3 text-sm rounded-lg ${
                      pathname.startsWith(item.path)
                        ? 'bg-white/10 text-white'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="hidden lg:inline">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="p-4 border-t border-white/10">
              <Link
                href="/"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
              >
                <span className="hidden lg:inline">Connect Wallet</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;