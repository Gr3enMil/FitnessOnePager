import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Barbara Maiarino Personal Trainer" width={150} height={50} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/#about">O TRENÉRCE</Link></li>
          <li><Link href="/#advantages">VÝHODY</Link></li>
          <li><Link href="/#services">SLUŽBY</Link></li>
          <li><Link href="/#reference">REFERENCE</Link></li>
          <li><Link href="/blog">BLOG</Link></li>
          <li><Link href="/#contact">KONTAKT</Link></li>
        </ul>
      </nav>
      <div className={styles.ctaButton}>
        <Link href="#contact" className={styles.button}>CHCI ZAČÍT!</Link>
      </div>
      <div className={styles.language}>
        <select className={styles.dropdown}>
          <option value="/cz">CZ</option>
          <option value="/en">ENG</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
