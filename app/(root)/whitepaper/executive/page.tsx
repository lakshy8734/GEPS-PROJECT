import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowRightCircle, LuArrowLeftCircle } from "react-icons/lu"

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-8">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Executive Summary
          </h1>
          <div className="md:text-lg">
            <p className="md:block">
            GEPS presents its pioneering endeavor into the Green Energy Revolution with the introduction of its native token, GEPS. Our initiative seeks to transform the current energy landscape by leveraging the intrinsic benefits of blockchain technology, providing a secure, transparent, efficient and cheaper source of energy for masses. The GEPS token is at the heart of our ecosystem, designed to facilitate a diverse range of activities with ease and agility. This white paper delves into the GEPS token’s architecture, its application within the GEPS ecosystem, and a strategic roadmap that charts our ambitious course through the green energy revolution.
            <br/><br/>
            The Green energy landscape has witnessed significant growth; however, it still remains a niche market due to the barriers to entry for the average consumer. GEPS aims to lower these barriers, creating a user-centric platform that simplifies interaction without compromising on quality and quantity.
            <br/><br/>
            GEPS (Green Energy Power Station) presents a revolutionary Real-World Asset (RWA) Backed token designed to transform the renewable energy landscape. Our mission is to fulfill global electricity needs sustainably, eliminating the reliance on fossil fuels for personal energy consumption.
            </p>
            <p className="text-sm mt-5 flex flex-row gap-6">
              <Link
                href="/whitepaper"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Whitepaper
              </Link>
              <Link
                href="/whitepaper/introduction"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Introduction
                <LuArrowRightCircle/>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default page;