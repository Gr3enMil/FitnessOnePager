"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './Clients.module.css';

export default function Clients({ clients }) {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);

  const currentClient = clients[currentClientIndex];

  const handlePrev = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentClientIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.clientsContainer} id="reference">
      <h1 className={styles.title}>REFERENCE</h1>
      <div className={styles.navigation}>
        <div className={styles.arrow} onClick={handlePrev}>
        </div>
        <div className={styles.clientDetails}>
          <div className={styles.clientImage}>
            <Image
              src={currentClient.photo}
              alt={`Photo of ${currentClient.name}`}
              width={360}
              height={320} 
              className={styles.image}
            />
          </div> 
          <div className={styles.clientInfo}>
            <h2>{currentClient.name}</h2>
            <h3>{currentClient.title}</h3>
            <p>{currentClient.paragraph1}</p>
            <p>{currentClient.paragraph2}</p>
          </div>
        </div>
        <div className={styles.arrow2} onClick={handleNext}>
        </div>
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

export async function getStaticProps() {
  const clients = await getClients();

  return {
    props: {
      clients,
    },
  };
}
