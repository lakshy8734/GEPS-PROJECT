import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            $GEPS Market Focus: Where Clean Energy Matters Most
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="text-xl font-semibold">High Electricity Costs? GEPS to the Rescue!</span><br/>
                <div className="mt-1 text-lg">
                    <span className="font-semibold">Scenario</span>: Imagine living in a region where electricity bills drain your wallet. GEPS targets precisely these areas.
                    <br/>
                    <span className="font-semibold">Impact</span>: By adopting GEPS, you regain control over costs. It’s like switching from a pricey restaurant to a home-cooked meal—savings galore!
                </div>
                <br/>
                <span className="text-xl font-semibold">Insufficient Grid Infrastructure? No Problem!</span><br/>
                <div className="mt-1 text-lg">
                    <span className="font-semibold">Off-the-Grid Champions</span>: GEPS thrives where traditional grids fall short. Think remote villages, islands, or disaster-stricken zones.
                    <br/>
                    <span className="font-semibold">Energy Independence</span>: GEPS bridges the gap, providing power where grid lines fear to tread. It’s like having your personal energy oasis.                
                </div>
                <br/>
                <span className="text-xl font-semibold">Green Regulations and Incentives</span><br/>
                <div className="mt-1 text-lg">
                    <span className="font-semibold">Eco-Warrior Zones</span>: GEPS dances to the rhythm of environmental regulations. It’s not just about compliance; it’s about making a green impact.
                    <br/>
                    <span className="font-semibold">Government Love</span>: Tax breaks, rebates, and incentives—GEPS users get the VIP treatment. Your commitment to clean energy pays off.              
                </div>
                <br/>
                <span className="text-xl font-semibold">Emergency Preparedness with GEPS</span><br/>
                <div className="mt-1 text-lg">
                    <span className="font-semibold">Light in the Dark</span>: When emergencies strike—natural disasters, power outages, or critical situations—GEPS stands tall.
                    <br/>
                    <span className="font-semibold">Swift Deployment</span>: GEPS unfolds like a superhero cape. Quick installation means urgent energy when seconds count.              
                </div>
                <br/>
                <span className="text-xl font-semibold">Ready to GEPSify Your World?</span><br/>
                <div className="mt-1 text-lg">
                    <span className="font-semibold">Whether you’re a forward-thinking entrepreneur, a community leader, or a homeowner with a green heart, $GEPS awaits. It’s not just energy; it’s a movement. So, let’s power up and change the game!</span>            
                </div>
                <br/>
                <span className="text-xl font-semibold">Profitability and Social Responsibility</span><br/>
                <div className="mt-1 text-lg">
                The GEPS business model is designed to balance financial objectives with societal benefits. Strategies to achieve this include:<br/>
                <div className="mt-2"> 
                    <span className="font-semibold text-lg">Competitive Pricing</span><br/>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                        <li>GEPS aims to make renewable energy accessible to a wider audience by offering competitive pricing. By keeping costs reasonable, they encourage adoption among individuals, businesses, and communities.</li>
                        <li>Affordable rates for clean energy help shift demand away from fossil fuels, contributing to a greener and more sustainable energy landscape.</li>
                    </ul><br/>
                    <span className="font-semibold text-lg">Community Engagement</span><br/>
                    <span className="text-lg">GEPS actively participates in community projects. These initiatives serve multiple purposes:</span>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                        <li><span className="font-semibold text-lg">Awareness</span>: By engaging with local communities, GEPS educates people about the benefits of green energy. They organize workshops, seminars, and awareness campaigns.</li>
                        <li><span className="font-semibold text-lg">Adoption</span>: Community projects encourage individuals and organizations to embrace renewable energy solutions. GEPS collaborates with schools, NGOs, and local leaders to promote adoption.</li>
                        <li><span className="font-semibold text-lg">Social Impact</span>: GEPS prioritizes social welfare by empowering communities through clean energy. They may provide energy access to underserved areas or support community-driven projects.</li>
                    </ul><br/>  
                    <span className="font-semibold text-lg">Sustainable Practices</span><br/>
                    <span className="text-lg">GEPS integrates sustainability into its operations:</span>
                    <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                        <li><span className="font-semibold text-lg">Energy Efficiency</span>: The power station itself operates efficiently, minimizing energy losses during conversion and distribution.</li>
                        <li><span className="font-semibold text-lg">Supply Chain</span>: GEPS sources components sustainably, considering environmental impact. They prioritize suppliers with eco-friendly practices.</li>
                        <li><span className="font-semibold text-lg">Carbon Footprint</span>: By reducing emissions during manufacturing, installation, and maintenance, GEPS contributes to a cleaner environment.</li>
                        <li><span className="font-semibold text-lg">Recycling</span>: GEPS promotes recycling and responsible disposal of components, ensuring minimal waste.</li>
                    </ul>            
                </div>
                </div>
                <br/>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/economic"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Economic Model
              </Link>
              <Link
                href="/whitepaper/revenue"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: GEPS Revenue Streams
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