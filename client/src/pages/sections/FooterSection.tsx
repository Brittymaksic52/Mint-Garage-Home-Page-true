import React from "react";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Contact info data
  const contactInfo = {
    phone: "1-888-901-6468",
    email: "info@mintgarage.ca",
    address: {
      title: "Corporate Headquarters",
      street: "2222 South Sheridan Way",
      details: "UNIT #112 Mississauga, ON L5J 2M4 Canada",
    },
  };

  // Quick links data
  const quickLinks = [
    "About Us",
    "Mint Gallery",
    "Mint Blog",
    "Contact Us",
    "Shipping & Returns",
  ];

  // Gallery images data
  const galleryImages = [
    "/figmaAssets/image-12.png",
    "/figmaAssets/image-13.png",
    "/figmaAssets/image-14.png",
    "/figmaAssets/image-15.png",
    "/figmaAssets/image-16.png",
    "/figmaAssets/image-17.png",
  ];

  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img
              className="w-[307px] h-[92px]"
              alt="Mint Garage Logo"
              src="/figmaAssets/mask-group-13.png"
            />
            <p className="font-['Montserrat',Helvetica] font-medium text-base leading-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-['Montserrat',Helvetica] font-medium text-xl leading-[25px]">
              Quick Link
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li
                  key={index}
                  className="font-['Montserrat',Helvetica] font-medium text-base leading-[37px]"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="space-y-4">
            <h3 className="font-['Montserrat',Helvetica] font-medium text-xl leading-[25px]">
              MINT GALLERY
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  className="w-[121px] h-14 object-cover"
                  alt={`Gallery image ${index + 1}`}
                  src={image}
                />
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="font-['Montserrat',Helvetica] font-medium text-xl leading-[25px]">
              CONTACT INFO
            </h3>

            <div className="flex items-center space-x-2">
              <div className="w-[18px] h-[18px] bg-[url(/figmaAssets/phone-alt.svg)] bg-[100%_100%]" />
              <span className="font-['Montserrat',Helvetica] font-medium text-base">
                {contactInfo.phone}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <img
                className="w-5 h-3.5"
                alt="Email icon"
                src="/figmaAssets/group-1-1.png"
              />
              <span className="font-['Montserrat',Helvetica] font-medium text-base">
                {contactInfo.email}
              </span>
            </div>

            <div className="flex space-x-2">
              <img
                className="w-[25px] h-[25px] mt-1"
                alt="Map marker"
                src="/figmaAssets/map-marker-alt.svg"
              />
              <div className="font-['Montserrat',Helvetica] font-medium text-base leading-normal">
                {contactInfo.address.title}
                <br />
                {contactInfo.address.street}
                <br />
                {contactInfo.address.details}
              </div>
            </div>
          </div>
        </div>

        {/* Footer separator */}
        <Separator className="my-6 bg-white/20" />

        {/* Copyright and payment methods */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-['Montserrat',Helvetica] font-normal text-xs leading-6">
            © 2025 Mint Garage, Powered by Shopify
          </div>
          <div>
            <img
              className="w-[38px] h-6"
              alt="Payment methods"
              src="/figmaAssets/frame-3.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
