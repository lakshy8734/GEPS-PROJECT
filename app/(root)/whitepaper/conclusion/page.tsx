import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Conclusion
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="font-normal text-xl">GEPS is poised to be a leading force in the Renewable Energy space, pioneering a new era where anyone, anywhere can participate in the vast opportunities offered by Green Energy advancement. We envision a world, where the GEPS token becomes synonymous with green energy, a key that unlocks the potential of sustainable growth and enables individuals to fight pollution and climate changes, one of the most pressing needs of humanity.</span>
                <br/><br/>
                <span className="font-noraml text-xl">Through innovation, integrity and a commitment to our users, we aspire to be the catalyst for a global Green energy revolution that bridges the gap between traditional and decentralized energy needs- fostering a future of limitless possibilities and energy freedom.</span>
                <br/><br/>
                <span className="font-normal text-xl">GEPS invites all visionaries, investors, and users to become part of this groundbreaking journey. With GEPS, we are not just building a platform; we are shaping the future of Energy. Join us, and let's build this future together.</span>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/presale"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: For Presale Investors
              </Link>
              <Link
                href="/whitepaper/disclaimer"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Disclaimer
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