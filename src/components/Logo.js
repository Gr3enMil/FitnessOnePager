import Head from 'next/head';
import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.logoContainer}>
        <div className={styles.backgroundOverlay}>
        <Image
          src="/barbara.jpeg"
          alt="Logo background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' , objectPosition: 'center'}}
          className={styles.background}
        />
        </div>
        <div className={styles.textContainer}>
          <div>  </div>
          <div >
            <h1 className={styles.logoTitle}>barbara mallarino</h1>
            <h2 className={styles.subtitle}>Personal Trainer</h2>
            <p className={styles.quote}>
              “Ať už je tvým cílem úbytek tělesného tuku, budování svalové hmoty, nebo se prostě jen naučit hýbat a posouvat ve všech oblastech života. Jsi na správném místě!”
            </p>
          </div>
        </div>
    </div> 
  );
}
