import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pros from "./components/Pros";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Pros />
      <Services />
      <Location />
      <Footer />
    </div>
  );
}
