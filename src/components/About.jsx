import styles from "./About.module.css";
const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        <h2>About Eluncat</h2>
        <p>
          Eluncat is a futuristic, meme-powered phenomenon taking over the
          digital cosmos. More than just a token—it’s a movement. Powered by
          memes, fueled by innovation, and driven by a passionate community,
          Eluncat is here to reshape the crypto space with fun, engagement, and
          limitless possibilities!
        </p>
      </div>
    </section>
  );
};

export default About;
