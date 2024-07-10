'use client'

import { FiBarChart, FiBell, FiDollarSign, FiPlay } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState } from "react";

interface Item {
    id: number;
    title: string;
    Icon: React.ElementType;
    imgSrc: string;
    description: string;
}

interface PanelProps {
    open: number;
    setOpen: (id: number) => void;
    id: number;
    Icon: React.ElementType;
    title: string;
    imgSrc: string;
    description: string;
}

const VerticalAccordion = () => {
    const [open, setOpen] = useState<number>(items[0].id);

    return (
        <section className="relative p-4">
            <div className="absolute inset-0 blur-xl h-full header-bg"></div>
            <div className="relative flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto overflow-hidden rounded-xl ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                {items.map((item) => (
                    <Panel
                        key={item.id}
                        open={open}
                        setOpen={setOpen}
                        id={item.id}
                        Icon={item.Icon}
                        title={item.title}
                        imgSrc={item.imgSrc}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

const Panel: React.FC<PanelProps> = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-transparent hover:bg-zinc-800/20 transition-colors p-3 border-r-[1px] border-b-[1px] border-zinc-900/10 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden lg:block text-xl font-light rotate-180 text-white/90"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light text-white/90">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-indigo-600/80 text-white grid place-items-center rounded-full">
                    <Icon />
                </div>
                <span className="w-4 h-4 bg-transparent group-hover:bg-zinc-800/20 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-zinc-900/10 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black/50 flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white/90 w-full"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items: Item[] = [
  {
    id: 1,
    Icon: FiDollarSign,
    imgSrc:
      "/images/faq-1.jpg",
    title: 
        "What is a presale?",
    description: 
        "A presale offers a limited number of tokens at a discounted price to early participants. It allows you to be part of a project before its public launch, similar to an exclusive club. Pre-sales provide an opportunity to buy tokens before they hit exchanges.",
  },
  {
    id: 2,
    Icon: FiPlay,
    imgSrc:
      "/images/faq-2.jpg",
    title: 
        "What is GEPS?",
    description:
        "GEPS is a ground-breaking platform where you can own fractional shares of Green Energy Power Stations using $GEPS tokens. You can also purchase electricity generated by these stations. Each GEPS token represents real-world assets (land and equipment) and allows investments starting from $10. Owners receive monthly income and can trade shares on the GEPS marketplace.",
  },
  {
    id: 3,
    Icon: FiBell,
    imgSrc:
      "/images/faq-3.jpg",
    title: 
        "Why participate in the presale?",
    description:
        "The GEPS presale lets you join a passionate community that believes in clean energy and sustainability. By getting in early, you benefit from potential token discounts and contribute to the project’s success. Presale funds accelerate implementation while ensuring a smooth launch.",
  },
  {
    id: 4,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-4.jpg",
    title: "What is the $GEPS token?",
    description:
        "$GEPS tokens grant access to GEPS features:\n"+
        "Voting rights for project decisions.\n"+
        "Purchasing Green Energy Power Stations and trading electricity.\n"+
        "Monthly income from GEPS operations, with potential token appreciation.\n",
  },
  {
    id: 5,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-5.jpg",
    title: 
        "Are my tokens safe?",
    description: 
        "GEPS prioritizes security, using industry-standard measures and complete transparency. Our 24/7 security team ensures asset safety. While all investments carry risk, participating in the presale reflects our commitment to secure fractional ownership in the power sector.",
  },
  {
    id: 6,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-6.jpg",
    title: "Is there a vesting period for tokens?",
    description: "No vesting period for presale investors."
  },
  {
    id: 7,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-7.jpg",
    title: "Where do I find my purchased tokens?",
    description: "Click the “Connect Wallet” button in the top right corner, then select “Go to Dashboard.” Token distribution begins 48 hours after the presale ends."
  },
  {
    id: 8,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-8.jpg",
    title: "What’s the launch price for $GEPS?",
    description: "The initial listing price for 1 $GEPS is $0.50 during launch."
  },
  {
    id: 9,
    Icon: FiBarChart,
    imgSrc:
      "/images/faq-9.jpg",
    title: "When is the $GEPS launch?",
    description: "The $GEPS launch date occurs 48 hours after the presale concludes."
  },
];