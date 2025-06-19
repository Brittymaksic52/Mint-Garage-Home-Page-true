import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X, Search, User, ShoppingCart, ChevronRight } from "lucide-react";

export const NavigationSidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", active: true },
    { label: "SHOP BY CATEGORY", hasSubmenu: true },
    { label: "MINT GALLERY" },
    { label: "MINT BLOGS" },
    { label: "ABOUT US" },
    { label: "CONTACT US" },
  ];

  return (
    <>
      {/* Floating Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed top-6 left-6 z-50 bg-black/80 border-white/20 text-white hover:bg-black/90 hover:text-white backdrop-blur-sm"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="left" className="w-80 bg-black text-white border-r-white/20 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>Site navigation and menu options</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-full">
            {/* Header with Logo */}
            <div className="p-6 border-b border-white/20">
              <div className="flex items-center justify-between mb-4">
                <img
                  className="h-12 w-auto object-contain"
                  alt="Mint Garage Logo"
                  src="/figmaAssets/logo-fixed-height-2411f27b-777b-4ddd-b5ae-f205ab434a1f-1.png"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[url(/figmaAssets/phone-alt.svg)] bg-contain" />
                  <span>1-888-901-6468</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white/70 rounded-sm flex items-center justify-center">
                    <span className="text-black text-xs">@</span>
                  </div>
                  <span>info@mintgarage.ca</span>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-6">
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-between text-left font-medium hover:bg-white/10 ${
                        item.active ? "text-[#8dc049] bg-white/5" : "text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasSubmenu && <ChevronRight className="h-4 w-4" />}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
              
              <Button className="w-full bg-[#8dc049] hover:bg-[#7daf3a] text-white font-medium">
                REQUEST CONSULTATION
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};