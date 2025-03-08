import styles from "./CallToAction.module.css";
import navLinks, { launchDate } from "../../data/data";
import { useState } from "react";
import CountdownModal from "./CountdownModal";
const today = new Date();

const CallToAction = () => {
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
    <section className={styles.callToAction}>
      <h2>Join the Future of Meme Culture</h2>
      <button onClick={handleGetStarted} className={styles.callToActionBtn} target="blank">
        Join Us
      </button>
      <CountdownModal
        launchDate={launchDate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </section>
  );
};

export default CallToAction;
