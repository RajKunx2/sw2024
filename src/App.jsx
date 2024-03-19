import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Timeline from "./components/Timeline";
import Services from "./components/Speakers";
import Count from "./components/Count/Count"

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Benefits />
        <Services />
        <Timeline />
        <Count />
        <Pricing />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
