import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Globe, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "General Contracts & Merchandise",
      icon: <Truck className="h-8 w-8" />,
      description: "Comprehensive contracting solutions tailored to meet diverse business requirements across various industries.",
      features: [
        "Construction and infrastructure projects",
        "Equipment supply and installation",
        "Project management and supervision",
        "Quality assurance and compliance"
      ],
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "Import & Export",
      icon: <Globe className="h-8 w-8" />,
      description: "Seamless international trade solutions connecting Nigerian businesses to global markets with efficiency and reliability.",
      features: [
        "International shipping and logistics",
        "Customs clearance and documentation",
        "Trade finance facilitation",
        "Market entry strategies"
      ],
      bgColor: "bg-red-600",
      textColor: "text-white"
    },
    {
      title: "Consultancy Services",
      icon: <Users className="h-8 w-8" />,
      description: "Expert advisory services providing strategic insights and solutions for sustainable business growth and development.",
      features: [
        "Business strategy development",
        "Market research and analysis",
        "Operational efficiency optimization",
        "Risk assessment and management"
      ],
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      title: "General Supply",
      icon: <Award className="h-8 w-8" />,
      description: "Reliable procurement and supply chain management ensuring timely delivery of quality products and services.",
      features: [
        "Procurement and sourcing",
        "Inventory management",
        "Vendor relationship management",
        "Supply chain optimization"
      ],
      bgColor: "bg-red-600",
      textColor: "text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white ml-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive integrated business services designed to drive growth, 
            efficiency, and success across multiple sectors and industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} ${service.textColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                  service.bgColor === 'bg-white' ? 'bg-red-100 text-red-600' : 'bg-white/20 text-white'
                }`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className={`${
                  service.bgColor === 'bg-white' ? 'text-gray-600' : 'text-white/90'
                } text-base`}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className={`h-5 w-5 mr-3 ${
                        service.bgColor === 'bg-white' ? 'text-red-600' : 'text-white'
                      }`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={service.bgColor === 'bg-white' ? 'default' : 'secondary'}
                  className={`w-full ${
                    service.bgColor === 'bg-white' 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-white text-red-600 hover:bg-gray-100'
                  }`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};