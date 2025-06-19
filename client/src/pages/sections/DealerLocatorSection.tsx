import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Star, ExternalLink } from "lucide-react";

interface DealerLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  rating: number;
  reviews: number;
  services: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  distance?: number;
}

export const DealerLocatorSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDealer, setSelectedDealer] = useState<DealerLocation | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [nearestDealer, setNearestDealer] = useState<DealerLocation | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          getUserLocation();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const dealers: DealerLocation[] = [
    {
      id: 1,
      name: "Mint Garage Toronto",
      address: "123 King Street West",
      city: "Toronto",
      province: "ON",
      postalCode: "M5H 3T9",
      phone: "(416) 555-0123",
      email: "toronto@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "10:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      rating: 4.9,
      reviews: 127,
      services: ["Complete Garage Makeovers", "Flooring Installation", "Storage Solutions", "Design Consultation"],
      coordinates: { lat: 43.6532, lng: -79.3832 }
    },
    {
      id: 2,
      name: "Mint Garage Barrie",
      address: "456 Dunlop Street East",
      city: "Barrie",
      province: "ON",
      postalCode: "L4M 1A5",
      phone: "(705) 555-0456",
      email: "barrie@mintgarage.ca",
      hours: {
        weekdays: "8:30 AM - 5:30 PM",
        saturday: "9:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      rating: 4.8,
      reviews: 89,
      services: ["Garage Organization", "Wall Systems", "Epoxy Flooring", "Ceiling Storage"],
      coordinates: { lat: 44.3894, lng: -79.6903 }
    },
    {
      id: 3,
      name: "Mint Garage Sudbury",
      address: "789 Elm Street",
      city: "Sudbury",
      province: "ON",
      postalCode: "P3C 1T8",
      phone: "(705) 555-0789",
      email: "sudbury@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "10:00 AM - 4:00 PM",
        sunday: "12:00 PM - 4:00 PM"
      },
      rating: 4.7,
      reviews: 156,
      services: ["Swiss Trax Flooring", "Custom Cabinetry", "Lighting Solutions", "Tool Organization"],
      coordinates: { lat: 46.4917, lng: -80.9930 }
    },
    {
      id: 4,
      name: "Mint Garage Windsor",
      address: "321 Ouellette Avenue",
      city: "Windsor",
      province: "ON",
      postalCode: "N9A 1B2",
      phone: "(519) 555-0321",
      email: "windsor@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      rating: 4.6,
      reviews: 73,
      services: ["Garage Conversions", "Insulation Services", "Smart Storage", "Paint & Coatings"],
      coordinates: { lat: 42.3149, lng: -83.0364 }
    },
    {
      id: 5,
      name: "Mint Garage London",
      address: "654 Richmond Street",
      city: "London",
      province: "ON",
      postalCode: "N6A 3G1",
      phone: "(519) 555-0654",
      email: "london@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "9:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      rating: 4.8,
      reviews: 112,
      services: ["Complete Transformations", "Premium Flooring", "Custom Storage", "Lighting Systems"],
      coordinates: { lat: 42.9849, lng: -81.2453 }
    },
    {
      id: 6,
      name: "Mint Garage Niagara",
      address: "987 Queen Street",
      city: "Niagara Falls",
      province: "ON",
      postalCode: "L2E 2L2",
      phone: "(905) 555-0987",
      email: "niagara@mintgarage.ca",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "10:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      rating: 4.9,
      reviews: 95,
      services: ["Epoxy Coatings", "Wall Organization", "Overhead Storage", "Climate Control"],
      coordinates: { lat: 43.0896, lng: -79.0849 }
    },
    {
      id: 7,
      name: "Mint Garage Kingston",
      address: "147 Princess Street",
      city: "Kingston",
      province: "ON",
      postalCode: "K7L 1A8",
      phone: "(613) 555-0147",
      email: "kingston@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 5:30 PM",
        saturday: "9:00 AM - 4:00 PM",
        sunday: "Closed"
      },
      rating: 4.7,
      reviews: 84,
      services: ["Garage Makeovers", "Storage Solutions", "Flooring Installation", "Design Services"],
      coordinates: { lat: 44.2312, lng: -76.4860 }
    }
  ];

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(userCoords);
          findNearestDealer(userCoords);
        },
        (error) => {
          console.log("Location access denied or unavailable");
          const defaultLocation = { lat: 43.6532, lng: -79.3832 };
          setUserLocation(defaultLocation);
          findNearestDealer(defaultLocation);
        }
      );
    }
  };

  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const findNearestDealer = (userCoords: {lat: number, lng: number}) => {
    const dealersWithDistance = dealers.map(dealer => ({
      ...dealer,
      distance: calculateDistance(userCoords.lat, userCoords.lng, dealer.coordinates.lat, dealer.coordinates.lng)
    }));

    const nearest = dealersWithDistance.reduce((prev, current) => 
      (prev.distance! < current.distance!) ? prev : current
    );

    setNearestDealer(nearest);
    setSelectedDealer(nearest);
  };

  const handleDealerSelect = (dealer: DealerLocation) => {
    setSelectedDealer(dealer);
  };

  const getMarkerPosition = (city: string) => {
    switch(city) {
      case 'Toronto': return { left: '65%', top: '75%' };
      case 'Barrie': return { left: '62%', top: '68%' };
      case 'Sudbury': return { left: '50%', top: '35%' };
      case 'Windsor': return { left: '35%', top: '85%' };
      case 'London': return { left: '45%', top: '80%' };
      case 'Niagara Falls': return { left: '70%', top: '82%' };
      case 'Kingston': return { left: '75%', top: '70%' };
      default: return { left: '50%', top: '50%' };
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        LOCATIONS
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4 tracking-wide">
            FIND YOUR NEAREST DEALER
          </h2>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Locate authorized Mint Garage dealers across Ontario. Get expert consultation, 
            professional installation, and ongoing support from our certified partners.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          
          {/* Interactive Map */}
          <div className="order-2 lg:order-1">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                {/* Map Container */}
                <div className="relative h-[500px] bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden">
                  {/* Ontario Map Illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg 
                      viewBox="0 0 500 400" 
                      className="w-full h-full opacity-20"
                      fill="none"
                    >
                      {/* Accurate Ontario outline based on reference image */}
                      <path 
                        d="M80 50 L120 45 L160 40 L200 35 L240 30 L280 35 L320 40 L360 50 L390 70 L420 100 L440 130 L450 160 L455 190 L460 220 L455 250 L445 280 L430 310 L410 340 L385 365 L355 380 L320 390 L280 395 L240 390 L200 385 L160 375 L120 360 L90 340 L70 315 L55 285 L50 250 L55 220 L50 190 L45 160 L40 130 L35 100 L40 70 L50 50 L65 40 Z" 
                        stroke="rgba(34, 197, 94, 0.3)" 
                        strokeWidth="2" 
                        fill="rgba(34, 197, 94, 0.1)"
                      />
                      {/* Hudson Bay area (northern indent) */}
                      <path 
                        d="M200 35 L240 30 L280 35 L300 25 L320 20 L340 25 L360 35 L360 50 L340 45 L320 40 L300 45 L280 50 L240 45 L200 40 Z" 
                        stroke="rgba(34, 197, 94, 0.3)" 
                        strokeWidth="2" 
                        fill="rgba(34, 197, 94, 0.1)"
                      />
                      {/* Great Lakes indentations */}
                      <path 
                        d="M385 365 L355 380 L320 390 L290 385 L270 375 L250 365 L240 350 L250 340 L270 330 L300 335 L330 345 L360 355 Z" 
                        stroke="rgba(34, 197, 94, 0.3)" 
                        strokeWidth="2" 
                        fill="rgba(34, 197, 94, 0.1)"
                      />
                    </svg>
                  </div>

                  {/* Dealer Markers */}
                  {dealers.map((dealer) => {
                    const position = getMarkerPosition(dealer.city);
                    
                    return (
                      <div
                        key={dealer.id}
                        className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                          selectedDealer?.id === dealer.id ? 'scale-125 z-10' : 'hover:scale-110'
                        }`}
                        style={{
                          left: position.left,
                          top: position.top
                        }}
                        onClick={() => handleDealerSelect(dealer)}
                      >
                        <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                          selectedDealer?.id === dealer.id 
                            ? 'bg-green-400 border-green-300 shadow-lg shadow-green-400/50' 
                            : 'bg-red-500 border-red-400 hover:bg-red-400'
                        }`}>
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        
                        <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-all duration-300 ${
                          selectedDealer?.id === dealer.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}>
                          {dealer.city}
                        </div>
                      </div>
                    );
                  })}

                  {/* User Location Indicator */}
                  {userLocation && nearestDealer && (
                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold">
                      <Navigation className="w-4 h-4 inline mr-1" />
                      Nearest: {nearestDealer.city} ({nearestDealer.distance?.toFixed(1)} km)
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dealer Details */}
          <div className="order-1 lg:order-2">
            {selectedDealer ? (
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 h-[500px]">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-2">
                        {selectedDealer.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < selectedDealer.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-gray-300 text-sm">
                          {selectedDealer.rating} ({selectedDealer.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    {selectedDealer.id === nearestDealer?.id && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        NEAREST
                      </div>
                    )}
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300">
                        <p>{selectedDealer.address}</p>
                        <p>{selectedDealer.city}, {selectedDealer.province} {selectedDealer.postalCode}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <a href={`tel:${selectedDealer.phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {selectedDealer.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300 text-sm">
                        <p><span className="font-semibold">Mon-Fri:</span> {selectedDealer.hours.weekdays}</p>
                        <p><span className="font-semibold">Saturday:</span> {selectedDealer.hours.saturday}</p>
                        <p><span className="font-semibold">Sunday:</span> {selectedDealer.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-['Montserrat',Helvetica] font-semibold text-white text-lg mb-3">
                      Services Available
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedDealer.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      CALL NOW
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white font-semibold py-3 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      GET DIRECTIONS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 h-[500px]">
                <CardContent className="p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">
                      Select a location on the map to view details
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Dealer List */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="font-['Montserrat',Helvetica] font-bold text-white text-2xl mb-8 text-center">
            All Ontario Locations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealers.map((dealer) => (
              <Card 
                key={dealer.id}
                className={`
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  rounded-xl border cursor-pointer
                  transition-all duration-300 hover:shadow-xl
                  ${selectedDealer?.id === dealer.id ? 'border-green-400 transform scale-105' : 'border-gray-700 hover:border-gray-600'}
                `}
                onClick={() => handleDealerSelect(dealer)}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-['Montserrat',Helvetica] font-semibold text-white text-lg mb-2">
                    {dealer.city}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {dealer.address}
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < dealer.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-500'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs">
                    {dealer.reviews} reviews
                  </p>
                  {dealer.distance && (
                    <p className="text-green-400 text-sm font-semibold mt-2">
                      {dealer.distance.toFixed(1)} km away
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};