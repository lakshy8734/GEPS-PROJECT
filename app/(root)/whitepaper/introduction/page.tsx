import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-8">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Introduction
          </h1>
          <div className="md:text-lg">
            <p className="md:block">
                <span className="font-semibold text-xl">Grean Energy Power Station</span><br/>
                In an era marked by escalating electricity demands and environmental consciousness, the Green Energy Power Station (GEPS) emerges as a pioneering force. By seamlessly integrating the principles of renewable energy with the transformative capabilities of blockchain technology, GEPS aims to revolutionize how we meet our electricity needs. Let’s delve into the core tenets of this groundbreaking initiative.
                <br/><br/>
                The urgency to transition from fossil fuels to renewable energy sources has never been greater. GEPS offers a groundbreaking solution that is not only eco-friendly but also efficient and cost-effective.
                <br/><br/>
                GEPS stands as a pioneering force, forging a path that merges the proven principles of Renewable Energy with the limitless potential of blockchain. At the heart of this evolution is the GEPS, an instrument designed to reshape how we fulfill our electricity needs, in low Cost, highly efficient manner on top of that with zero pollution hence creating a fast and more robust impact on climate by reducing pollution and eliminating use of fossil fuels for our day-to-day electricity needs.
                <br/><br/>
                GEPS isn’t merely a platform; it is a dynamic ecosystem - a synthesis of cutting-edge technology and Innovation. GEPS serves as the catalyst unlocking a realm, where all our electricity needs can be easily achieved.
                <br/><br/>
                With renewable resources with almost zero pollution.
                <br/>
                GEPS will provide highly efficient power source at almost 50% less cost than traditional electricity that people consume. It will not only provide cheap electricity but also highly mobile that can be used at almost any location that is still not connected to electricity.
                <br/><br/>
                This whitepaper aims to unravel the intricate layers of GEPS offering users an in-depth understanding of its capabilities.
            </p>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/executive"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Executive 
              </Link>
              <Link
                href="/whitepaper/tokenomics"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Tokenomics
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