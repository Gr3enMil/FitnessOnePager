"use client"
import Head from 'next/head';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  const arrowMove = () => {
    const arrowElement = document.querySelector(`.${styles.arrow}`);
    if (arrowElement) {
      arrowElement.classList.add(styles.animate);
    }
  }

  const arrowStop = () => {
    const arrowElement = document.querySelector(`.${styles.arrow}`);
    if (arrowElement) {
        arrowElement.classList.remove(styles.animate);
    }
  }

  return (
    <div className={styles.logoContainer}>
      <div className={styles.backgroundOverlay}>
        <Image
          src="/images/barbara.png"
          alt="Logo background"
          fill
          className={styles.background}
        />
      </div>
      <div className={styles.textContainer}>
        <Image
          src="/images/logo2.png"
          alt='Barbara logo'
          width={950}
          height={220}
          className={styles.logo}
        />
        <h1 className={styles.title}>Barbara Mallarino</h1>
        <h2 className={styles.subtitle}>Personal Trainer</h2>
        <p className={styles.quote}>
          “Ať už je tvým cílem úbytek tělesného tuku, budování svalové hmoty, nebo se prostě jen naučit hýbat a posouvat ve všech oblastech života. Jsi na správném místě!”
        </p>
        <div className={styles.scroll}>
          <div className={styles.mouse} onMouseEnter={arrowMove} onMouseLeave={arrowStop}></div>
          <div className={styles.arrow} onMouseEnter={arrowMove}></div>
        </div>
      </div>
    </div>
  );
} 
