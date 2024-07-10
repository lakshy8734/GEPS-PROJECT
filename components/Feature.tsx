'use client'

import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";

type FeatureText = {
  title: string;
  description: string[];
};

const featureText: FeatureText[] = [
  {
    title: "Dual Energy Sources",
    description:[
        "GEPS harnesses both solar and wind energy, maximizing generation efficiency.",
        "Solar panels and wind turbine work in tandem to capture renewable energy.",
    ]
      
  },
  {
    title: "Efficient Battery Bank",
    description:[
        "GEPS stores excess energy in a high-efficiency battery system.",
        "This stored energy powers homes, businesses, or even electric vehicles.",
    ]
  },
  {
    title: "Compact Design and Mobility",
    description:[
          "GEPS fits rooftops, urban spaces, and remote locations.",
          "Its mobility allows deployment in no time anywhere anytime seamlessly."
      ]
      
  },
  {
    title: "Grid Interaction",
    description:[
      "GEPS can operate off-grid or connect to the existing power grid.",
      "GEPS - GEPS: Illuminating the Future, One Renewable Watt at a Time!"
    ]
  },
  {
    title: "Clean Output",
    description:[
      "By relying on renewable sources, GEPS reduces greenhouse gas emissions.",
      "It contributes to a cleaner environment and sustainable energy consumption."
    ]
      
  },
  {
    title: "Decentralized Trading",

    description:[
      "GEPS introduces a blockchain-based trading platform.",
      "Producers and consumers can exchange surplus energy directly, bypassing intermediaries.",
      "Smart contracts ensure transparency, security, and fair transactions."
    ]
  },
];

const Feature = () => {
  return (
    <main
        style={{ background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)", }}
        className="w-full min-h-screen flex flex-col items-center justify-center relative"
    >
      <Craft.Section id="features">
        <Craft.Container className="not-prose">
          <div className="flex flex-col gap-3">
            <h3 className="text-5xl font-bold">
                <Balancer>
                Green Energy Power Station (GEPS)
                </Balancer>
            </h3>
            <h4 className="text-2xl font-light opacity-70">
                <Balancer>
                    A Clean Energy Solution with Decentralized Trading
                </Balancer>
            </h4>
            <div className="relative mt-6">
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featureText.map(({title, description}, idx) => (
                  <li
                    key={idx}
                    className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] space-y-3 p-4 border rounded-xl transition-all hover:-mt-2 hover:mb-2"
                  >
                    <h4 className="text-xl text-gray-300 font-bold font-geist tracking-tighter">
                      {title}
                    </h4>
                    {
                      description.map((desc, index) => (
                        <p key={index} className="text-lg font-normal opacity-75 -mb-2">{desc}</p>
                      ))
                    }
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Craft.Container>
      </Craft.Section>
    </main>
  );
};

export default Feature;
