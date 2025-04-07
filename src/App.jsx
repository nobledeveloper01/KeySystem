import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import WhyTrusted from './Components/WhyTrusted';
import Offerings from './Components/Offerings';
import WhatWeRepresent from './Components/WhatWeRepresent';
import ComplianceCertifications from './Components/ComplianceCertifications';
import TheyTrust from './Components/TheyTrust';
import OurPartners from './Components/OurPartners';
import ReadyToGetStarted from './Components/ReadyToGetStarted';
import Footer from './Components/Footer';
import SharedBackgroundWrapper from './Components/reusable/ShareBackgroundWrapper';
import OurProcess from './Components/OurProcess';

function App() {
  return (
    <div className="min-h-screen bg-[#020412] text-white font-Poppins">
      <SharedBackgroundWrapper>
      <Navbar />
      <Hero id="home" />
      </SharedBackgroundWrapper>
      <TrustedBy />
      <WhyTrusted id="about" />
      <Offerings id="services" />
      <WhatWeRepresent />
      <ComplianceCertifications />
      <TheyTrust />
      <OurProcess />
      <OurPartners />
      <ReadyToGetStarted id="contact" />
      <Footer />
    </div>
  );
}

export default App;