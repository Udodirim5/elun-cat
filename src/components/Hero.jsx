import styles from "./Hero.module.css";
import navLinks from "../../data/data";

const Hero = () => {
  const url = navLinks[2].url;
  return (
    <header className={styles.hero}>
      <div className={styles.circle}></div>
      <div className={styles.circleTwo}></div>
      <div className={styles.heroInner}>
        <h1>
          Welcome to <span className={styles.neon}>Eluncat</span>
        </h1>
        <p className={styles.tagline}>Where the Future Meets the Meme.</p>
        <div className={styles.buttons}>
          <a href={url} className={styles.button} target="blank" >Get Started</a>
          <a href="#about" className={styles.ctaButton}>
            Explore Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
