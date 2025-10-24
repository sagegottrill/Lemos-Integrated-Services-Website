import React from 'react';
import { Building, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              LEMOS INTEGRATED SERVICES
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for integrated business services in Nigeria and beyond. 
              We deliver excellence across general contracts, import & export, consultancy, 
              and supply services with a commitment to quality, reliability, and innovation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Building className="h-5 w-5 mr-3 text-red-400" />
                <span>BN 3160134 - Nigerian Corporate Affairs Commission</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-red-400" />
                <span>Maiduguri, Borno State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('leadership')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-red-400" />
                <span className="text-sm">+234 [Phone Number]</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-red-400" />
                <span className="text-sm">info@lemosintegrated.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Business Hours</h5>
              <p className="text-gray-300 text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 2:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Our Services</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-red-400 mb-2">General Contracts</h5>
              <p className="text-gray-300 text-sm">Comprehensive contracting solutions</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-red-400 mb-2">Import & Export</h5>
              <p className="text-gray-300 text-sm">Global trade solutions</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-red-400 mb-2">Consultancy</h5>
              <p className="text-gray-300 text-sm">Expert business guidance</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h5 className="font-semibold text-red-400 mb-2">General Supply</h5>
              <p className="text-gray-300 text-sm">Reliable procurement services</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Lemos Integrated Services. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm italic">
              "We aim to sell Nigeria to the world in a positive light" - Mrs. Mariama Lemos, CEO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};