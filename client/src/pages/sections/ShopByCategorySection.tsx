import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const ShopByCategorySection = (): JSX.Element => {
  // Category data for mapping
  const categories = [
    {
      id: 1,
      title: "GARAGE FLOORING",
      image: "/figmaAssets/mask-group-3.png",
      active: true,
    },
    {
      id: 2,
      title: "GARAGE WALL STORAGE",
      image: "/figmaAssets/mask-group-4.png",
      active: false,
    },
    {
      id: 3,
      title: "CAR LIFTS",
      image: "/figmaAssets/mask-group-5.png",
      active: false,
    },
    {
      id: 4,
      title: "GARAGE CABINETS",
      image: "/figmaAssets/mask-group-6.png",
      active: false,
    },
    {
      id: 5,
      title: "SPECIALTY STORAGE RACKS",
      image: "/figmaAssets/mask-group-7.png",
      active: false,
    },
  ];

  return (
    <section className="relative w-full py-6 overflow-hidden">
      {/* Background text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-50 font-['Montserrat',Helvetica] font-bold text-[#f4f4f4] text-[140px] tracking-[5.60px] leading-none z-0">
        CATEGORY
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4">
        {/* Section heading */}
        <h2 className="text-center font-['Montserrat',Helvetica] font-bold text-black text-[40px] tracking-[1.60px] mb-10">
          SHOP BY CATEGORY
        </h2>

        {/* Category cards */}
        <Carousel className="w-full">
          <CarouselContent className="flex">
            {categories.map((category) => (
              <CarouselItem
                key={category.id}
                className="flex-shrink-0 basis-auto pl-0.5 pr-0.5 first:pl-0 last:pr-0"
              >
                <Card className="w-[290px] h-[313px] border-0 rounded-none overflow-hidden">
                  <CardContent className="p-0 h-full relative">
                    <div
                      className="w-full h-full bg-[#d9d9d9]"
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: "100% 100%",
                      }}
                    >
                      <div className="absolute bottom-[50px] left-5 w-[227px] font-['Montserrat',Helvetica] font-bold text-white text-[23px]">
                        {category.title}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-5">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`w-3 h-3 rounded-md ${category.active ? "bg-black" : "bg-[#d9d9d9]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
