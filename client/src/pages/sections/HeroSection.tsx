import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[585px] bg-[url(/figmaAssets/mask-group.png)] bg-cover bg-center">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="max-w-[858px]">
          <h1 className="font-['Montserrat',Helvetica] text-6xl mb-8">
            <span className="font-bold text-[#8dc049] leading-[57.4px]">
              Specializing in Garage
            </span>{" "}
            <span className="font-bold text-white text-[76px] leading-[72.7px] block">
              Transformations
            </span>
          </h1>

          <p className="font-['Montserrat',Helvetica] font-medium text-white text-[19px] leading-[29px] max-w-[671px] mb-10">
            We focus on custom garage renovations and organization: epoxy
            flooring, slat wall, cabinets, storage systems and more.
          </p>

          <Button className="bg-[#8dc049] hover:bg-[#7daf3a] text-white font-['Montserrat',Helvetica] font-bold text-base px-[38px] py-[11px] h-11 rounded">
            REQUEST A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
};
