import NavBar from "./compoments/NavBar";
import Hero from "./compoments/Hero";
import About from "./compoments/About";
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

export default function Home() {
  return (
    <>
    {/* <NavBar/> */}
    <Nav />
    <Hero/>
    {/* <button
    className="bg-red-500 py-8 px-4 text-white"
  type="button"
  // onClick={() => {
  //   throw new Error("Sentry Frontend Error");
  // }}
>
  Throw error
</button> */}
    <About/>
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
    <BottomNav/>
    </>
  );
}
