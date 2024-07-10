import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            <span className="text-red-600">Important:</span> For Presale Investors
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="text-xl">At GEPS we will release each and every piece of information on <a href="www.gepstoken.com" className="underline">www.gepstoken.com</a> we request all our investors to only believe and communicate on our website.</span>
                <br/><br/>
                <span className="text-xl">We will use social media channels for marketing purposes only and we take no responsibility for any information that you find or use from other sources. We will have a special customer care section on our website that should be used for any queries and customer support. We will update our website regularly, with latest information & features.</span>
                <br/>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/security"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Security and Compliance
              </Link>
              <Link
                href="/whitepaper/conclusion"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Conclusion
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