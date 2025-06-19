import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Youtube, Calendar, Eye } from "lucide-react";

export const MintMyGarageSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
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

  const youtubeVideos = [
    {
      id: 1,
      title: "Complete Garage Makeover - From Chaos to Organization",
      description: "Watch as we transform a cluttered garage into a perfectly organized space with custom storage solutions.",
      thumbnail: "/figmaAssets/video-thumbnail-1.jpg",
      duration: "15:32",
      views: "25K",
      uploadDate: "2 weeks ago",
      featured: true
    },
    {
      id: 2,
      title: "Installing Swiss Trax Flooring - Step by Step",
      description: "Complete guide to installing professional garage flooring that transforms any space instantly.",
      thumbnail: "/figmaAssets/video-thumbnail-2.jpg",
      duration: "12:45",
      views: "18K",
      uploadDate: "1 month ago",
      featured: false
    },
    {
      id: 3,
      title: "Custom Wall Storage System Build",
      description: "Building a custom wall-mounted storage system that maximizes every inch of garage space.",
      thumbnail: "/figmaAssets/video-thumbnail-3.jpg",
      duration: "20:15",
      views: "32K",
      uploadDate: "3 weeks ago",
      featured: false
    },
    {
      id: 4,
      title: "Garage Ceiling Storage Solutions",
      description: "Utilizing overhead space with professional ceiling storage systems and safety considerations.",
      thumbnail: "/figmaAssets/video-thumbnail-4.jpg",
      duration: "8:22",
      views: "14K",
      uploadDate: "1 week ago",
      featured: false
    }
  ];

  const featuredVideo = youtubeVideos.find(video => video.featured);
  const otherVideos = youtubeVideos.filter(video => !video.featured);

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        YOUTUBE
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Youtube className="w-12 h-12 text-red-500" />
            <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[48px] tracking-wide">
              MINT MY GARAGE
            </h2>
          </div>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Follow our YouTube series where we showcase real garage transformations, 
            share expert tips, and give you behind-the-scenes access to our process.
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <Card 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredVideo(0)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video Thumbnail */}
                <div className="relative group cursor-pointer">
                  <div className="aspect-video bg-gray-700 rounded-l-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                      {/* Play Button Overlay */}
                      <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-all duration-300 ${
                        hoveredVideo === 0 ? 'bg-opacity-20' : ''
                      }`}>
                        <div className={`w-20 h-20 bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredVideo === 0 ? 'scale-110 bg-red-400' : ''
                        }`}>
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm font-semibold">
                        {featuredVideo.duration}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                    <span className="text-gray-400 text-sm">Latest Episode</span>
                  </div>
                  
                  <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-4 leading-tight">
                    {featuredVideo.title}
                  </h3>
                  
                  <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-base leading-relaxed mb-6">
                    {featuredVideo.description}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-gray-400 text-sm">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredVideo.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredVideo.uploadDate}
                    </div>
                  </div>

                  <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 w-fit">
                    <Play className="w-4 h-4 mr-2" />
                    WATCH NOW
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Other Videos Grid */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-8 text-center">
            More Episodes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVideos.map((video, index) => (
              <Card 
                key={video.id}
                className={`
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-xl border border-gray-700 
                  transition-all duration-300 hover:shadow-xl cursor-pointer
                  ${hoveredVideo === video.id ? 'transform scale-105 border-red-400' : ''}
                `}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="relative">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gray-700 rounded-t-xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center relative">
                      {/* Play Button */}
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <div className={`w-12 h-12 bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredVideo === video.id ? 'scale-110' : ''
                        }`}>
                          <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs font-semibold">
                        {video.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h4 className="font-['Montserrat',Helvetica] font-semibold text-white text-base mb-2 line-clamp-2">
                    {video.title}
                  </h4>
                  
                  <p className="font-['Montserrat',Helvetica] font-normal text-gray-400 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-gray-500 text-xs">
                    <span>{video.views} views</span>
                    <span>{video.uploadDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-xl p-8">
            <Youtube className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-4">
              Subscribe to Mint My Garage
            </h3>
            <p className="font-['Montserrat',Helvetica] font-normal text-white text-lg opacity-90 mb-6">
              Don't miss our latest garage transformation videos, tips, and behind-the-scenes content.
            </p>
            <Button className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <ExternalLink className="w-4 h-4 mr-2" />
              SUBSCRIBE ON YOUTUBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};