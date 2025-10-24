import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Quote, Play, Users } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 bg-white ml-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="block text-red-600">Visionary Leader</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving excellence and innovation in Nigerian business services
          </p>
        </div>

        {/* Main Leadership Section - Inspired by Kevin Spacey layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[3/4] relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional businesswoman representing Mrs. Mariama Lemos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-bold">Mrs. Mariama Lemos</h3>
                  <p className="text-red-100">Chief Executive Officer</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Floating quote card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <Quote className="h-8 w-8 text-red-600 mb-3" />
              <p className="text-sm text-gray-700 italic">
                "We aim to sell Nigeria to the world in a positive light"
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Transforming Nigerian Business Excellence
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Mrs. Mariama Lemos is the visionary founder and Chief Executive Officer of 
                  Lemos Integrated Services. With extensive experience in business development, 
                  international trade, and strategic management, she has positioned the company 
                  as a leading force in Nigeria's integrated business services sector.
                </p>
                
                <p>
                  Under her leadership, Lemos Integrated Services has grown from a local 
                  enterprise to a recognized player in the Nigerian business landscape, 
                  maintaining strong relationships with both domestic and international partners.
                </p>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">Professional Journey</h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Education Excellence</h5>
                    <p className="text-gray-600 text-sm">Advanced studies in Business Administration and International Trade</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">15+ Years Experience</h5>
                    <p className="text-gray-600 text-sm">Business development, project management, and international trade operations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Industry Recognition</h5>
                    <p className="text-gray-600 text-sm">Excellence in service delivery and client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full">
              Learn More About Our Story
            </Button>
          </div>
        </div>

        {/* Video/Media Section - Inspired by filmography section */}
        <div className="bg-red-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-12 text-white space-y-6">
              <h3 className="text-3xl font-bold">COMPANY STORY</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-white/30 pl-4">
                  <h4 className="font-bold text-lg">Vision of Excellence</h4>
                  <p className="text-red-100 text-sm">2010 - Present</p>
                </div>
                
                <p className="text-red-100 leading-relaxed">
                  From our founding in Maiduguri to becoming a trusted name across Nigeria, 
                  our journey has been one of consistent growth, unwavering quality, and 
                  dedication to showcasing Nigerian business excellence to the world.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Our History
                </Button>
                <Button className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Story
                </Button>
              </div>
            </div>

            {/* Right - Image/Video placeholder */}
            <div className="relative bg-black/20">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8" />
                  </div>
                  <p className="text-red-100">Company Story Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};