import styles from "./Hero.module.css";
import navLinks, { launchDate } from "../../data/data";
import { useState } from "react";
import CountdownModal from "./CountdownModal";

const today = new Date();

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const url = navLinks[2].url;
  const handleGetStarted = () => {
    if (today > launchDate) {
      window.open(url, "_blank", "width=800,height=600,top=100,left=100");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <header className={styles.hero}>
      <div className={styles.circle}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.heroInner}>
        <h1 className={styles.heroTitle}>
          Welcome to <span className={styles.neon}>Eluncat</span>
        </h1>
        <p className={styles.tagline}>Where the Future Meets the Meme.</p>
        <div className={styles.buttons}>
          <button
            onClick={handleGetStarted}
            className={styles.button}
            target="blank"
          >
            Get Started
          </button>
          <a href="#about" className={styles.ctaButton}>
            Explore Now
          </a>
        </div>
      </div>
      <CountdownModal
        launchDate={launchDate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Hero;
