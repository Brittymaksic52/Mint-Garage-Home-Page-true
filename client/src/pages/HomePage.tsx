import React from "react";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { HeroSection } from "./sections/HeroSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { ProductListSection } from "./sections/ProductListSection";
import { ShopByCategorySection } from "./sections/ShopByCategorySection";
import { StayConnectedSection } from "./sections/StayConnectedSection";
import { BeforeAfterSection } from "./sections/BeforeAfterSection";
import { NavigationSidebar } from "@/components/NavigationSidebar";

export const HomePage = (): JSX.Element => {
  // Partner logos data for mapping
  const partnerLogos = [
    {
      src: "/figmaAssets/mask-group-8.png",
      alt: "Mask group",
      width: "139.75px",
      height: "91.61px",
    },
    {
      src: "/figmaAssets/image-3.png",
      alt: "Image",
      width: "142px",
      height: "92px",
    },
    {
      src: "/figmaAssets/image-4.png",
      alt: "Image",
      width: "143px",
      height: "92px",
    },
    {
      src: "/figmaAssets/image-5.png",
      alt: "Image",
      width: "112px",
      height: "73px",
    },
    {
      src: "/figmaAssets/image.png",
      alt: "Image",
      width: "140px",
      height: "91px",
    },
    {
      src: "/figmaAssets/image-1.png",
      alt: "Image",
      width: "142px",
      height: "92px",
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Navigation Sidebar */}
        <NavigationSidebar />

        {/* Top Header (Contact Info) */}
        <MainHeaderSection />

        {/* Hero Section */}
        <HeroSection />

        {/* Before & After Section */}
        <BeforeAfterSection />

        {/* CategorySubsect */}
        <ShopByCategorySection />

        {/* TestimonialsSubsect */}
        <CustomerTestimonialsSection />

        {/* ProductSubsect */}
        <ProductListSection />

        {/* GroupSubsect - Trusted Partners Section */}
        <div className="w-full max-w-[1048px] mx-auto mt-8 mb-12">
          <h2 className="font-bold text-xl text-center mb-8 [font-family:'Montserrat',Helvetica]">
            TRUSTED PARTNERS
          </h2>
          <div className="flex items-center justify-between">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                className="relative"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>

        {/* FooterSubsect */}
        <div className="w-full">
          <StayConnectedSection />
        </div>

        {/* Featured Products Section - removed as it doesn't match the image layout */}
      </div>
    </div>
  );
};
