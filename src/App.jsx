import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import WhyEmpact from './sections/WhyEmpact';
import Work from './sections/Work';
import Services from './sections/Services';
import Tools from './sections/Tools';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyEmpact />
      <Work />
      <Services />
      <Tools />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
