import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pros from "./components/Pros";
import Location from "./components/Location";
import Footer from "./components/Footer";
import "./components/Hero.css"
import "./components/Animation.css"
export default function Home() {
  return (
    <div className="">
      <div id="hero-cover" className="flex flex-col">
        <Navbar />
        <Hero />
      </div>
      
      <Pros />
      <Services />
      <Location />
      <Footer />
    </div>
  );
}
