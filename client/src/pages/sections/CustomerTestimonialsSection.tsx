import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "It was a pleasure dealing with James from start to finish. We met, talked about the vision I had for the garage and he gave me his honest opinion throughout. We went with a Swiss tracks floor, black carbon slate wall and a roof mezzanine. I was blown away by the finished product. I'd highly recommend Mint for any garage transformation",
    author: "JDickson90",
    date: "December 10, 2024",
    image: "/figmaAssets/image-9.png",
  },
  {
    id: 2,
    rating: 5,
    text: "I had a great experience with James. His customer service was excellent. I will definitely purchase from here again, and I recommend this company highly. Thanks again James",
    author: "Anthony DeLazzari",
    date: "October 9, 2024",
    image: "/figmaAssets/image-10.png",
  },
  {
    id: 3,
    rating: 5,
    text: "When getting any work done small or big you look for three major things. Knowledge of work, being professional and price. I can honestly say that Mint went over and beyond my expectations. James and his team are exceptional and I'd refer them in a heart beat!",
    author: "Rishi Nanda",
    date: "September 8, 2024",
    image: "/figmaAssets/image-11.png",
  },
];

export const CustomerTestimonialsSection = (): JSX.Element => {
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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        REVIEWS
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with subtitle */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-wide">
            CUSTOMER TESTIMONIALS
          </h2>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Meet the Mint Fam — homeowners who turned cluttered garages into dream spaces. 
            They're more than clients; they're family. Check out their stories to get inspired.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`transition-all duration-1000 delay-400 overflow-visible ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <Carousel className="w-full overflow-visible">
            <CarouselContent className="px-8 pb-12" style={{ overflow: 'visible' }}>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 p-6"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className={`
                    bg-gradient-to-br from-gray-800 to-gray-900 
                    rounded-xl h-[420px] border border-gray-700 
                    transition-all duration-300 
                    ${hoveredCard === index ? 'transform scale-105 shadow-2xl border-green-400' : 'hover:shadow-xl'}
                  `}>
                    <CardContent className="p-6 h-full relative flex flex-col">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="w-8 h-8 text-green-400 opacity-60" />
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="font-['Montserrat',Helvetica] font-normal text-gray-200 text-sm leading-relaxed flex-grow mb-6">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <p className="font-['Montserrat',Helvetica] font-semibold text-white text-base">
                            {testimonial.author}
                          </p>
                          <p className="font-['Montserrat',Helvetica] font-normal text-gray-400 text-sm">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
            <CarouselNext className="right-4 bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
