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
        <div className={`relative transition-all duration-800 delay-400 overflow-visible ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <Carousel 
            className="w-full overflow-visible"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex pb-12 px-8" style={{ overflow: 'visible' }}>
              {categories.map((category, index) => (
                <CarouselItem
                  key={category.id}
                  className={`basis-[320px] flex-shrink-0 px-3 py-6 transition-all duration-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Card 
                    className={`w-full h-[420px] border-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group ${
                      hoveredCategory === index ? 'shadow-2xl' : 'shadow-lg'
                    }`}
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
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
            
            {/* Enhanced Navigation arrows */}
            <CarouselPrevious className="left-6 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-green-500 hover:to-green-400 border-2 border-gray-600 hover:border-green-400 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
            <CarouselNext className="right-6 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-green-500 hover:to-green-400 border-2 border-gray-600 hover:border-green-400 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" />
          </Carousel>
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
