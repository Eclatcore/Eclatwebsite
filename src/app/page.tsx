import Image from "next/image";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Footer from "./components/layout/Footer";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import WhyChooseUs from "./components/WhyChooseUs";
import Plans from "./components/Plans";
import CarruselIndustry from "./components/CarruselIndustry";
import Contact from "./components/Contact";
import Showcase from "./components/Showcase";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero></Hero>
      <AboutUs />
      <Services />
      <Timeline />
      <WhyChooseUs />
      <Plans/>
      <Showcase />
      <Contact />
      <Footer></Footer>
    </main>
  );
}
