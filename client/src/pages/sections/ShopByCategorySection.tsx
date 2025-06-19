import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, ChevronRight } from "lucide-react";

export const ShopByCategorySection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Category data for mapping
  const categories = [
    {
      id: 1,
      title: "GARAGE FLOORING",
      image: "/figmaAssets/mask-group-3.png",
      description: "Premium epoxy flooring solutions for durable, easy-to-clean garage floors",
      products: "25+ Products",
    },
    {
      id: 2,
      title: "GARAGE WALL STORAGE",
      image: "/figmaAssets/mask-group-4.png",
      description: "Innovative wall storage systems to maximize your garage space",
      products: "40+ Products",
    },
    {
      id: 3,
      title: "CAR LIFTS",
      image: "/figmaAssets/mask-group-5.png",
      description: "Professional-grade car lifts for automotive enthusiasts",
      products: "15+ Products",
    },
    {
      id: 4,
      title: "GARAGE CABINETS",
      image: "/figmaAssets/mask-group-6.png",
      description: "Custom cabinet solutions for organized garage storage",
      products: "30+ Products",
    },
    {
      id: 5,
      title: "SPECIALTY STORAGE RACKS",
      image: "/figmaAssets/mask-group-7.png",
      description: "Specialized racks for tools, sports equipment, and more",
      products: "20+ Products",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        CATEGORY
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Section heading with subtitle */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#8dc049]/20 border border-[#8dc049]/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <span className="text-[#8dc049] font-['Montserrat',Helvetica] font-semibold text-sm">
              EXPLORE OUR SOLUTIONS
            </span>
          </div>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-5xl tracking-wide mb-4">
            SHOP BY CATEGORY
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of garage transformation solutions, each designed to meet your specific needs and style preferences.
          </p>
        </div>

        {/* Category cards */}
        <div className={`relative transition-all duration-800 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <Carousel className="w-full">
            <CarouselContent className="flex gap-6 pb-4">
              {categories.map((category, index) => (
                <CarouselItem
                  key={category.id}
                  className={`flex-shrink-0 basis-auto pl-0 pr-0 transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Card 
                    className={`w-[320px] h-[420px] border-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                      hoveredCategory === index ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() => setActiveCategory(index)}
                  >
                    <CardContent className="p-0 h-full relative">
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden"
                        style={{
                          backgroundImage: `url(${category.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        
                        {/* Hover overlay */}
                        <div className={`absolute inset-0 bg-[#8dc049]/20 transition-opacity duration-300 ${
                          hoveredCategory === index ? 'opacity-100' : 'opacity-0'
                        }`}></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <div className="mb-3">
                            <span className="text-[#8dc049] font-['Montserrat',Helvetica] font-semibold text-sm">
                              {category.products}
                            </span>
                          </div>
                          <h3 className="font-['Montserrat',Helvetica] font-bold text-xl mb-3 leading-tight">
                            {category.title}
                          </h3>
                          <p className={`text-gray-200 text-sm leading-relaxed transition-all duration-300 ${
                            hoveredCategory === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                          }`}>
                            {category.description}
                          </p>
                          
                          {/* CTA Button */}
                          <Button 
                            className={`mt-4 bg-[#8dc049] hover:bg-[#7daf3a] text-white font-['Montserrat',Helvetica] font-semibold text-sm px-6 py-2 rounded-full transition-all duration-300 group-hover:translate-x-2 ${
                              hoveredCategory === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                          >
                            Explore More
                            <ChevronRight className="ml-1 w-4 h-4" />
                          </Button>
                        </div>

                        {/* Category number */}
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-white font-['Montserrat',Helvetica] font-bold text-sm">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows */}
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-gray-200 text-gray-700 hover:text-black" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-gray-200 text-gray-700 hover:text-black" />
          </Carousel>
        </div>

        {/* Interactive Category Slider */}
        <div className="mt-12">
          {/* Category Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full p-2 border border-gray-600">
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`relative px-6 py-3 rounded-full font-['Montserrat',Helvetica] font-semibold text-sm transition-all duration-300 ${
                      activeCategory === index 
                        ? "bg-[#8dc049] text-white shadow-lg scale-105" 
                        : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                    }`}
                  >
                    {category.title}
                    {activeCategory === index && (
                      <div className="absolute inset-0 rounded-full bg-[#8dc049]/20 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Category Display */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8dc049]/10 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl mb-2">
                    {categories[activeCategory].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {categories[activeCategory].description}
                  </p>
                </div>
                <div className="text-[#8dc049] font-bold text-lg">
                  {categories[activeCategory].products}
                </div>
              </div>

              {/* Category Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left side - Image placeholder */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-[#8dc049]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <div className="w-8 h-8 bg-[#8dc049] rounded-lg"></div>
                        </div>
                        <p className="text-gray-400 font-['Montserrat',Helvetica]">
                          {categories[activeCategory].title} Gallery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Features */}
                <div className="space-y-4">
                  <h4 className="font-['Montserrat',Helvetica] font-semibold text-white text-xl mb-4">
                    Key Features:
                  </h4>
                  <div className="space-y-3">
                    {[
                      `Premium ${categories[activeCategory].title.toLowerCase()} solutions`,
                      'Professional installation included',
                      'Customizable designs and colors',
                      'Lifetime warranty coverage',
                      'Expert consultation available'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#8dc049] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 font-['Montserrat',Helvetica]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Button className="bg-[#8dc049] hover:bg-[#7daf3a] text-white font-['Montserrat',Helvetica] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 group">
                      EXPLORE {categories[activeCategory].title.toUpperCase()}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={() => setActiveCategory((prev) => prev === 0 ? categories.length - 1 : prev - 1)}
              className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => setActiveCategory((prev) => prev === categories.length - 1 ? 0 : prev + 1)}
              className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {categories.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeCategory === index 
                      ? "w-8 bg-[#8dc049]" 
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-800 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <Button className="bg-gradient-to-r from-[#8dc049] to-[#b8d66b] hover:from-[#7daf3a] hover:to-[#a6c65a] text-white font-['Montserrat',Helvetica] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
            VIEW ALL CATEGORIES
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
