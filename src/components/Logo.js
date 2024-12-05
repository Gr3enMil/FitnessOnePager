"use client"
import Head from 'next/head';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.logoContainer}>
      <div className={styles.backgroundOverlay}>
        <Image
          src="/images/barbara.png"
          alt="Logo background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: "50% 42%" }}
          className={styles.background}
        />
      </div>
      <div className={styles.textContainer}>
        <Image
          src="/images/barbara.svg"
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
          <div className={styles.mouse} onClick={e=>handleClick(e)}></div>
          <div className={styles.arrow} onClick={e=>handleClick(e)}></div>
        </div>
      </div>
    </div>
  );
}
