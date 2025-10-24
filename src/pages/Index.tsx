import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Leadership } from '@/components/Leadership';
import { CoreValues } from '@/components/CoreValues';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Leadership />
      <CoreValues />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;