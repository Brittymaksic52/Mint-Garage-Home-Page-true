import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const TopHeaderSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "HOME", active: true },
    { label: "SHOP BY CATEGORY", hasDropdown: true },
    { label: "MINT GALLERY" },
    { label: "MINT BLOGS" },
    { label: "ABOUT US" },
    { label: "CONTACT US" },
  ];

  return (
    <header className="w-full py-10 px-[90px] flex items-center justify-between">
      {/* Logo */}
      <img
        className="h-[72px] w-[241px] object-cover"
        alt="Logo fixed height"
        src="/figmaAssets/logo-fixed-height-2411f27b-777b-4ddd-b5ae-f205ab434a1f-1.png"
      />

      {/* Navigation Menu */}
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="flex items-center gap-[27px]">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.hasDropdown ? (
                <div className="flex items-center gap-1">
                  <span className="font-['Montserrat',Helvetica] font-medium text-sm">
                    {item.label}
                  </span>
                  <ChevronDownIcon className="h-2 w-[13px]" />
                </div>
              ) : (
                <span
                  className={`font-['Montserrat',Helvetica] font-medium text-sm ${
                    item.active ? "text-[#629b44]" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Icons */}
      <div className="flex items-center gap-6 h-6">
        <img
          className="w-[21px] h-[22px]"
          alt="Search icon"
          src="/figmaAssets/group--1.png"
        />
        <img
          className="w-[23px] h-6"
          alt="User account icon"
          src="/figmaAssets/group-.png"
        />
        <img
          className="w-[19px] h-6"
          alt="Shopping cart"
          src="/figmaAssets/vector.svg"
        />
      </div>
    </header>
  );
};
