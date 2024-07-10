import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-8">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            What is $GEPS(Green Energy Power Station)?
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                At GEPS, our mission is to empower individuals globally by providing a unique decentralized standalone Energy power station, that seamlessly converts natural wind and solar energy into electricity and provide cheapest possible electricity for various human needs without creating pollution and environmental damage. We strive to break down barriers, democratize access to clean energy and foster inclusion of poorest of the poor, through our innovative electricity generation and distribution platform powered by the GEPS.
                <br/><br/>
                <span className="font-semibold text-2xl">Key Features</span><br/>
                <span className="font-semibold text-xl">Renewable Energy Sources</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS combines solar panels and wind turbines to harness renewable energy. Solar panels capture sunlight and convert it into electricity, while wind turbines generate power from wind energy.</li>
                    <li>By using both sources, GEPS ensures continuous energy production regardless of variations in weather conditions. Solar power is more consistent during sunny days, while wind power can supplement it during cloudy periods.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Efficient Power Storage</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS is connected to a high-capacity energy storage system. This system stores excess energy generated during peak production hours (such as sunny or windy periods).</li>
                    <li>When energy demand exceeds immediate generation, GEPS draws from this stored energy. Efficient storage ensures a stable power supply even when natural sources are intermittent.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Quick Installation</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS is designed for rapid deployment. Its modular components allow for easy assembly and installation.</li>
                    <li>This feature is particularly valuable in emergency situations, disaster relief efforts, or when urgent power supply is needed.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">High Mobility</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS can be transported swiftly to various locations. Its mobility makes it suitable for temporary power needs, remote areas, or events.</li>
                    <li>For example, during disaster recovery, GEPS can provide electricity to affected regions without delay.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Off-Grid and On-Grid Operation</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li><span className="font-semibold">Off-Grid</span>: GEPS can function independently, disconnected from the main power grid. It’s ideal for remote sites or areas lacking infrastructure.</li>
                    <li><span className="font-semibold">On-Grid</span>: GEPS can also connect to existing power grids. When excess energy is generated, it can feed back into the grid, benefiting the community.</li>
                    <li><span className="font-semibold">Parallel Operation</span>: Multiple GEPS units can work together, creating a microgrid or supporting a larger power substation.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Quick Installation</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS is designed for rapid deployment. Its modular components allow for easy assembly and installation.</li>
                    <li>This feature is particularly valuable in emergency situations, disaster relief efforts, or when urgent power supply is needed.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">Remote Control</span><br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-white">
                    <li>GEPS is monitored and controlled online, allowing real-time adjustments. Operators can optimize energy production, storage, and distribution.</li>
                    <li>Remote access enhances flexibility and convenience. It enables troubleshooting, maintenance, and performance monitoring from anywhere.</li>
                </ul>
                <br/>
                <span className="font-semibold text-xl">GEPS Mission and Impact</span><br/>
                GEPS aims to democratize access to clean energy. By providing affordable electricity, it empowers communities and reduces reliance on fossil fuels. The decentralized nature of GEPS contributes to a sustainable future, minimizing environmental harm.
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/roadmap"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: Roadmap
              </Link>
              <Link
                href="/whitepaper/use-cases"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: Use Cases of $GEPS
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