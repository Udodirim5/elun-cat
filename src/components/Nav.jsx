import React, { useState, useRef } from "react";
import styles from "./Nav.module.css";
import navLinks from "../../data/data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.menu}>
      <a href="/" className={styles.logo}>
        <img src={`${import.meta.env.BASE_URL}images/logo.webp`} alt="Logo" />
        ELUN<span>CAT</span>
      </a>
      <div className={styles["menu-toggle"]} onClick={toggleMenu}>
        ☰
      </div>
      <ul
        ref={menuRef}
        className={`${styles.menuLinks} ${isOpen ? styles.active : ""}`}
      >
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
