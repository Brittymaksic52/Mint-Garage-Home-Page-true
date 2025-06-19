import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Star } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url(/figmaAssets/mask-group.png)] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-[#8dc049]/20 border border-[#8dc049]/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-[#8dc049] fill-current" />
            <span className="text-[#8dc049] font-['Montserrat',Helvetica] font-semibold text-sm">
              PREMIUM GARAGE SOLUTIONS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-['Montserrat',Helvetica] mb-8">
            <span className="font-bold text-[#8dc049] text-4xl md:text-6xl lg:text-7xl leading-tight block">
              Transform Your Garage
            </span>
            <span className="font-bold text-white text-5xl md:text-7xl lg:text-8xl leading-tight block mt-2">
              Into Something
            </span>
            <span className="font-bold text-transparent bg-gradient-to-r from-[#8dc049] to-[#b8d66b] bg-clip-text text-5xl md:text-7xl lg:text-8xl leading-tight block">
              Extraordinary
            </span>
          </h1>

          {/* Description */}
          <p className="font-['Montserrat',Helvetica] font-medium text-gray-200 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            Experience the ultimate garage transformation with our premium services: 
            custom epoxy flooring, sophisticated slat wall systems, premium cabinets, 
            and innovative storage solutions that redefine your space.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button className="bg-gradient-to-r from-[#8dc049] to-[#b8d66b] hover:from-[#7daf3a] hover:to-[#a6c65a] text-white font-['Montserrat',Helvetica] font-bold text-lg px-8 py-6 h-auto rounded-full shadow-2xl shadow-[#8dc049]/25 transition-all duration-300 hover:scale-105 group">
              GET FREE CONSULTATION
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-['Montserrat',Helvetica] font-semibold text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 group">
              <PlayCircle className="mr-2 w-5 h-5" />
              WATCH OUR WORK
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8dc049] font-['Montserrat',Helvetica]">500+</div>
              <div className="text-white/80 font-['Montserrat',Helvetica] font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8dc049] font-['Montserrat',Helvetica]">15+</div>
              <div className="text-white/80 font-['Montserrat',Helvetica] font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#8dc049] font-['Montserrat',Helvetica]">98%</div>
              <div className="text-white/80 font-['Montserrat',Helvetica] font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-gray-100/20 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#8dc049]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#8dc049]/5 rounded-full blur-2xl"></div>
      
      {/* Smooth transition wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
};
