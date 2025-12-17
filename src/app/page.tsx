import Image from "next/image";
import Header from "./components/layout/Header";
import Hero from "./components/Hero";
import BusinessAuditQuestionnaire from "./components/BusinessAuditQuestionnaire";
import AboutUs from "./components/AboutUs";
import Footer from "./components/layout/Footer";
import Services from "./components/Services";
import ProcessTimeline from "./components/ProcessTimeline";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import CarruselIndustry from "./components/CarruselIndustry";
import Contact from "./components/Contact";
import Showcase from "./components/Showcase";
import Timeline from "./components/Timeline";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero></Hero>
      <AboutUs />
      <BusinessAuditQuestionnaire />
      <Services />
      <Timeline />
      <WhyChooseUs />
      <Showcase />
      <Plans/>
      <Contact />
      <Footer></Footer>
    </main>
  );
}
