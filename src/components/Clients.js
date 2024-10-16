"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Clients.module.css';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch data from the API
    const fetchClients = async () => {
      const response = await fetch('/api/clients');
      const data = await response.json();
      setClients(data);
    };

    fetchClients();
  }, []);

  if (clients.length === 0) return <p>Loading...</p>;

  // Posouvání na dalšího klienta
  const nextClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  // Posouvání na předchozího klienta
  const prevClient = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length);
  };

  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.title}>REFERENCE</h2>
      <div className={styles.carousel}>
        <button onClick={prevClient} className={styles.arrowButton} aria-label="Předchozí klient">
          &#8249;
        </button>
        <div className={styles.clientCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={clients[currentIndex].image}
              alt={`Reference od ${clients[currentIndex].name}`}
              width={330}
              height={330}
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              className={styles.clientImage}
            />
          </div>
          <div className={styles.textWrapper}>
            <h3 className={styles.clientName}>{clients[currentIndex].name}</h3>
            <p className={styles.testimonial}>{clients[currentIndex].testimonial}</p>
          </div>
        </div>
        <button onClick={nextClient} className={styles.arrowButton} aria-label="Další klient">
          &#8250;
        </button>
      </div>
      <div className={styles.dotsWrapper}>
        {clients.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
