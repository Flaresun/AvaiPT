import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Agencies from "./components/Agencies";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Location />
      <Agencies />
      <FinalCTA />
    </>
  );
}
