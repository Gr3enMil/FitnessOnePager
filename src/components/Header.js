"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <Image src="/images/logo.png" alt="Barbara Maiarino Personal Trainer" width={150} height={50} />
        </div>
        <div
          className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
          onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul>
          <li onClick={handleClose}><Link href="/#about">O TRENÉRCE</Link></li>
          <li onClick={handleClose}><Link href="/#advantages">VÝHODY</Link></li>
          <li onClick={handleClose}><Link href="/#services">SLUŽBY</Link></li>
          <li onClick={handleClose}><Link href="/#reference">REFERENCE</Link></li>
          <li onClick={handleClose}><Link href="/blog">BLOG</Link></li>
          <li onClick={handleClose}><Link href="/#contact">KONTAKT</Link></li>
        </ul>
        <div className={styles.ctaButton} onClick={handleClose}>
          <Link href="#contact" className={styles.button}>CHCI ZAČÍT!</Link>
        </div>
        <select className={styles.dropdown}>
          <option value="/cz">CZ</option>
          <option value="/en">ENG</option>
        </select>
        <div className={`${styles.czenhidden} ${isMenuOpen ? styles.czen : ""}`}>
          <Link href="#" className={styles.link1}>CZ</Link>
          <Link href="#" className={styles.link2}>ENG</Link>
        </div>
      </nav>

    </header>
  );
};

export default Header;
