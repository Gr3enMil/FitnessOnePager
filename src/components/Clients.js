"use client"; 

import { useState } from "react";
import Image from "next/image";
import styles from "./Clients.module.css";

export default function Clients({ clients }) {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");
  const [prevClientIndex, setPrevClientIndex] = useState(null);

  const handlePrev = () => {
    setAnimationClass(styles.slideOutToRight);
    setPrevClientIndex(currentClientIndex);
    setTimeout(() => {
      setCurrentClientIndex((prevIndex) =>
        prevIndex === 0 ? clients.length - 1 : prevIndex - 1
      ); 
      setAnimationClass(styles.slideInFromLeft);
    }, 700);
  };

  const handleNext = () => {
    setAnimationClass(styles.slideOutToLeft);
    setPrevClientIndex(currentClientIndex);
    setTimeout(() => {
      setCurrentClientIndex((prevIndex) =>
        prevIndex === clients.length - 1 ? 0 : prevIndex + 1
      );
      setAnimationClass(styles.slideInFromRight);
    }, 700);
  };

  return (
    <div className={styles.clientsContainer} id="clients">
      <h1 className={styles.title}>REFERENCE</h1>
      <div className={styles.navigation}>
        <div className={styles.arrow} onClick={handlePrev}></div>
        <div className={`${styles.clientContainer} ${animationClass}`}>
          <div className={styles.clientDetails}>
            <div className={styles.clientImage}>
              <Image
                src={clients[currentClientIndex].photo}
                alt={`Photo of ${clients[currentClientIndex].name}`}
                width={320}
                height={320}
                className={styles.image} 
              />
            </div>
            <div className={styles.clientInfo}>
              <h2>{clients[currentClientIndex].name}</h2>
              <h3>{clients[currentClientIndex].title}</h3>
              <p>{clients[currentClientIndex].paragraph1}</p>
              <p>{clients[currentClientIndex].paragraph2}</p>
            </div>
          </div>
        </div>
        <div className={styles.arrow2} onClick={handleNext}></div>
      </div>
      <div className={styles.pagination}>
        {clients.map((_, index) => (
          <div
            key={index}
            className={
              index === currentClientIndex
                ? styles.paginationDotActive
                : styles.paginationDot
            }
          ></div>
        ))}
      </div>
    </div>
  );
}
