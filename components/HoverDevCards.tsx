import React from "react";
import { FiUsers } from "react-icons/fi";
import { RiReservedFill } from "react-icons/ri"
import { PiBuildingApartment, PiHandCoinsDuotone } from "react-icons/pi"
import { MdWaterDamage } from "react-icons/md"
import { TbPigMoney } from "react-icons/tb"
import { CiBank } from "react-icons/ci"
import { FaShop } from "react-icons/fa6"
import { GiArchiveResearch } from "react-icons/gi"

interface CardProps {
  title: string;
  subtitle: string;
  href: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const HoverDevCards: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
        <Card title="Presale" subtitle="20,000,000" href="#" Icon={PiHandCoinsDuotone} />
        <Card
          title="R & D"
          subtitle="2,500,000"
          href="#"
          Icon={GiArchiveResearch}
        />
        <Card title="Marketing" subtitle="2,500,000" href="#" Icon={FaShop} />
        <Card title="Treasury" subtitle="5,000,000" href="#" Icon={CiBank} />
        <Card
          title="Team"
          subtitle="5,000,000"
          href="#"
          Icon={FiUsers}
        />
        <Card title="Charity" subtitle="2,500,000" href="#" Icon={TbPigMoney} />
        <Card title="Liquidity" subtitle="5,000,000" href="#" Icon={MdWaterDamage} />
        <Card title="Partnership & Legal Compliance" subtitle="2,500,000" href="#" Icon={PiBuildingApartment} />
        <Card title="Reserve" subtitle="5,000,000" href="#" Icon={RiReservedFill } />
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, subtitle, Icon, href }) => {
  return (
    <div
      className="w-full p-4 rounded-lg relative overflow-hidden group transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-green-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-16 -right-12 text-9xl text-slate-100 group-hover:text-white group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-green-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-normal text-lg text-white group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

export default HoverDevCards;