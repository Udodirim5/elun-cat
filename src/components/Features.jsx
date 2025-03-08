import styles from "./Features.module.css";
const Features = () => {
  return (
    <section className={styles.features}>
      <h2>Why Eluncat?</h2>
      <div className={styles["features-grid"]}>
        <div className={styles.feature}>
          <img
            src={`${import.meta.env.BASE_URL}images/Hyper-Futuristic.jpg`}
            alt="Icon"
          />
          <h3>Hyper-Futuristic</h3>
          <p>Designed for the next generation of crypto culture.</p>
        </div>
        <div className={styles.feature}>
          <img
            src={`${import.meta.env.BASE_URL}images/Neon-Powered.jpg`}
            alt="Icon"
          />
          <h3>Neon-Powered</h3>
          <p>Glowing with meme energy and limitless potential.</p>
        </div>
        <div className={styles.feature}>
          <img
            src={`${import.meta.env.BASE_URL}images/Community-Driven.jpg`}
            alt="Icon"
          />
          <h3>Community-Driven</h3>
          <p>Built by degens, for degens. The movement is unstoppable.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
