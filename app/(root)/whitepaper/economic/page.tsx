import { Section, Container } from "@/components/craft";
import Link from "next/link";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";

const page = () => {
  return (
    <Section className="not-prose">
      <Container>
        <div className="w-full h-full m-auto max-w-5xl md:py-10 py-4 lg:pl-32 md:pl-20 pl-8 flex flex-col gap-6">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight">
            Economic Model 
          </h1>
          <div className="md:text-lg">
            <div className="md:block">
                <span className="font-normal text-xl">GEPS aims to provide renewable energy solutions through a dual approach: <span className="font-semibold text-xl">direct sales</span> and <span className="font-semibold text-xl">leasing options</span>. This model is crafted to address the needs of markets with a high demand for clean energy, ensuring profitability while upholding social responsibility.
                </span><br/><br/>
                <span className="font-semibold text-xl">Direct Sales</span><br/>
                Under the direct sales model, GEPS will sell its energy solutions outright to consumers. This approach is suitable for customers who prefer ownership and are willing to invest upfront in green technology. The benefits include:
                <br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-green-500">
                    <li>
                        <span className="font-semibold text-lg">Ownership and Control</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Empowerment</span>: By choosing direct sales, you become the proud owner of your energy system. Imagine having full control over your electricity generation!</li>
                            <li><span className="font-semibold text-lg">Customization</span>: You can tailor the system to your specific needs. Whether it’s adjusting settings or expanding capacity, it’s all in your hands.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Long-Term Savings</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Investment with Returns</span>: Yes, there’s an initial investment, but think of it as planting a seed. Over time, you’ll reap the rewards. Lower energy bills mean more money in your pocket.</li>
                            <li><span className="font-semibold text-lg">Financial Independence</span>: Say goodbye to unpredictable utility bills. With GEPS, you’re less reliant on external providers, which translates to stability and peace of mind.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Government Incentives</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Win-Win</span>: Governments love green initiatives, and they’re willing to reward you for it. Tax credits, rebates, and incentives sweeten the deal.</li>
                            <li><span className="font-semibold text-lg">Environmental Impact</span>: By going green, you’re contributing to a healthier planet. It’s a win for you and Mother Earth.</li>
                            <li><span className="font-semibold text-lg">GEPS isn’t just about energy—it’s about making a positive impact. So, take the leap, embrace clean energy, and be part of a brighter future</span></li>
                        </ul>
                    </li>
                </ul><br/><br/>
                <span className="font-semibold text-xl">Leasing Options</span><br/>
                The leasing model offers flexibility and accessibility, particularly appealing to customers who seek a lower initial investment or those who prefer not to manage the maintenance of the systems. Key advantages include:
                <br/>
                <ul className="marker:text-green-600 list-disc ps-5 space-y-2 dark:text-green-500">
                    <li>
                        <span className="font-semibold text-lg">Reduced Upfront Costs</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Smart Financial Move</span>: Leasing allows you to get started without a hefty initial investment. It’s like dipping your toes into the clean energy pool without diving all in.</li>
                            <li><span className="font-semibold text-lg">Cash Flow Freedom</span>: Keep your capital intact for other priorities while still enjoying the benefits of $GEPS.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Maintenance Included</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Hassle-Free</span>: Say goodbye to worries about system upkeep. Regular maintenance and updates are part of the package.
                            </li>
                            <li><span className="font-semibold text-lg">Peace of Mind</span>: You focus on enjoying clean energy; GEPS handles the technical nitty-gritty.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold text-lg">Government Incentives</span>
                        <ul className="marker:text-white list-disc ps-5 space-y-2 dark:text-white">
                            <li><span className="font-semibold text-lg">Stay Ahead</span>: Leasing gives you the flexibility to embrace newer technology as it emerges. Imagine upgrading to the latest and greatest without breaking a sweat.
                            </li>
                            <li><span className="font-semibold text-lg">Adaptability</span>: As GEPS evolves, so can your energy solution. It’s like having a subscription to the future.</li>
                        </ul>
                    </li>
                </ul>
                <br/>
                <span className="font-semibold text-lg">$GEPS leasing isn’t just about convenience—it’s about making sustainable choices that align with your needs.</span>
            </div>
            <p className="text-sm mt-5 flex flex-row gap-6">
            <Link
                href="/whitepaper/special"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                <LuArrowLeftCircle/>
                Previous: What’s so special about $GEPS
              </Link>
              <Link
                href="/whitepaper/market-focus"
                className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
              >
                Next: $GEPS Market Focus
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