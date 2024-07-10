import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Disclaimer
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="text-2xl">DYOR</span>
                <br/>
                The information contained in this whitepaper is for general informational purposes only and should not be relied upon as professional advice. Cryptocurrencies are volatile, and participants should conduct due diligence and Do Your Own Research (DYOR). You should always consult your independent advisors concerning legal, tax and regulatory implications in your country of residency. We cannot guarantee specific outcomes or market performance. Participation is voluntary and at your own risk. 
                <br/><br/>
                Cryptocurrency may be regulated and profits may be subject to capital gains or other taxes applicable in your jurisdiction.
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/conclusion"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Conclusion
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Buy Now
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