import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  return (
    <section className="w-full max-w-7xl mx-auto py-16">
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-['Montserrat',Helvetica] font-bold text-black text-[40px] text-center tracking-[0] leading-[51px] mb-4">
          TESTIMONIALS
        </h2>
        <p className="font-['Montserrat',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-6 max-w-4xl">
          Meet the Mint Fam — homeowners who turned cluttered garages into dream
          spaces. They&apos;re more than clients; they&apos;re family. Check out
          their stories to get inspired and see how Mint Garage can do the same
          for you!
        </p>
      </div>

      <Carousel className="w-full">
        <CarouselContent className="px-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/3 lg:basis-1/3"
            >
              <Card className="bg-[#f9f9f9] rounded-[11px] h-[393px]">
                <CardContent className="p-4 h-full relative">
                  <img
                    className="w-[57px] h-[57px] mb-4"
                    alt="Quote left"
                    src="/figmaAssets/quote-left.svg"
                  />

                  <div className="flex items-center gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img
                        key={i}
                        className="w-[15px] h-[15px]"
                        alt="Star"
                        src="/figmaAssets/star.svg"
                      />
                    ))}
                  </div>

                  <p className="font-['Montserrat',Helvetica] font-normal text-black text-sm tracking-[0] leading-[26px] mt-2">
                    {testimonial.text}
                  </p>

                  <div className="absolute bottom-4 left-3.5 flex items-center">
                    <img
                      className="w-[60px] h-[60px] object-cover"
                      alt={`${testimonial.author} profile`}
                      src={testimonial.image}
                    />
                    <div className="ml-[18px]">
                      <p className="font-['Montserrat',Helvetica] font-normal text-black text-xl tracking-[0] leading-[26px]">
                        {testimonial.author}
                      </p>
                      <p className="font-['Montserrat',Helvetica] font-normal text-black text-sm tracking-[0] leading-[26px]">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </section>
  );
};
