import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CountdownModal.module.css";

const CountdownModal = ({ launchDate, isOpen, onClose }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.modal}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h1 className={styles.title}>🚀 ELUN CAT LAUNCH COUNTDOWN 🚀</h1>
            <div className={styles.countdown}>
              <span>{timeLeft.days}d</span> : <span>{timeLeft.hours}h</span> :{" "}
              <span>{timeLeft.minutes}m</span> :{" "}
              <span>{timeLeft.seconds}s</span>
            </div>
            <button className={styles.closeButton} onClick={onClose}>
              CLOSE
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CountdownModal;
