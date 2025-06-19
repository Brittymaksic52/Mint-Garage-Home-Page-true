import React from "react";

export const MainHeaderSection = (): JSX.Element => {
  // Social media data for mapping
  const socialIcons = [
    {
      name: "Facebook",
      icon: "/figmaAssets/group.png",
      alt: "FacebookIcon icon",
    },
    {
      name: "Twitter",
      icon: "/figmaAssets/vector-27.svg",
      alt: "Twitter icon",
    },
    {
      name: "Instagram",
      icon: "/figmaAssets/vector-2.svg",
      alt: "InstagramIcon icon",
    },
    {
      name: "Social1",
      icon: "/figmaAssets/vector-8.svg",
      alt: "Social media icon",
      hasBackground: true,
    },
    {
      name: "Social2",
      icon: "/figmaAssets/vector-1.svg",
      alt: "Social media icon",
      hasBackground: true,
    },
    {
      name: "Social3",
      icon: "/figmaAssets/mask-group-1.png",
      alt: "Social media icon",
      hasBackground: true,
    },
    {
      name: "Social4",
      icon: "/figmaAssets/mask-group-2.png",
      alt: "Social media icon",
      hasBackground: true,
    },
  ];

  return (
    <header className="w-full h-[45px] bg-black flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="flex items-center gap-4 md:gap-10">
        {/* PhoneIcon number */}
        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] bg-[url(/figmaAssets/phone-alt.svg)] bg-[100%_100%]" />
          <span className="font-['Montserrat',Helvetica] font-semibold text-white text-sm md:text-base hidden sm:block">
            1-888-901-6468
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <img
            className="w-5 h-3.5"
            alt="Email icon"
            src="/figmaAssets/group-1.png"
          />
          <span className="font-['Montserrat',Helvetica] font-semibold text-white text-sm md:text-base hidden md:block">
            info@mintgarage.ca
          </span>
        </div>
      </div>

      {/* Social media icons */}
      <div className="flex items-center gap-1.5 md:gap-2.5">
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className={`relative w-[30px] h-[30px] ${icon.hasBackground ? "bg-white rounded-[15px]" : ""}`}
          >
            <img
              className={`${icon.hasBackground ? "absolute top-1.5 left-1.5 w-[18px] h-[18px]" : "relative w-[30px] h-[30px]"}`}
              alt={icon.alt}
              src={icon.icon}
            />
          </div>
        ))}
      </div>
    </header>
  );
};
