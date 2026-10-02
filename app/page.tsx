import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import HowWeWork from "@/components/HowWeWork";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import LocationMap from "@/components/LocationMap";
import Footer from "@/components/Footer";

export default function Home() {
  return <><Navbar/><main><Hero/><Services/><WhyChooseUs/><About/><HowWeWork/><CTA/><Contact/><LocationMap/></main><Footer/></>;
}
