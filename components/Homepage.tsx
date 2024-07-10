'use client'

import React from "react"

import { HeroParallax } from "./ui/heroparallax"

export function HomeScreen() {
    return <HeroParallax images={images}/>
}

export const images = [
    {
      title: "Moonbeam",
      thumbnail:
          '/images/gep-2.jpeg',
    },
    {
      title: "Cursor",
      thumbnail:
          '/images/gep-11.jpeg',
    },
    {
      title: "Rogue",
      thumbnail:
          '/images/gep-10.jpeg'
    },
  
    {
      title: "Editorially",
      thumbnail:
          '/images/gep-4.jpg'
    },
    {
      title: "Editrix AI",
      thumbnail:
          '/images/gep-5.jpg'
    },
    {
      title: "Pixel Perfect",
      thumbnail:
          '/images/gep-1.jpeg'
    },
  
    {
      title: "Algochurn",
      thumbnail:
          '/images/geps-12.png'
    },
    {
      title: "Aceternity UI",
      thumbnail:
          '/images/gep-8.jpeg'
    },
    {
      title: "Tailwind Master Kit",
      thumbnail:
          '/images/gep-7.jpeg'
    },
    {
      title: "SmartBridge",
      thumbnail:
          '/images/gep-10.jpeg'
    },
];