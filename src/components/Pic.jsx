import styles from "./Pic.module.css";
const Pic = () => {
  return (
    <section className={styles.elunCat}>
    <section className={styles.elunCatInner}>
      <img src={`${import.meta.env.BASE_URL}images/elun_cat.jpg`} alt="Elun Cat" />
      <img src={`${import.meta.env.BASE_URL}images/logo.webp`} alt="Elun Cat" />
      <img src={`${import.meta.env.BASE_URL}images/elun_cat.jpg`} alt="Elun Cat" />
    </section>
    </section>
  );
};

export default Pic;
