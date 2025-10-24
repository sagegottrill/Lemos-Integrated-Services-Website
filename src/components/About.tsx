import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, MapPin, Building } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Lemos Integrated Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A leading Nigerian integrated business services company committed to excellence, 
            innovation, and sustainable growth across multiple sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lemos Integrated Services (BN 3160134) is a dynamic Nigerian company that has established 
              itself as a trusted partner in the integrated business services sector. With our headquarters 
              in Maiduguri, Nigeria, we have built a reputation for delivering quality solutions that 
              bridge local expertise with global standards.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our comprehensive approach to business services encompasses general contracts and merchandise, 
              import and export operations, consultancy services, and general supply solutions. We pride 
              ourselves on our Nigerian roots while maintaining a global perspective that enables us to 
              serve clients across diverse markets and industries.
            </p>
            <div className="flex items-center text-gray-600 mb-4">
              <Building className="h-5 w-5 mr-3 text-red-600" />
              <span>Registered with Nigerian Corporate Affairs Commission</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3 text-red-600" />
              <span>Headquartered in Maiduguri, Nigeria</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-red-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Registration Details</h4>
              <p className="text-gray-700 mb-2">
                <strong>Business Name:</strong> Lemos Integrated Services
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Registration Number:</strong> BN 3160134
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Regulatory Body:</strong> Nigerian Corporate Affairs Commission
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong> Maiduguri, Nigeria
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-l-4 border-l-red-600 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide exceptional integrated business services that drive sustainable growth 
                and success for our clients while contributing to Nigeria's economic development 
                through innovation, quality, and reliability in all our operations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading integrated business services provider in Nigeria and across 
                Africa, recognized for our commitment to excellence, innovation, and our ability 
                to create lasting value for all stakeholders while showcasing Nigeria's potential 
                to the global community.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};