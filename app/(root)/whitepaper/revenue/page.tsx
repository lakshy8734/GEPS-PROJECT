import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            GEPS Revenue Streams: Powering Sustainability and Profit
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-green-500">
                    <li>
                        <span className="font-semibold text-lg">Sales of Energy Systems and Related Products</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">The Backbone</span>: GEPS generates revenue by selling complete energy systems. These include solar panels, wind turbines, energy storage units, and associated components.</li>
                            <li><span className="font-semibold text-lg">Customer Empowerment</span>: Buyers become owners, gaining control over their energy destiny. It’s like owning a slice of the renewable future.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Leasing Contracts for Energy Solutions</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Flexibility Unleashed</span>: Leasing is GEPS’s secret sauce. Customers can access clean energy without hefty upfront costs.</li>
                            <li><span className="font-semibold text-lg">Win-Win</span>: GEPS leases energy systems, and users enjoy the benefits—reduced bills, environmental karma, and hassle-free maintenance.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Maintenance and Service Fees for Leased Systems</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">White-Glove Treatment</span>: GEPS doesn’t just install and vanish. Regular maintenance ensures peak performance.</li>
                            <li><span className="font-semibold text-lg">Service Economy</span>: Users pay for peace of mind. GEPS handles the tech stuff; they focus on enjoying green power.</li>
                            <li><span className="font-semibold text-lg">$GEPS</span>: Where Sustainability Meets Profitability</li>
                        </ul>
                    </li>
                </ul><br/>
                <span className="font-semibold text-xl">It’s not just about kilowatts; it’s about impact. GEPS fuels homes, businesses, and dreams.</span>
                <br/><br/>
                <span className="font-semibold text-xl">So, whether you’re a savvy investor or an eco-conscious homeowner, GEPS invites you to join the clean energy revolution!</span>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/market-focus"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: $GEPS Market Focus
              </Link>
              <Link
                href="/whitepaper/core-values"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Core Values
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