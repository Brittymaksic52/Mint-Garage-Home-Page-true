import React from "react";

export const StayConnectedSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { src: "/figmaAssets/frame-3.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-4.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-5.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-8.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-6.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-2.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame.svg", alt: "Social Media" },
    { src: "/figmaAssets/frame-1.svg", alt: "Social Media" },
  ];

  // Quick links data
  const quickLinks = [
    "Shop by Category",
    "Mint Gallery",
    "Mint Blog",
    "About Us",
    "Contact Us",
  ];

  return (
    <footer className="w-full bg-black text-white">
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Main footer content */}
        <div className="flex flex-wrap px-6 py-10 md:px-20">
          {/* Company info column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img
              className="w-[307px] h-[92px]"
              alt="Mint Garage Logo"
              src="/figmaAssets/mask-group-14.png"
            />
            <p className="mt-4 font-['Montserrat',Helvetica] font-medium text-base leading-[25px] max-w-[372px]">
              At Mint Garage, our mission is to transform ordinary garages into
              functional, stylish, and organized spaces that meet the unique
              needs of our clients.
            </p>
          </div>

          {/* Quick links column */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="font-['Montserrat',Helvetica] font-medium text-xl leading-[25px] mb-4">
              Quick Link
            </h3>
            <ul className="font-['Montserrat',Helvetica] font-medium text-base leading-[37px]">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info column */}
          <div className="w-full md:w-1/3">
            <h3 className="font-['Montserrat',Helvetica] font-medium text-xl leading-[25px] mb-4">
              CONTACT INFO
            </h3>

            <div className="flex items-center mt-6 mb-4">
              <div className="w-[18px] h-[18px] mr-2 bg-[url(/figmaAssets/phone-alt.svg)] bg-[100%_100%]" />
              <span className="font-['Montserrat',Helvetica] font-medium text-base">
                1-888-901-6468
              </span>
            </div>

            <div className="flex items-center mb-4">
              <img
                className="w-5 h-3.5 mr-2"
                alt="Email Icon"
                src="/figmaAssets/group-1-2.png"
              />
              <span className="font-['Montserrat',Helvetica] font-medium text-base">
                info@mintgarage.ca
              </span>
            </div>

            <div className="flex">
              <img
                className="w-[25px] h-[25px] mt-1 mr-1"
                alt="Map Marker"
                src="/figmaAssets/map-marker-alt.svg"
              />
              <div className="font-['Montserrat',Helvetica] font-medium text-base">
                Corporate Headquarters
                <br />
                2222 South Sheridan Way UNIT #112 Mississauga, ON L5J 2M4 Canada
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-wrap items-center justify-between w-full h-16 px-6 md:px-20 bg-[#181818]">
          {/* Copyright text */}
          <div className="font-['Montserrat',Helvetica] font-normal text-xs leading-6">
            © 2025 Mint Garage, All rights reserved
          </div>

          {/* Social media icons */}
          <div className="flex items-center gap-2.5">
            {/* Credit card icon with custom SVG */}
            <div className="relative w-[38px] h-6">
              <div className="relative w-[37px] h-6 bg-[url(/figmaAssets/vector-10.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-9 h-[22px] top-px left-px"
                  alt="Vector"
                  src="/figmaAssets/vector-12.svg"
                />
                <div className="absolute w-7 h-[11px] top-[7px] left-[5px]">
                  <img
                    className="absolute w-[7px] h-[9px] top-0 left-0"
                    alt="Group"
                    src="/figmaAssets/group-4.png"
                  />
                  <img
                    className="absolute w-[18px] h-[11px] top-px left-2.5"
                    alt="Group"
                    src="/figmaAssets/group-5.png"
                  />
                </div>
              </div>
            </div>

            {/* Social media icons */}
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                className="w-[38px] h-6"
                alt={icon.alt}
                src={icon.src}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
