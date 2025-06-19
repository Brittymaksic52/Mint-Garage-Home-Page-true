import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, Star, Award } from "lucide-react";

export const BeforeAfterSection = (): JSX.Element => {
  const [activeProject, setActiveProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
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

  const projects = [
    {
      id: 1,
      title: "Modern Family Garage",
      location: "Toronto, ON",
      beforeImage: "/figmaAssets/mask-group-3.png",
      afterImage: "/figmaAssets/mask-group-4.png",
      description: "Complete transformation with epoxy flooring, custom cabinets, and wall storage systems",
      duration: "3 Days",
      rating: 5.0,
      testimonial: "Absolutely incredible transformation! Our garage went from chaos to organized paradise."
    },
    {
      id: 2,
      title: "Luxury Car Enthusiast Space",
      location: "Mississauga, ON",
      beforeImage: "/figmaAssets/mask-group-5.png",
      afterImage: "/figmaAssets/mask-group-6.png",
      description: "Premium epoxy floor, car lift installation, and professional-grade lighting",
      duration: "5 Days",
      rating: 5.0,
      testimonial: "The quality exceeded our expectations. It's now our favorite space in the house!"
    },
    {
      id: 3,
      title: "Workshop & Storage Solution",
      location: "Oakville, ON",
      beforeImage: "/figmaAssets/mask-group-7.png",
      afterImage: "/figmaAssets/mask-group-3.png",
      description: "Comprehensive storage system with workbench, tool organization, and overhead storage",
      duration: "4 Days",
      rating: 5.0,
      testimonial: "Amazing attention to detail. Every tool has its place and the space is so functional."
    }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  const currentProject = projects[activeProject];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        GALLERY
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#8dc049]/20 border border-[#8dc049]/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Award className="w-4 h-4 text-[#8dc049]" />
            <span className="text-[#8dc049] font-['Montserrat',Helvetica] font-semibold text-sm">
              OUR TRANSFORMATIONS
            </span>
          </div>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-5xl tracking-wide mb-4">
            BEFORE & AFTER
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Witness the incredible transformations we've created for our clients. See how we turn ordinary garages into extraordinary spaces.
          </p>
        </div>

        {/* Main before/after container */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-800 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Interactive before/after slider */}
          <div className="relative">
            <div 
              ref={sliderRef}
              className="relative w-full h-[500px] rounded-2xl overflow-hidden cursor-pointer select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Before image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${currentProject.beforeImage})` }}
              >
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BEFORE
                </div>
              </div>

              {/* After image with clip-path */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-200"
                style={{ 
                  backgroundImage: `url(${currentProject.afterImage})`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              >
                <div className="absolute top-4 right-4 bg-[#8dc049] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  AFTER
                </div>
              </div>

              {/* Slider handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="w-1 h-4 bg-gray-400 rounded-full mr-0.5"></div>
                  <div className="w-1 h-4 bg-gray-400 rounded-full ml-0.5"></div>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-4 text-gray-400 text-sm">
              Drag the slider to reveal the transformation
            </div>
          </div>

          {/* Project details */}
          <div className="space-y-6">
            <div>
              <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl mb-2">
                {currentProject.title}
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#8dc049] font-semibold">{currentProject.location}</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8dc049] text-[#8dc049]" />
                  ))}
                  <span className="text-white ml-2">{currentProject.rating}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              {currentProject.description}
            </p>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center gap-2 mb-3">
                <Play className="w-5 h-5 text-[#8dc049]" />
                <span className="text-white font-semibold">Client Testimonial</span>
              </div>
              <blockquote className="text-gray-300 italic">
                "{currentProject.testimonial}"
              </blockquote>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8dc049]">{currentProject.duration}</div>
                <div className="text-gray-400 text-sm">Completion Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8dc049]">100%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-[#8dc049] to-[#b8d66b] hover:from-[#7daf3a] hover:to-[#a6c65a] text-white font-['Montserrat',Helvetica] font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 group">
              VIEW FULL PROJECT
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Project navigation */}
        <div className={`flex justify-center gap-4 transition-all duration-800 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`cursor-pointer transition-all duration-300 ${
                activeProject === index 
                  ? 'border-[#8dc049] bg-[#8dc049]/10' 
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
              }`}
              onClick={() => setActiveProject(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.afterImage})` }}
                  ></div>
                  <div>
                    <div className={`font-semibold text-sm ${
                      activeProject === index ? 'text-[#8dc049]' : 'text-white'
                    }`}>
                      {project.title}
                    </div>
                    <div className="text-gray-400 text-xs">{project.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};