import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Trophy, Crown, CheckCircle } from 'lucide-react';

export const CoreValues: React.FC = () => {
  const values = [
    {
      title: "Integrity",
      icon: <Shield className="h-8 w-8" />,
      description: "We conduct our business with the highest ethical standards, transparency, and honesty in all our interactions.",
      color: "bg-red-600"
    },
    {
      title: "Teamwork",
      icon: <Users className="h-8 w-8" />,
      description: "We believe in the power of collaboration, fostering an environment where diverse talents unite for common goals.",
      color: "bg-white"
    },
    {
      title: "Excellence",
      icon: <Trophy className="h-8 w-8" />,
      description: "We strive for excellence in every project, service, and interaction, continuously improving our standards.",
      color: "bg-red-600"
    },
    {
      title: "Leadership",
      icon: <Crown className="h-8 w-8" />,
      description: "We lead by example, inspiring innovation and positive change in our industry and communities.",
      color: "bg-white"
    },
    {
      title: "Quality",
      icon: <CheckCircle className="h-8 w-8" />,
      description: "We are committed to delivering superior quality in all our services, exceeding client expectations consistently.",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="core-values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Values & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our core values guide every decision we make and every service we deliver, 
            ensuring we maintain the highest standards of professionalism and integrity.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={`${value.color} ${
                value.color === 'bg-white' ? 'text-gray-900 shadow-lg border border-gray-200' : 'text-white border-0 shadow-lg'
              } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6 ${
                  value.color === 'bg-white' ? 'bg-red-100 text-red-600' : 'bg-white/20 text-white'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  value.color === 'bg-white' ? 'text-gray-600' : 'text-white/90'
                }`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision and Mission Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-red-600 text-white border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Vision</h3>
              <p className="text-lg leading-relaxed text-center text-white/95">
                To become the leading integrated business services provider in Nigeria and across Africa, 
                recognized for our commitment to excellence, innovation, and our ability to create lasting 
                value for all stakeholders while showcasing Nigeria's potential to the global community.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Mission</h3>
              <p className="text-lg leading-relaxed text-center text-gray-700">
                To provide exceptional integrated business services that drive sustainable growth and 
                success for our clients while contributing to Nigeria's economic development through 
                innovation, quality, and reliability in all our operations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Vision Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h4>
            <p className="text-gray-700 leading-relaxed">
              At Lemos Integrated Services, we are committed to building bridges between Nigerian 
              businesses and global opportunities. We believe in the power of quality service delivery, 
              sustainable business practices, and the positive representation of Nigeria in the 
              international business community. Our success is measured not just by our growth, 
              but by the positive impact we create for our clients, partners, and the broader community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};