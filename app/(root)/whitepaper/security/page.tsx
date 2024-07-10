import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Security and Compliance
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
              <span className="font-normal text-xl">Security is paramount at GEPS. Our smart contracts will be audited by leading security firms to ensure compliance with the highest standards. Additionally, we are proactive in our approach to regulatory compliance, engaging with policymakers to ensure that GEPS operates within the frameworks of international & local regulations.</span>
              <br/><br/>
              <span className="font-noraml text-xl">Maintaining the highest standards of security, GEPS mandates Know-Your-Customer (KYC) and Anti-Money Laundering (AML) compliance. This ensures a secure and compliant environment for users mitigating risks associated with fraudulent activities.</span>
              <br/><br/>
              <span className="font-normal text-xl">Our commitment to security extends beyond technical measures. We have instituted robust governance policies that align with our dedication to transparency and trust. Users of the GEPS token can engage with the GEPS platform with confidence, knowing that their assets are protected by state-of-the-art security protocols and a compliance-centric approach to operations.</span>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/core-values"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Core Values
              </Link>
              <Link
                href="/whitepaper/presale"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: For Presale Investors
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