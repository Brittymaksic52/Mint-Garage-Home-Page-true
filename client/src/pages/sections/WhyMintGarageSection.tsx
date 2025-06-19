import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Heart, Wrench } from "lucide-react";

export const WhyMintGarageSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const whyMintFeatures = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "EXPERTISE",
      description: "Years of specialized knowledge in garage transformations, from design to execution.",
      stats: "50+ Projects Completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "EXPERIENCE",
      description: "Proven track record of delivering exceptional garage makeovers that exceed expectations.",
      stats: "5+ Years in Business",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "CRAFTSMANSHIP",
      description: "Meticulous attention to detail in every installation, ensuring quality that lasts.",
      stats: "100% Quality Guarantee",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "PASSION",
      description: "Genuine enthusiasm for transforming spaces and creating dream garages for every client.",
      stats: "Every Project Matters",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CUSTOMER SATISFACTION",
      description: "Dedicated to building lasting relationships through exceptional service and results.",
      stats: "5-Star Reviews",
      color: "from-yellow-500 to-amber-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        WHY MINT
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-wide">
            WHY CHOOSE MINT GARAGE?
          </h2>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Discover what sets us apart in the garage transformation industry. 
            Our commitment to excellence drives everything we do.
          </p>
        </div>

        {/* Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {whyMintFeatures.map((feature, index) => (
            <Card 
              key={index}
              className={`
                bg-gradient-to-br from-gray-800 to-gray-900 
                rounded-xl border border-gray-700 
                transition-all duration-300 hover:shadow-2xl
                ${hoveredCard === index ? 'transform scale-105 border-green-400' : ''}
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8 text-center">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white transition-all duration-300 ${
                  hoveredCard === index ? 'transform rotate-12 scale-110' : ''
                }`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-xl mb-4 tracking-wide">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${feature.color} text-white border-none px-4 py-2 font-semibold`}
                >
                  {feature.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8">
            <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-4">
              Ready to Transform Your Garage?
            </h3>
            <p className="font-['Montserrat',Helvetica] font-normal text-white text-lg opacity-90 mb-6">
              Join the Mint Fam and experience the difference quality craftsmanship makes.
            </p>
            <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              GET YOUR FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};