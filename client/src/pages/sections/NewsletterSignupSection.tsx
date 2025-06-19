import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSignupSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive updates about garage transformations and special offers.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-[#8dc049]/20 border border-[#8dc049]/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
            <Mail className="w-4 h-4 text-[#8dc049]" />
            <span className="text-[#8dc049] font-['Montserrat',Helvetica] font-semibold text-sm">
              STAY UPDATED
            </span>
          </div>
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-6">
            GET GARAGE INSPIRATION
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of homeowners transforming their garages. Get exclusive tips, before & after showcases, 
            special offers, and early access to new products delivered to your inbox.
          </p>
        </div>

        {/* Newsletter Card */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <Card className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-lg border border-gray-600/50 rounded-2xl shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 font-['Montserrat',Helvetica] text-lg rounded-xl focus:border-[#8dc049] focus:ring-[#8dc049]"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 px-8 bg-gradient-to-r from-[#8dc049] to-[#b8d66b] hover:from-[#7daf3a] hover:to-[#a6c65a] text-white font-['Montserrat',Helvetica] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Subscribe Now
                      </div>
                    )}
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8dc049]" />
                    <span>Weekly garage tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8dc049]" />
                    <span>Exclusive offers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#8dc049]" />
                    <span>No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8dc049] mb-2">15K+</div>
            <div className="text-gray-400 font-['Montserrat',Helvetica]">Happy Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8dc049] mb-2">Weekly</div>
            <div className="text-gray-400 font-['Montserrat',Helvetica]">Garage Transformations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#8dc049] mb-2">Exclusive</div>
            <div className="text-gray-400 font-['Montserrat',Helvetica]">Member Offers</div>
          </div>
        </div>
      </div>
    </section>
  );
};