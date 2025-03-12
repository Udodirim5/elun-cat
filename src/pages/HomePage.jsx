import Hero from "../components/Hero";
import Nav from "../components/Nav";
import About from "../components/About";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Pic from "../components/Pic";
import LiveChart from "../components/LiveChart";

const HomePage = () => {

  return (
    <div>
      <Nav />

      <Hero />
      <About />
      <LiveChart />
      <Pic />
      <Features />
      <CallToAction />
    </div>
  );
};

export default HomePage;
