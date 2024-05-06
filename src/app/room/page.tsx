import React, { useState } from "react";
import Nav from "../compoments/Nav";
import Hero from "../compoments/room/Hero";
import Details from "../compoments/room/Details";
import Gallery from "../compoments/room/Gallery";
import Booking from "../compoments/Booking";
import Services from "../compoments/room/Services";
import Footer from "../compoments/Footer";
import BottomNav from "../compoments/BottomNav";
import jardin from "../@jardin/page";
import sirayane from "../@sirayane/page";
import tempX from "../@tempX/page";
import tempY from "../@tempY/page";

const room = () => {
  const templates = {
    jardin: jardin,
    sirayane: sirayane,
    tempX: tempX,
    tempY: tempY,
    // Add more templates as needed
  };
  

  // State to store the selected template
  const [selectedTemplate, setSelectedTemplate] = useState('jardin');

  // Function to handle template change
  const handleTemplateChange = (newTemplate) => {
    setSelectedTemplate(newTemplate);
  };

  // Retrieve the component for the selected template
  const SelectedTemplateComponent = templates[selectedTemplate];

  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  
  return (
    <div>
      <Nav onTemplateChange={handleTemplateChange} onLanguageChange={handleLanguageChange}/>
      <Hero />
      <Details />
      <Gallery />
      <Booking />
      <Services />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default room;
