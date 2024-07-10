import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            What’s so special about $GEPS ?
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="text-2xl">“Participating in the GEPS presale offers a unique blend of robust security, transparent processes, and significant growth potential.”</span>
                <br/><br/>
                <span className="font-semibold text-xl">Fixed & Very Limited Supply </span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>$GEPS token comes with a limited supply of just 50000000/- $GEPS tokens. Hence its value is going to be something Really Significant in future.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Value Backed by Real World Assets</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS is uniquely backed by tangible assets such as land & equipment. This provides stability and confidence to investors, knowing their investment is tied to something real.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Guaranteed Launch</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>Unlike other projects, GEPS has a fixed launch. regardless of the pre-sale outcome. Investors can count on the project moving forward as planned.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Highest Level of Transparency</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS offers complete transparency. Investors have access to all legal documents, geotagged sites, and live CCTV feeds. This commitment to openness builds trust within the community.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Truly Democratic</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS involves its community in decision-making. Each proposal goes through live voting, ensuring that everyone’s voice is heard.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Passive Income</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS provides an opportunity for passive income. Whether through staking, dividends, or other mechanisms, investors can earn without active involvement.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">High Demand Product & Solution</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS addresses a pressing need in the market, making it a sought-after solution. As demand grows, so does the potential value of your investment.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">GEPS is one & only token of its kind by design. With a fixed supply and no burn mechanism will make it unique and valuable as we reach production stage, creating a scarcity that can potentially appreciate the token's value over time. This approach is intended to balance the token supply with the expanding ecosystem, aligning the interests of the token holders with the health of the network.
                <br/><br/>
                The GEPS Utility mechanism is twofold: it incentivizes early adoption and participation, and it ensures that as GEPS ecosystem grows, so too does the inherent value of the tokens within it. This economic model is complemented by a transparent and equitable distribution strategy that seeks to avoid the concentration of wealth and influence, thereby fostering a balanced and diverse community of stakeholders.
                </span>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/use-cases"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Use Cases of $GEPS
              </Link>
              <Link
                href="/whitepaper/economic"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Economic Model
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