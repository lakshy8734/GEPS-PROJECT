import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Core Values
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="font-semibold text-2xl">Integrity</span><br/>
                Integrity is at the heart of everything we do. We are committed to maintaining the highest ethical standards, honesty and accountability in all of our dealings. We prioritize the interests of our clients, investors, consumers and partners, ensuring trust and reliability in our relationships. We listen to our trusted community and always try to make an equilibrium, where all parties in our eco-system win.
                <br/><br/>
                <span className="font-semibold text-2xl">Transparency</span><br/>
                Transparency is a fundamental pillar of our business philosophy. We believe in open and clear communication providing our clients and investors with comprehensive information about our processes, products and investment opportunities. We foster transparency to build strong long-lasting relationships based on mutual trust.<br/>
                We will make every information available on our investor Dashboard, with live reporting from ground sites, our investors will always have Realtime information of project progress, including but not limited to Geotagged project sites, Access to live CCTV of our work spaces, all progress reports, statements & legal documents.
                <br/><br/>
                <span className="font-semibold text-2xl">Prosperity</span><br/>
                Prosperity lies at the core of our vision. We are dedicated to creating value for everyone involved.<br/>
                We aim to create 50000/- Direct and 100000/- Indirect jobs, With GEPS everyone from investors to workers to consumers wins.<br/>
                GEPS will be all win situation no matter what role you play in our ecosystem.
                <br/>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/revenue"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: GEPS Revenue Streams
              </Link>
              <Link
                href="/whitepaper/security"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Security and Compliance
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