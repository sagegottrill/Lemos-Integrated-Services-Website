import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Building, Send, MessageCircle, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white ml-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
            <span className="block text-red-600">Let's Start Something Great</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? We're here to help you succeed with our 
            comprehensive integrated services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-red-600 to-red-800 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                  <p className="text-red-100">We'll get back to you within 24 hours</p>
                </div>
                
                <div className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="rounded-lg border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg text-lg font-medium"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Quick Contact Cards */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 text-sm">Our Office Location</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Maiduguri, Borno State<br />
                  Nigeria
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 bg-gradient-to-br from-blue-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Call Us</h4>
                    <p className="text-gray-600 text-sm">Mon-Fri, 8AM-6PM</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  +234 [Phone Number]
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 bg-gradient-to-br from-green-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Email Us</h4>
                    <p className="text-gray-600 text-sm">24hr Response</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  info@lemosintegrated.com
                </p>
              </CardContent>
            </Card>

            {/* Business Info Card */}
            <Card className="shadow-lg border-0 overflow-hidden">
              <CardContent className="p-6 bg-gradient-to-br from-purple-50 to-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Business Info</h4>
                    <p className="text-gray-600 text-sm">Registered Company</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Registration:</strong> BN 3160134</p>
                  <p><strong>Authority:</strong> Nigerian Corporate Affairs Commission</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section - Inspired by KFC app promotion */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-red-100 mb-6 leading-relaxed">
                Let's discuss how Lemos Integrated Services can help drive your business forward 
                with our comprehensive solutions and expertise. Schedule a consultation today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-red-600 hover:bg-red-50 px-6 py-3 rounded-full font-medium">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button className="bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-3 rounded-full font-medium">
                  <Clock className="mr-2 h-5 w-5" />
                  Book Meeting
                </Button>
              </div>
            </div>
            
            <div className="p-12 flex items-center justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Business handshake representing partnership excellence"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="text-center text-white">
                  <h4 className="text-xl font-bold mb-2">Partnership Excellence</h4>
                  <p className="text-red-100">Building lasting business relationships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};