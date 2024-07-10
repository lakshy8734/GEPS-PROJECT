'use client'
import React from "react"
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion"
import Image from "next/image"

import { PurchaseCard } from "../PurchaseCard"
import Link from "next/link"

export const HeroParallax = ({
    images,
}: {
    images: {
        title: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = images.slice(0,5);
    const secondRow = images.slice(5,10);
    const ref = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    
    const springConfig = { stiffness: 150, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 300]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -300]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 1], [0.1, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-600, -50]),
        springConfig
    );

    return(
        <div
            ref={ref}
            className="h-full pt-1 pb-0 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]" 
        >
            <div className="pointer-events-none">
                <Content/>
            </div>
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className="pointer-events-none"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-10">
                {
                    firstRow.map((product) => (
                        <ImageCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                ))}
                </motion.div>
                <motion.div className="flex flex-row mb-0 space-x-10 ">
                {
                    secondRow.map((product) => (
                        <ImageCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                ))}
                </motion.div>
            </motion.div>
        </div>
    )
}

export const Content = () => {
    return(
        <section className='text-white pointer-events-auto'>
            <div className="px-2 pb-8 pt-0 mx-auto max-w-7xl md:px-2 lg:px-2 lg:pb-24 lg:pt-8">
                <div className="flex flex-col lg:flex-row items-center mx-auto max-w-7xl">
                    <div className="flex flex-col items-start mt-12 mb-16 text-left lg:w-1/2 lg:pr-6 xl:pr-24 md:mb-0 xl:mt-0 sm:mx-6">
                        <h1 className="mb-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-none tracking-tighter text-white">
                            Power a Better Life, Let{"'s"} Go Green   
                        </h1>
                        <div className="mb-1 text-lg leading-relaxed text-left text-white pointer-events-auto font-medium">
                            <div className='text-2xl sm:text-3xl font-semibold -mb-4'>Invest in Green Energy {"&"} Sustainability.</div>
                            <br/>
                                The Green Energy Power Station ($GEPS) Token is your gateway to a sustainable future. With GEPS, you’re not just investing; you’re powering a cleaner, greener future. Say goodbye to carbon footprints and hello to renewable energy projects<br/>
                            <br/>
                            <div className='text-md -mt-4'>
                                Support a cleaner planet and a brighter future for generations to come.<br/>Join the Movement. Go Green.
                            </div>
                        </div>
                        <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                            <div className="mt-3 rounded-lg sm:mt-0">
                                <button className="pointer-events-auto items-center block px-10 py-4 text-base font-medium text-center text-black transition duration-500 ease-in-out transform bg-white rounded-xl hover:bg-black hover:opacity-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Buy Now
                                </button>
                            </div>
                            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                                <Link href='/#how-to-buy'>
                                    <button className="pointer-events-auto items-center block px-10 py-3.5 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                        How to buy?
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
                        <div className="relative w-full max-w-lg mx-auto">
                            <div className="absolute top-0 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                            <div className="absolute rounded-full -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
                            <div className="relative">
                                <PurchaseCard className="object-cover object-center mx-auto rounded-lg shadow-2xl pointer-events-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ImageCard = ({
    product,
    translate,
}: {
    product: {   
        title: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return(
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0 pointer-events-none"
        >
            <div className="block group-hover/product:shadow-2xl">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </div>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </motion.div>
    );
}
