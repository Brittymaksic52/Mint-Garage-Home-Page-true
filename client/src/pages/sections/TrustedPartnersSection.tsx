import React, { useState, useEffect, useRef } from "react";

export const TrustedPartnersSection = (): JSX.Element => {
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

  const partnerLogos = [
    {
      src: "/figmaAssets/mask-group-8.png",
      alt: "Partner Logo 1",
      width: "140px",
      height: "92px",
    },
    {
      src: "/figmaAssets/image-3.png",
      alt: "Partner Logo 2",
      width: "142px",
      height: "92px",
    },
    {
      src: "/figmaAssets/image-4.png",
      alt: "Partner Logo 3",
      width: "143px",
      height: "92px",
    },
    {
      src: "/figmaAssets/image-5.png",
      alt: "Partner Logo 4",
      width: "112px",
      height: "73px",
    },
    {
      src: "/figmaAssets/image.png",
      alt: "Partner Logo 5",
      width: "140px",
      height: "91px",
    },
    {
      src: "/figmaAssets/image-1.png",
      alt: "Partner Logo 6",
      width: "142px",
      height: "92px",
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
        PARTNERS
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[48px] mb-4 tracking-wide">
            TRUSTED PARTNERS
          </h2>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We work with industry-leading brands to bring you the highest quality 
            garage transformation products and solutions.
          </p>
        </div>

        {/* Partner Logos Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer"
              style={{ 
                minWidth: "120px", 
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                style={{ width: logo.width, height: logo.height }}
                alt={logo.alt}
                src={logo.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};