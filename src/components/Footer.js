import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image src="/images/logo.png" alt="Barbara Maiarino Logo" width={80} height={80} className={styles.logo} />
      </div>
      <div className={styles.contact}>
        <h3 className={styles.contactTitle}>KONTAKT</h3>
        <p><a href="mailto:trainer@barbaramailarino.cz" className={styles.contactLink}>trainer@barbaramailarino.cz</a></p>
        <p>+420 777 888 999</p>
      </div>
      <div className={styles.location}>
        <h3 className={styles.locationTitle}>PŮSOBIŠTĚ</h3>
        <div>
          <p>Gym Flora, s.r.o.</p>
          <p>Nádeníkova ulice 456/8</p>
          <p>Praha 3</p>
          <p>130 00</p>
        </div>
      </div>
      <div className={styles.social}>
        <h3 className={styles.socialTitle}>SOCIÁLNÍ SÍTĚ</h3>
        <a href="https://www.instagram.com/baraerialist" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Image src="/images/iglogo.png" alt="IG" width={50} height={50} className={styles.logo2} /></a>
        <a href="https://www.facebook.com/BaraFit" target="_blank" rel="noopener noreferrer" className={styles.socialLink}><Image src="/images/ytlogo.png" alt="YT" width={68} height={54} className={styles.logo2} /></a>
      </div>
    </footer>
  );
};

export default Footer;
