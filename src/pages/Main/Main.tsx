import { Contact } from "../../components/Contact";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Slider } from "../../components/Slider";
import { Team } from "../../components/Team";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Contact />
      <FAQ />
      <Slider />
      <Footer />
    </>
  );
};

export default Main;
