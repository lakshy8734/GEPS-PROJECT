"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TracingBeam } from "./ui/tracing-beam";
 
import { cn } from "@/utils/cn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type CardProps = React.ComponentProps<typeof Card>

export function RoadMap({ className, ...props }: CardProps) {
  return (
    <div id="roadmap">
      <LampContainer className="-mb-20">
        <motion.h1
          initial={{ opacity: 0.5, y: -280 }}
          whileInView={{ opacity: 1, y: -340 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-black to-white pb-2 bg-clip-text text-center text-6xl font-medium tracking-tight md:text-7xl"
        >
          Road Map
        </motion.h1>
      </LampContainer>
      <TracingBeam className="px-6 relative z-0 -mt-96 -top-24">
        <div className="max-w-2xl mx-auto antialiased relative">
          {roadmapText.map(({ title, heading, progress }, index) => (
            <div key={`content-${index}`} className="mb-10">
              <Card 
                className={cn("lg:w-[900px] w-[600px]", className)} 
                style={{
                  maxWidth: "calc(100vw - 50px)",
                  width: "100%",
                  marginLeft: "10px"
                }}
                {...props}
              >
                <CardHeader>
                  <CardTitle className="text-[32px] font-bold">{title}</CardTitle>
                  <CardDescription>
                    {progress}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {
                    heading.map((head, headIndex) => (
                      <div className=" flex items-center space-x-4 rounded-md border p-4" key={headIndex}>
                        <div className="flex-1 space-y-1">
                          <p className="text-[24px] font-semibold leading-none">
                            {head.title}
                          </p>
                          {Object.entries(head.line).map(([key, value]) => (
                            <div key={key} className="mt-2 grid grid-cols-[25px_1fr] items-start pt-2 last:mb-0 last:pb-0">
                              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-green-500" />
                              <div className="space-y-1">
                                <p className="text-[16px] font-medium leading-none">
                                  {value}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const roadmapText = [
  {
    title: "Phase 1: Foundation and Research",
    heading:[
      {
          title: "Project Kickoff and Team Formation",
          line: {
              1: "Assemble a cross-functional team comprising experts in renewable energy, blockchain, software development, and project management.",
              2: "Define roles, responsibilities, and communication channels.",
          }
      },
      {
          title: "Market Research and Feasibility Study",
          line: {
              1: "Conduct an in-depth analysis of the green energy market, including demand, supply gaps, and regulatory landscape.",
              2: "Identify potential regions for GEPS deployment based on energy needs and accessibility.",
              3: "Smart Contract Deployment & Launch of Presale."

          }
      },
    ],
    progress: (
      <div className="space-y-5">
        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden border-white border-2 bg-green-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-green-500"
              style={{ width: "100%" }}
            />
          </div>
          <div className="w-10 text-end">
            <span className="text-lg text-gray-800 dark:text-white">100%</span>
          </div>
        </div>
      </div>
    )
  },
  {
      title: "Phase 2: Design and Prototyping ",
      heading:[
        {
            title: "System Architecture Design",
            line: {
                  1: "Define the high-level architecture of GEPS, considering scalability, security, and interoperability.",
                  2: "Specify the components: smart contracts, energy generation units, user interfaces, and data storage."
              
            }
        },
        {
            title: "Prototype Development",
            line: {
                1: "Build a minimal viable product (MVP) to demonstrate core functionalities.",
                2: "Develop smart contracts for energy trading, token issuance, and governance."

            }
        },
        {
          title: "Pilot Deployment",
          line: {
              1: "Deploy the MVP in a controlled environment (e.g., a small community or pilot site).",
              2: "Gather feedback from users and stakeholders."

          }
      },
    ],
    progress: (
      <div className="space-y-5">
        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden border-white border-2 bg-yellow-500 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-yellow-500"
              style={{ width: "75%" }}
            />
          </div>
          <div className="w-10 text-end">
            <span className="text-lg text-gray-800 dark:text-white">75%</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Phase 3: Scaling and Integration",
    heading:[
      {
          title: "Scalability Testing",
          line: {
              1: "Optimize smart contracts for efficiency and scalability.",
              2: "Simulate increased demand and validate system performance.",
          }
      },
      {
          title: "Integration with Energy Grids",
          line: {
              1: "Collaborate with local utilities and grid operators to integrate GEPS into existing energy infrastructure.",
              2: "Ensure seamless energy flow between GEPS and the grid.",
          }
      },
      {
          title: "Community Outreach and Adoption",
          line: {
              1: "Educate potential users about GEPS benefits.",
              2: "Launch marketing campaigns to attract early adopters.",
          }
      },
    ],
    
    progress: (
      <div className="space-y-5">
        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden border-white border-2 bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500"
              style={{ width: "0%" }}
            />
          </div>
          <div className="w-10 text-end">
            <span className="text-lg text-gray-800 dark:text-white">0%</span>
          </div>
        </div>
      </div>
    )
  },
  {
      title: "Phase 4: Full-Scale Deployment and Expansion",
      heading:[
        {
            title: "Full Deployment",
            line: {
                  1: "Roll out GEPS to additional regions, targeting underserved communities.",
                  2: "Monitor system performance and address any issues promptly."
              
            }
        },
        {
            title: "Collaboration and Partnerships",
            line: {
                1: "Partner with other green energy projects, NGOs, and government bodies.",
                2: "Explore collaborations for research, funding, and policy advocacy."

            }
        },
    ],
    progress: (
      <div className="space-y-5">
        <div className="flex items-center gap-x-3 whitespace-nowrap">
          <div
            className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={0}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="flex flex-col justify-center rounded-full overflow-hidden border-white border-2 bg-red-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-red-500"
              style={{ width: "0%" }}
            />
          </div>
          <div className="w-10 text-end">
            <span className="text-lg text-gray-800 dark:text-white">0%</span>
          </div>
        </div>
      </div>
    )
  },
];
