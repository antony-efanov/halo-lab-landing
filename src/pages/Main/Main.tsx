import { Contact } from "../../components/Contact";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Team } from "../../components/Team";

const Main = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Team />
      <Contact />
    </div>
  );
};

export default Main;
