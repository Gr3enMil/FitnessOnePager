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
  
    const nextIndex = currentClientIndex === 0 ? clients.length - 1 : currentClientIndex - 1;
    const nextImageSrc = clients[nextIndex].photo;
  
    // Přednačtení obrázku
    fetch(nextImageSrc)
      .then((res) => res.blob())
      .then(() => {
        setTimeout(() => {
          setCurrentClientIndex(nextIndex);
          setAnimationClass(styles.slideInFromLeft);
        }, 300); 
      })
      .catch((err) => console.error("Chyba při načítání obrázku:", err));
  };

  const handleNext = () => {
    setAnimationClass(styles.slideOutToLeft);

    const nextIndex = currentClientIndex === clients.length - 1 ? 0 : currentClientIndex + 1;
    const nextImageSrc = clients[nextIndex]?.photo;
    
    fetch(nextImageSrc)
    .then((res) => res.blob())
    .then(() => {
      setTimeout(() => {
        setCurrentClientIndex(nextIndex);
        setAnimationClass(styles.slideInFromRight);
      }, 300);
    })
    .catch((err) => console.error("Chyba při načítání obrázku:", err));
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
