'use client'
import * as Craft from "@/components/craft";
import Link from "next/link";
import Image from "next/image";
import Placeholder from "@/public/images/Doughnut.png";
import HoverDevCards from "@/components/HoverDevCards";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Craft.Section className="not-prose">
      <Craft.Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Tokenomics
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <div className="grid md:grid-cols-2 md:gap-12 items-stretch">
                    <div className="flex flex-col gap-4 py-8">
                        <HoverDevCards/>
                    </div>
                    <div className="not-prose relative rounded-lg overflow-hidden mt-10">
                        <Image
                            src={Placeholder}
                            alt="placeholder"
                            className="fill object-cover"
                        />
                    </div>
                </div>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/introduction"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Introduction
              </Link>
              <Link
                href="/whitepaper/roadmap"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Roadmap
                <LuArrowRightCircle/>
              </Link>
            </p>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default page;