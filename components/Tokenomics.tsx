'use client'
import * as Craft from "@/components/craft";
import Image from "next/image";
import Placeholder from "@/public/images/Doughnut.png";
import HoverDevCards from "./HoverDevCards";

export default function Tokenomics() {
  return (
    <main
      style={{ background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)", }}
      className="w-full min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 md:px-8"
      id='tokenomics'
    >
      <Craft.Section className="w-full max-w-7xl">
        <Craft.Container className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="flex flex-col gap-4 py-4 md:py-8">
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">Tokenomics</h3>
            <div className="w-full overflow-x-auto">
              <HoverDevCards />
            </div>
          </div>
          <div className="not-prose relative rounded-lg overflow-hidden mt-4 md:mt-10">
            <Image
              src={Placeholder}
              alt="placeholder"
              className="w-full h-auto object-cover"
              layout="responsive"
            />
          </div>
        </Craft.Container>
      </Craft.Section>
    </main>
  );
}