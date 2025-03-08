import styles from "./CallToAction.module.css";
import navLinks from "../../data/data";

const CallToAction = () => {
  const url = navLinks[2].url;
  return (
    <section className={styles.callToAction}>
      <h2>Join the Future of Meme Culture</h2>
      <a href={url} className={styles.callToActionBtn} target="blank">
        Join Us
      </a>
    </section>
  );
};

export default CallToAction;
