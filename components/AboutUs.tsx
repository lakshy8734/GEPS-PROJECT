'use client'

import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export function AboutUs() {
  return (
    <section id='about-us'>
      <main
        style={{
          background: "linear-gradient(143.6deg, rgba(87, 255, 151, 0) 20.79%, rgba(121, 249, 157, 0.26) 40.92%, rgba(189, 238, 171, 0) 94.35%)",
        }}
        className="w-full min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden w-full">
          <div className="max-w-7xl mx-auto py-8 sm:py-12">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                Green Energy Power Station (GEPS)
              </h1>
              <h2 className="mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 dark:text-white">
                A Clean Energy Solution with Decentralized Trading
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-neutral-400 max-w-3xl mx-auto">
                GEPS, a revolutionary energy system, seamlessly integrates solar and wind power while incorporating decentralized trading.
              </p>
            </div>
            <div className="mt-10 relative max-w-5xl mx-auto">
              <div className="mx-auto object-cover h-[250px] sm:h-[375px] lg:h-[500px] w-full bg-image rounded-lg" />
              <div className="absolute inset-0 flex flex-col justify-end pb-8 items-center">
                < a
                  className="py-2 px-4 sm:py-3 sm:px-6 inline-flex justify-center items-center gap-x-2 text-sm sm:text-base font-semibold rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                  href="/#features"
                >
                  Learn More <FiArrowUpRight />
                </a>
              </div>
              <div className="absolute -bottom-4 -left-4 -z-[1] w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg dark:to-neutral-900">
                <div className="bg-white w-full h-full rounded-lg dark:bg-neutral-900" />
              </div>
              <div className="absolute -top-12 -right-4 -z-[1] w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                <div className="bg-white w-full h-full rounded-full dark:bg-neutral-900" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}