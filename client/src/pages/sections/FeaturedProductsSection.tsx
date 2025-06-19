import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const FeaturedProductsSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 relative">
      <div className="w-full h-[337px] bg-black bg-[url(/figmaAssets/group-68.png)] bg-cover bg-center flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2"></div>
            <div className="md:w-1/2 space-y-8">
              <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[40px] leading-[44px]">
                STAY CONNECTED
              </h2>

              <p className="font-['Montserrat',Helvetica] font-medium text-white text-[19px] leading-[29px] max-w-[438px]">
                Sign up for Mint Garage news, offers, product releases, and
                more!
              </p>

              <div className="flex space-x-2">
                <Input
                  className="h-[53px] bg-white rounded-md font-['Montserrat',Helvetica] font-medium text-black"
                  placeholder="Enter Your Email.."
                />
                <Button className="h-[53px] w-[188px] bg-[#629b44] hover:bg-[#548a39] rounded-md font-['Montserrat',Helvetica] font-bold text-white">
                  SUBSCRIBE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
