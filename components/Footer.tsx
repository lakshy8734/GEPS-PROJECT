'use client'

import { Section, Container } from '@/components/craft'
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Balancer from "react-wrap-balancer";
import { BsDiscord, BsTwitterX } from 'react-icons/bs';
import { BiLogoTelegram } from 'react-icons/bi';
import { usePathname } from 'next/navigation';

export default function Footer() {

  const footerLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/#about-us" },
    { title: "Roadmap", path: "/#roadmap" },
    { title: "Tokenomics", path: "/#tokenomics" },
    { title: "Whitepaper", path: "/whitepaper" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Cookie Policy", path: "/cookie-policy" },
  ];

  const pathname = usePathname();

  if(pathname.startsWith('/whitepaper')) {
    return (
      <footer className="relative mt-11">
        <div className="absolute inset-0 blur-xl h-[100px] header-bg"></div>
        <div className="relative">
          <Section className="px-4 md:px-6">
            <div className="text-white/90 ml-0 md:ml-20 lg:ml-64 max-w-5xl p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-8 lg:gap-16">
                <div className="flex flex-col gap-6 not-prose">
                  <Link href="/">
                    <h3 className="sr-only">GEPS Token</h3>
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={50}
                      height={50}
                      className="rounded-full hover:opacity-75 transition-all"
                    />
                  </Link>
                  <p>
                    <Balancer>
                      GEPS: Green Energy Power Station
                      <br/>Revolutionizing Green Energy & Sustainability
                    </Balancer>
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:mr-8">
                  <h5 className="font-medium">Links</h5>
                  {footerLinks.map((link, idx) => (
                    <Link key={idx} href={link.path} className="text-white/70 hover:text-white">
                      {link.title}
                    </Link>
                  ))}
                </div>
                <div className="hidden flex-col gap-2">
                  <h5 className="font-medium">Legal</h5>
                  {legalLinks.map((link, idx) => (
                    <Link key={idx} href={link.path} className="text-white/70 hover:text-white">
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-2 pt-8 border-t border-white/10 not-prose flex flex-col sm:flex-row sm:gap-2 gap-6 justify-between sm:items-center text-white/90 ml-0 md:ml-20 lg:mx-64 max-w-5xl p-6 sm:p-8">
              <div className="flex gap-6">
                <a href='https://x.com/gepstoken' className="text-white/70 hover:text-white">
                  <BsTwitterX size={20}/>
                </a>
                <a href='https://discord.com/invite/xg9uDTd6' className="text-white/70 hover:text-white">
                  <BsDiscord size={20}/>
                </a>
                <a href='https://t.me/gepstoken' className="text-white/70 hover:text-white">
                  <BiLogoTelegram size={20}/>
                </a>
              </div>
              <p className="text-white/70 text-right">
                © <a href="https://github.com/brijr/components" className="hover:text-white">GEPS: Green Energy Power Station</a>
                . All rights reserved. 2024-present.
              </p>
            </div>
          </Section>
        </div>
      </footer>
    );
  }
  return (
    <footer className="relative">
      <div className="absolute inset-0 blur-xl h-[100px] header-bg"></div>
      <div className="relative">
        <Section className="px-4 md:px-6">
          <Container className="text-white/90">
            <div className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
              <div className="flex flex-col gap-6 not-prose">
                <Link href="/">
                  <h3 className="sr-only">GEPS Token</h3>
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-full hover:opacity-75 transition-all"
                  />
                </Link>
                <p>
                  <Balancer>
                    GEPS: Green Energy Power Station
                    <br/>Revolutionizing Green Energy & Sustainability
                  </Balancer>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {footerLinks.map((link, idx) => (
                  <Link key={idx} href={link.path} className="text-white/70 hover:text-white">
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="hidden flex-col gap-2">
                <h5 className="font-medium">Legal</h5>
                {legalLinks.map((link, idx) => (
                  <Link key={idx} href={link.path} className="text-white/70 hover:text-white">
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          </Container>
          <Container className="mt-8 pt-8 border-t border-white/10 not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center text-white/90">
            <div className="flex gap-6">
              <a href='https://x.com/gepstoken' className="text-white/70 hover:text-white">
                <BsTwitterX size={20}/>
              </a>
              <a href='https://discord.com/invite/gBdAMv85' className="text-white/70 hover:text-white">
                <BsDiscord size={20}/>
              </a>
              <a href='https://t.me/gepstoken' className="text-white/70 hover:text-white">
                <BiLogoTelegram size={20}/>
              </a>
            </div>
            <p className="text-white/70">
              © <a href="https://gepstoken.com" className="hover:text-white">GEPS: Green Energy Power Station</a>
              . All rights reserved. 2024-present.
            </p>
          </Container>
        </Section>
      </div>
    </footer>
  );
}