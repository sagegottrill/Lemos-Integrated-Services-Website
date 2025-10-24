import React from 'react';
import { Building, MapPin, Phone, Mail, ArrowRight, Facebook, Twitter, Linkedin, Instagram, Globe, Users, Package } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white ml-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-red-400 mb-4">
                  LEMOS
                  <span className="block text-white">INTEGRATED SERVICES</span>
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  Your trusted partner for integrated business services in Nigeria and beyond. 
                  We deliver excellence across general contracts, import & export, consultancy, 
                  and supply services with unwavering commitment to quality, reliability, and innovation.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Building className="h-5 w-5 mr-3 text-red-400" />
                  <span className="text-sm">BN 3160134 - Nigerian Corporate Affairs Commission</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3 text-red-400" />
                  <span className="text-sm">Maiduguri, Borno State, Nigeria</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3 text-red-400" />
                  <span className="text-sm">+234 [Phone Number]</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 mr-3 text-red-400" />
                  <span className="text-sm">info@lemosintegrated.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('leadership')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Leadership
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-red-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-300 text-sm">General Contracts & Merchandise</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Import & Export Solutions</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Business Consultancy</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">General Supply Services</span>
                </li>
                <li>
                  <span className="text-gray-300 text-sm">Project Management</span>
                </li>
              </ul>
              
              {/* Business Hours */}
              <div className="mt-8">
                <h5 className="font-semibold text-white mb-3">Business Hours</h5>
                <div className="text-gray-300 text-sm space-y-1">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Showcase - Inspired by KFC footer */}
        <div className="border-t border-gray-700 py-12">
          <h4 className="text-2xl font-bold text-center text-white mb-8">Our Service Excellence</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h5 className="font-bold text-red-400 mb-2">General Contracts</h5>
              <p className="text-gray-300 text-sm">Comprehensive construction and contracting solutions</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h5 className="font-bold text-red-400 mb-2">Import & Export</h5>
              <p className="text-gray-300 text-sm">Global trade solutions and logistics</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h5 className="font-bold text-red-400 mb-2">Consultancy</h5>
              <p className="text-gray-300 text-sm">Strategic business guidance and advisory</p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 text-center hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h5 className="font-bold text-red-400 mb-2">General Supply</h5>
              <p className="text-gray-300 text-sm">Reliable procurement and supply chain</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
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
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Inspirational Quote */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm italic">
              "We aim to sell Nigeria to the world in a positive light" - Mrs. Mariama Lemos, CEO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};