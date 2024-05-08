"use client"

import NavBar from "./compoments/NavBar";
import Hero from "./compoments/Hero";
import About from "./compoments/About";
import AboutRev from "./compoments/AboutRev";
import Rooms from "./compoments/Rooms";
import Offers from "./compoments/Offers";
import Testimonial from "./compoments/Testimonial";
import Services from "./compoments/Services";
import Equipments from "./compoments/Equipments";
import Etablisement from "./compoments/Etablisement";
import Gallery from "./compoments/Gallery";
import Booking from "./compoments/Booking";
import Contact from "./compoments/Contact";
import OfferSp from "./compoments/OfferSp";
import Footer from "./compoments/Footer";
import BottomNav from "./compoments/BottomNav";
import Nav from "./compoments/Nav";
import Loading from "./compoments/Loading";

import { siteinfo, tradAr, tradEn, tradFr } from "@/constants"
import jardin from "./@jardin/page";
import sirayane from "./@sirayane/page";
import tempX from "./@tempX/page";
import tempY from "./@tempY/page";
import { useEffect, useState } from "react";

import TranslationsProvider from "./compoments/TranslationsProvider";
import initializeTranslations from "../i18n";

const i18nNamespaces = ["common"];



export default function Home({ params: { locale } }: { params: { locale: string } }) {

  const [t, setT] = useState(null); 
  const [resources, setResources] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const { t: initializedT, resources: initializedResources } = await initializeTranslations(locale, i18nNamespaces);
      setT(initializedT);      
      setResources(initializedResources);
    };
    initialize();
  }, [locale]);
  



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



  return (
    <>
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
    <Nav onTemplateChange={handleTemplateChange}/>
    <Hero/>
      {/* Render the selected template component  */}
      {SelectedTemplateComponent && <SelectedTemplateComponent  />}
    <Rooms/>
    <Offers/>
    <Testimonial/>
    <Services/>
    <Equipments/>
    <Etablisement/>
    <Gallery/>
    <Booking/>
    <Contact/>
    <OfferSp/>
    <Footer/>
    {/* <BottomNav/> */}
    </TranslationsProvider>
    </>
  );
}
