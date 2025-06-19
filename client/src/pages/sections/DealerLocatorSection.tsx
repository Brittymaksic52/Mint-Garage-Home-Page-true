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
      name: "Mint Garage Ottawa",
      address: "456 Bank Street",
      city: "Ottawa",
      province: "ON",
      postalCode: "K1S 3T5",
      phone: "(613) 555-0456",
      email: "ottawa@mintgarage.ca",
      hours: {
        weekdays: "8:30 AM - 5:30 PM",
        saturday: "9:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      rating: 4.8,
      reviews: 89,
      services: ["Garage Organization", "Wall Systems", "Epoxy Flooring", "Ceiling Storage"],
      coordinates: { lat: 45.4215, lng: -75.6972 }
    },
    {
      id: 3,
      name: "Mint Garage Hamilton",
      address: "789 James Street North",
      city: "Hamilton",
      province: "ON",
      postalCode: "L8L 1K1",
      phone: "(905) 555-0789",
      email: "hamilton@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 6:00 PM",
        saturday: "10:00 AM - 4:00 PM",
        sunday: "12:00 PM - 4:00 PM"
      },
      rating: 4.7,
      reviews: 156,
      services: ["Swiss Trax Flooring", "Custom Cabinetry", "Lighting Solutions", "Tool Organization"],
      coordinates: { lat: 43.2557, lng: -79.8711 }
    },
    {
      id: 4,
      name: "Mint Garage London",
      address: "321 Richmond Street",
      city: "London",
      province: "ON",
      postalCode: "N6A 3C2",
      phone: "(519) 555-0321",
      email: "london@mintgarage.ca",
      hours: {
        weekdays: "9:00 AM - 5:00 PM",
        saturday: "10:00 AM - 3:00 PM",
        sunday: "Closed"
      },
      rating: 4.6,
      reviews: 73,
      services: ["Garage Conversions", "Insulation Services", "Smart Storage", "Paint & Coatings"],
      coordinates: { lat: 42.9849, lng: -81.2453 }
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
          // Default to Toronto if location is unavailable
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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background text */}
      <div className={`absolute top-10 left-1/2 -translate-x-1/2 opacity-5 font-['Montserrat',Helvetica] font-bold text-white text-[140px] tracking-[5.60px] leading-none z-0 select-none transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-5' : 'translate-y-10 opacity-0'
      }`}>
        LOCATIONS
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6">
        {/* Section heading */}
        <div className={`text-center mb-16 transition-all duration-800 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-[48px] mb-4 tracking-wide">
            FIND YOUR NEAREST DEALER
          </h2>
          <p className="font-['Montserrat',Helvetica] font-normal text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Locate authorized Mint Garage dealers across Ontario. Get expert consultation, 
            professional installation, and ongoing support from our certified partners.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 delay-400 ${
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
                      viewBox="0 0 400 300" 
                      className="w-full h-full opacity-20"
                      fill="none"
                    >
                      {/* Simplified Ontario outline */}
                      <path 
                        d="M50 150 L80 100 L150 80 L200 90 L280 100 L320 120 L350 150 L340 200 L300 230 L250 240 L200 235 L150 225 L100 210 L70 180 Z" 
                        stroke="rgba(34, 197, 94, 0.3)" 
                        strokeWidth="2" 
                        fill="rgba(34, 197, 94, 0.1)"
                      />
                    </svg>
                  </div>

                  {/* Dealer Markers */}
                  {dealers.map((dealer, index) => (
                    <div
                      key={dealer.id}
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        selectedDealer?.id === dealer.id ? 'scale-125 z-10' : 'hover:scale-110'
                      }`}
                      style={{
                        left: `${20 + (index * 80)}px`,
                        top: `${100 + (index % 2 * 80)}px`
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
                      
                      {/* Dealer Label */}
                      <div className={`absolute top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 text-white px-2 py-1 rounded text-xs whitespace-nowrap transition-all duration-300 ${
                        selectedDealer?.id === dealer.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}>
                        {dealer.city}
                      </div>
                    </div>
                  ))}

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