import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Trophy, Crown, CheckCircle, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      icon: <Shield className="h-8 w-8" />,
      description: "We conduct our business with the highest ethical standards, transparency, and honesty in all our interactions.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Teamwork",
      icon: <Users className="h-8 w-8" />,
      description: "We believe in the power of collaboration, fostering an environment where diverse talents unite for common goals.",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Excellence",
      icon: <Trophy className="h-8 w-8" />,
      description: "We strive for excellence in every project, service, and interaction, continuously improving our standards.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Leadership",
      icon: <Crown className="h-8 w-8" />,
      description: "We lead by example, inspiring innovation and positive change in our industry and communities.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Quality",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "We are committed to delivering superior quality in all our services, exceeding client expectations consistently.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="core-values" className="py-24 bg-gray-50 ml-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values &
            <span className="block text-red-600">Guiding Principles</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental values guide every decision we make and every service we deliver, 
            ensuring we maintain the highest standards of professionalism and integrity.
          </p>
        </div>

        {/* Values Grid - Inspired by KFC card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative h-48">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1560472354-b33ff0c44a43' : // Integrity - handshake
                      index === 1 ? '1522202176988-64a2c463b7c' : // Teamwork - team meeting
                      index === 2 ? '1551434678-e076c223a692' : // Excellence - trophy/success
                      index === 3 ? '1507003211169-0a1dd7a838e' : // Leadership - leader
                      '1556761175-b413da4baf72' // Quality - precision/quality
                    }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                    alt={`${value.title} - Professional business image`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-80`}></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision Section - Inspired by KFC promotional cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-red-100 leading-relaxed">
                    To provide exceptional integrated business services that drive sustainable growth 
                    and success for our clients while contributing to Nigeria's economic development 
                    through innovation, quality, and reliability in all our operations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 relative">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-tr-full"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To become the leading integrated business services provider in Nigeria and across 
                    Africa, recognized for our commitment to excellence, innovation, and our ability 
                    to create lasting value for all stakeholders while showcasing Nigeria's potential 
                    to the global community.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Excellence?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Lemos Integrated Services 
            for their business needs. Let's build something great together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-medium">
              Start Your Project
            </Button>
            <Button className="bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};