import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Building, Globe, Users, Package, BarChart, CheckCircle, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "LEMOS INTEGRATED",
      subtitle: "SERVICES",
      description: "Your trusted partner for integrated business services in Nigeria and beyond. We deliver excellence across general contracts, import & export, consultancy, and supply services.",
      buttonText: "Get Started"
    },
    {
      title: "GENERAL CONTRACTS",
      subtitle: "& MERCHANDISE",
      description: "Comprehensive contracting solutions tailored to meet diverse business requirements across various industries.",
      buttonText: "Explore Services"
    },
    {
      title: "IMPORT & EXPORT",
      subtitle: "SOLUTIONS",
      description: "Seamless international trade solutions connecting Nigerian businesses to global markets with efficiency and reliability.",
      buttonText: "Learn More"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-white ml-20 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20 relative">
        {/* Main Content */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight transition-all duration-700">
              {currentSlideData.title}
              <br />
              <span className="text-gray-800">{currentSlideData.subtitle}</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700">
              {currentSlideData.description}
            </p>
          </div>
          
          <Button 
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            onClick={() => scrollToSection('services')}
          >
            {currentSlideData.buttonText}
          </Button>
        </div>

        {/* Professional Service Cards */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
            {[
              { name: "General Contracts", color: "bg-blue-50 border-blue-200", icon: <Building className="h-6 w-6 text-blue-600" /> },
              { name: "Import & Export", color: "bg-green-50 border-green-200", icon: <Globe className="h-6 w-6 text-green-600" /> },
              { name: "Consultancy", color: "bg-purple-50 border-purple-200", icon: <Users className="h-6 w-6 text-purple-600" /> },
              { name: "Supply Chain", color: "bg-red-50 border-red-200", icon: <Package className="h-6 w-6 text-red-600" /> },
              { name: "Project Management", color: "bg-yellow-50 border-yellow-200", icon: <BarChart className="h-6 w-6 text-yellow-600" /> },
              { name: "Quality Assurance", color: "bg-indigo-50 border-indigo-200", icon: <CheckCircle className="h-6 w-6 text-indigo-600" /> },
              { name: "Strategic Planning", color: "bg-pink-50 border-pink-200", icon: <Target className="h-6 w-6 text-pink-600" /> }
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} border rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg`}
                style={{
                  transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-5deg' : '5deg'}) rotateX(5deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="mb-3 flex justify-center">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">{service.name}</h3>
              </div>
            ))}
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">Quality</h3>
              <p className="text-gray-600 text-sm">Delivering superior quality in all our services</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">Reliability</h3>
              <p className="text-gray-600 text-sm">Consistent and dependable business solutions</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600 text-sm">Forward-thinking approaches to business challenges</p>
            </div>
          </div>
        </div>

        {/* Bottom navigation indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-gray-900 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};