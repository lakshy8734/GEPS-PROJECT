import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-8">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            <img
              className="inline my-auto w-10 md:w-20 md:-mt-6 -mt-3"
              width={50}
              height={50}
              src="/logo.svg"
              alt=""
            ></img>{" "}
            GEPS Whitepaper
          </h1>
          <div className="md:text-lg">
            <p className="block">
              Leveraging our extensive experience collaborating with established companies and prominent blockchain initiatives, Green Energy Power Station (GEPS) presents a groundbreaking clean energy solution. GEPS seamlessly integrates solar and wind power generation with a decentralized trading platform, fostering a revolutionary energy ecosystem.
            </p>
            <div className="md:flex grid gap-2">
              <div className="opacity-50">
                <br/>
                For a comprehensive exploration of GEPS's vision to become a global leader in decentralized clean energy solutions, we invite you to review our detailed Whitepaper.
              </div>
            </div>
            <p className="text-sm mt-5">
              <Link
                href="/whitepaper/executive"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Executive Summary
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