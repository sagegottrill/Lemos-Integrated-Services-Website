import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 ml-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Hero Section - Inspired by Kevin Spacey design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
                Lemos
                <span className="block text-red-600">Integrated</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-700 leading-relaxed">
                  We're all stories of our own business excellence.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lemos Integrated Services has been Nigeria's trusted partner in business excellence, 
                  delivering comprehensive solutions across multiple sectors. From our headquarters in 
                  Maiduguri, we've built a reputation for quality, reliability, and innovation that 
                  spans over a decade of dedicated service.
                </p>
              </div>
              
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Modern office building representing Nigerian business excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Nigerian Excellence</h3>
                  <p className="text-white/90">Integrated Business Solutions</p>
                </div>
                
                {/* Red accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">ABOUT LEMOS</h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Born in Maiduguri, Nigeria, Lemos Integrated Services emerged from a vision to bridge 
                  local expertise with global standards. Our founder, Mrs. Mariama Lemos, established 
                  the company with a clear mission: to provide exceptional integrated business services 
                  that drive sustainable growth and success.
                </p>
                
                <p>
                  From humble beginnings, we've grown into a trusted partner for businesses across Nigeria 
                  and beyond. Our comprehensive approach encompasses general contracts and merchandise, 
                  import and export operations, consultancy services, and general supply solutions.
                </p>
                
                <p>
                  What sets us apart is our unwavering commitment to quality, reliability, and innovation. 
                  We don't just deliver services; we build lasting relationships and contribute to 
                  Nigeria's economic development through every project we undertake.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              {/* Signature */}
              <div className="text-center">
                <div className="text-4xl font-script text-red-600 mb-4">Lemos</div>
                <p className="text-sm text-gray-600">Founder & CEO Signature</p>
              </div>
              
              {/* Stats */}
              <div className="space-y-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">BN 3160134</div>
                  <div className="text-sm text-gray-600">Registration Number</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">Maiduguri</div>
                  <div className="text-sm text-gray-600">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center bg-gray-900 rounded-3xl p-12 text-white">
          <blockquote className="text-3xl md:text-4xl font-bold mb-6 italic">
            "I LOVE DOING BUSINESS."
          </blockquote>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">EXCELLENCE</h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Excellence isn't just our standard—it's our promise. Every project, every partnership, 
              every solution we deliver reflects our commitment to raising the bar and showcasing 
              Nigeria's potential to the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};