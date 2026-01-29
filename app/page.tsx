import Image from "next/image";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import HowWeBuild from "./components/HowWeBuild";
import WhyChooseUs from "./components/WhyChooseUs";
import BuiltSolutions from "./components/BuiltSolutions";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Mission/>
    <Services/>
    <HowWeBuild/>
    <WhyChooseUs/>
    <BuiltSolutions/>
  </div>
  );
}
