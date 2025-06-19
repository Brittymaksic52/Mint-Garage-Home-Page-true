import React from "react";
import { CustomerTestimonialsSection } from "./sections/CustomerTestimonialsSection";
import { HeroSection } from "./sections/HeroSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { NewsletterSignupSection } from "./sections/NewsletterSignupSection";
import { ShopByCategorySection } from "./sections/ShopByCategorySection";
import { StayConnectedSection } from "./sections/StayConnectedSection";
import { BeforeAfterSection } from "./sections/BeforeAfterSection";
import { WhyMintGarageSection } from "./sections/WhyMintGarageSection";
import { TrustedPartnersSection } from "./sections/TrustedPartnersSection";
import { MintMyGarageSection } from "./sections/MintMyGarageSection";
import { DealerLocatorSection } from "./sections/DealerLocatorSection";
import { NavigationSidebar } from "@/components/NavigationSidebar";

export const HomePage = (): JSX.Element => {
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

        {/* Why Mint Garage Section */}
        <WhyMintGarageSection />

        {/* Trusted Partners Section */}
        <TrustedPartnersSection />

        {/* Mint My Garage YouTube Section */}
        <MintMyGarageSection />

        {/* Dealer Locator Section */}
        <DealerLocatorSection />

        {/* Newsletter Signup Section */}
        <NewsletterSignupSection />

        {/* FooterSubsect */}
        <div className="w-full">
          <StayConnectedSection />
        </div>

        {/* Featured Products Section - removed as it doesn't match the image layout */}
      </div>
    </div>
  );
};
