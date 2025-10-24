import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Truck, Users, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">LEMOS</span> INTEGRATED SERVICES
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            Quality • Reliability • Innovation
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Your trusted partner for integrated business services in Nigeria and beyond. 
            We deliver excellence across general contracts, import & export, consultancy, and supply services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              onClick={() => scrollToSection('about')}
            >
              About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
              onClick={() => scrollToSection('services')}
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Service Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">General Contracts</h3>
              <p className="text-sm text-gray-600">Comprehensive contracting solutions for your business needs</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Import & Export</h3>
              <p className="text-sm text-gray-600">Global trade solutions connecting Nigeria to the world</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consultancy Services</h3>
              <p className="text-sm text-gray-600">Expert guidance for strategic business decisions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">General Supply</h3>
              <p className="text-sm text-gray-600">Reliable supply chain management and procurement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};