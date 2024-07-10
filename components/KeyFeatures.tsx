"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const KeyFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full my-10">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[100px] lg:min-h-[200px] xl:min-h-[50px]">
        <div>
          <h2 className="text-left text-balance text-3xl md:text-3xl lg:text-5xl font-semibold tracking-[-0.015em] text-white">
            Why $GEPS is Special 
          </h2>
          <p className="mt-2 text-left text-2xl text-neutral-200">
            Participating in the GEPS presale offers a unique blend of robust security, transparent processes, and significant growth potential.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 h-full bg-pink-800"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Value Backed by Real World Assets
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            GEPS is uniquely backed by tangible assets such as land & equipment. This provides stability and confidence to investors, knowing their investment is tied to something real.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-emerald-800"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Guaranteed Launch
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            Unlike other projects, GEPS has a fixed launch. regardless of the pre-sale outcome. Investors can count on the project moving forward as planned.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-purple-900"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Highest Level of Transparency
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            GEPS offers complete transparency. Investors have access to all legal documents, geotagged sites, and live CCTV feeds. This commitment to openness builds trust within the community.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-slate-900"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Truly Democratic
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            GEPS involves its community in decision-making. Each proposal goes through live voting, ensuring that everyone’s voice is heard.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-orange-900"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            Passive Income
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            GEPS provides an opportunity for passive income. Whether through staking, dividends, or other mechanisms, investors can earn without active involvement.
          </p>
        </div>
      </WobbleCard>
      <WobbleCard 
        containerClassName="col-span-1 min-h-[300px] bg-indigo-900"
        className="-mt-12 -mb-12"
      >
        <div>
          <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
            High Demand Product & Solution
          </h2>
          <p className="mt-2 text-left text-lg text-neutral-200">
            GEPS addresses a pressing need in the market, making it a sought-after solution. As demand grows, so does the potential value of your investment.
          </p>
        </div>
      </WobbleCard>
    </div>
  )
}

export default KeyFeatures