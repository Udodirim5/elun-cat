import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Pic from "../components/Pic";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Pic />
      <Features />
      <CallToAction />
    </div>
  );
};

export default HomePage;
