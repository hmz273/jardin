import React from "react";
import Nav from "../compoments/Nav";
import Hero from "../compoments/room/Hero";
import Details from "../compoments/room/Details";
import Gallery from "../compoments/room/Gallery";
import Booking from "../compoments/Booking";
import Services from "../compoments/room/Services";
import Footer from "../compoments/Footer";
import BottomNav from "../compoments/BottomNav";

const room = () => {
  return (
    <div>
      <Nav />
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
