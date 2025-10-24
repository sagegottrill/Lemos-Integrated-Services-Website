import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, GraduationCap, Briefcase, Award } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leader driving Lemos Integrated Services towards excellence 
            and sustainable growth in the Nigerian business landscape.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Profile Image Section */}
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">ML</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Mrs. Mariama Lemos</h3>
                    <p className="text-red-100 font-medium">Chief Executive Officer</p>
                  </div>
                </div>

                {/* Biography Section */}
                <div className="lg:col-span-2 p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Biography</h4>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Mrs. Mariama Lemos is the visionary founder and Chief Executive Officer of 
                    Lemos Integrated Services. With extensive experience in business development, 
                    international trade, and strategic management, she has positioned the company 
                    as a leading force in Nigeria's integrated business services sector.
                  </p>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    Under her leadership, Lemos Integrated Services has grown from a local 
                    enterprise to a recognized player in the Nigerian business landscape, 
                    maintaining strong relationships with both domestic and international partners.
                  </p>

                  {/* Experience Timeline */}
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <GraduationCap className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Education</h5>
                        <p className="text-gray-600 text-sm">
                          Advanced studies in Business Administration and International Trade
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <Briefcase className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Professional Experience</h5>
                        <p className="text-gray-600 text-sm">
                          Over 15 years of experience in business development, project management, 
                          and international trade operations
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <Award className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Achievements</h5>
                        <p className="text-gray-600 text-sm">
                          Successfully established and scaled multiple business ventures, 
                          recognized for excellence in service delivery and client satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quote Section */}
          <Card className="mt-8 bg-red-600 border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <Quote className="h-12 w-12 text-white/30 mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                "We aim to sell Nigeria to the world in a positive light, showcasing our 
                capabilities, integrity, and commitment to excellence in everything we do."
              </blockquote>
              <cite className="text-red-100 font-medium">
                — Mrs. Mariama Lemos, CEO
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};