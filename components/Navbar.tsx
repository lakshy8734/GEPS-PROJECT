"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import logo from "@/public/logo.svg";
import Link from "next/link";
import { BsDiscord, BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/#about-us" },
    { title: "Whitepaper", path: "/whitepaper" },
    { title: "Roadmap", path: "/#roadmap" },
    { title: "FAQs", path: "/faqs" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const handOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn") && !target.closest(".modal-content")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handOutsideClick);

    return () => {
      document.removeEventListener("click", handOutsideClick);
    };
  }, []);

  if (pathname.startsWith("/whitepaper")) return null;

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <Link href="/">
        <Image
          src={logo}
          className="rounded-full"
          width={50}
          height={50}
          alt="Green Energy Power Station"
        />
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );

  type NavigationItem = {
    title: string;
    path: string;
  };

  interface MobileModalProps {
    isOpen: boolean;
    onClose: () => void;
    navigation: NavigationItem[];
  }

  const MobileModal: React.FC<MobileModalProps> = ({
    isOpen,
    onClose,
    navigation,
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="w-11/12 max-w-md relative">
          <div className="absolute inset-0 blur-xl header-bg"></div>
          <div className="relative bg-transparent rounded-xl p-6 text-white/90 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            <button
              onClick={onClose}
              className="float-right text-white/90 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <ul className="space-y-4 mt-8">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-white/70 hover:text-white">
                  <Link href={item.path} className="block" onClick={onClose}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col space-y-4">
              <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openConnectModal,
                  openChainModal,
                  openAccountModal,
                  mounted,
                }) => {
                  return (
                    <div
                      {...(!mounted && {
                        "aria-hidden": "true",
                        style: {
                          opacity: 0,
                          pointerEvents: "none",
                          userSelect: "none",
                        },
                      })}
                    >
                      {!mounted || !account || !chain ? (
                        <button
                          className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
                          onClick={openConnectModal}
                        >
                          Connect Wallet
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
                        </button>
                      ) : chain.unsupported ? (
                        <button
                          onClick={openChainModal}
                          className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
                          type="button"
                        >
                          Wrong network
                        </button>
                      ) : (
                        <div className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full">
                          <button
                            onClick={openChainModal}
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                            type="button"
                          >
                            {/* {chain.name} */}
                          </button>
                          <button onClick={openAccountModal} type="button">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ""}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }}
              </ConnectButton.Custom>

              <div className="flex justify-center space-x-4">
                <Link
                  href="https://x.com/gepstoken"
                  className="text-white/70 hover:text-white"
                >
                  <BsTwitterX size={20} />
                </Link>
                <Link
                  href="https://discord.com/invite/xg9uDTd6"
                  className="text-white/70 hover:text-white"
                >
                  <BsDiscord size={20} />
                </Link>
                <Link
                  href="https://t.me/gepstoken"
                  className="text-white/70 hover:text-white"
                >
                  <BiLogoTelegram size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 blur-xl h-[580px] header-bg"></div>
      <div className="relative">
        <header>
          <div className={`md:hidden mx-2 pb-5`}>
            <Brand />
          </div>
          <nav className="hidden md:block pb-5 md:text-sm md:relative md:bg-transparent">
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={`
                  flex-1 text-white/90 items-center mt-8 md:mt-0 md:flex block
                  ${menuOpen ? "block" : "hidden md:block"} 
                `}
              >
                <ul className="mx-auto flex justify-center items-center space-y-6  md:space-x-6 md:space-y-0 rounded-full dark:bg-zinc-800/10  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  dark:text-zinc-200 dark:ring-white/10 w-fit ">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx} className="text-white/70 hover:text-white">
                        <Link href={item.path} className="block">
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 md:mt-0 flex flex-row gap-x-4">
                  <a
                    href="https://x.com/gepstoken"
                    className="flex items-center gap-x-1 py-2 px-2 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
                  >
                    <BsTwitterX size={20} />
                  </a>
                  <a
                    href="https://discord.com/invite/xg9uDTd6"
                    className="flex items-center gap-x-1 py-2 px-2 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
                  >
                    <BsDiscord size={20} />
                  </a>
                  <a
                    href="https://t.me/gepstoken"
                    className="flex items-center gap-x-1 py-2 px-2 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
                  >
                    <BiLogoTelegram size={20} />
                  </a>
                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openConnectModal,
                      openChainModal,
                      openAccountModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            "aria-hidden": "true",
                            style: {
                              opacity: 0,
                              pointerEvents: "none",
                              userSelect: "none",
                            },
                          })}
                        >
                          {!mounted || !account || !chain ? (
                            <button
                              className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
                              onClick={openConnectModal}
                            >
                              Connect Wallet
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
                            </button>
                          ) : chain.unsupported ? (
                            <button
                              onClick={openChainModal}
                              className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full"
                              type="button"
                            >
                              Wrong network
                            </button>
                          ) : (
                            <div className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full">
                              <button
                                onClick={openChainModal}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                type="button"
                              >
                                {/* {chain.name} */}
                              </button>
                              <button onClick={openAccountModal} type="button">
                                {account.displayName}
                                {account.displayBalance
                                  ? ` (${account.displayBalance})`
                                  : ""}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <MobileModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigation={navigation}
      />
    </div>
  );
}
