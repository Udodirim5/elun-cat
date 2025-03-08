import React, { useState, useEffect } from "react";
import styles from "./MouseTracker.module.css";

const MouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return <div className={styles.tracker} style={{ left: position.x, top: position.y }} />;
};

export default MouseTracker;
