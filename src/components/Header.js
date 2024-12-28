"use client"
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useScrollHandler = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrollTarget, setScrollTarget] = useState(null);

  // Sleduj změny `pathname` a prováděj scroll po dokončení navigace
  useEffect(() => {
    if (scrollTarget && pathname === scrollTarget.page) {
    
      const element = document.getElementById(scrollTarget.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        console.log('Calculated scroll position:', window.scrollY + rect.top);
        element.scrollIntoView({ behavior: 'smooth' });
        setScrollTarget(null); // Resetuj cíl po scrollování
      }
    
    }
  }, [pathname, scrollTarget]);

  // Funkce na navigaci a případný scroll
  const handleScroll = (e, targetPage, elementId) => {
    e.preventDefault();
    if (pathname !== targetPage) {
      setScrollTarget({ page: targetPage, id: elementId });
      router.push(targetPage); // Naviguj na cílovou stránku
    } else {
      const element = document.getElementById(elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offset = window.innerWidth < 751 ? 550 : 0;
        const scrollPosition = window.scrollY + rect.top - offset;
        // ziskani elementu, nastaveni variabilniho offsetu, vypocet scrollu
        window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      } }
  };
  return { handleScroll };
};


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('CZ');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageEN = () => { // trochu hloupe rozdeleni, slo to udelat v jednom
    if (language === 'CZ') {
      setLanguage('ENG');
    } 
  }
  const handleLanguageCZ = () => {
    if (language === 'ENG') {
      setLanguage('CZ');
    } 
  }
  const handleClose = () => {
    setIsMenuOpen(false);
  }

  const { handleScroll } = useScrollHandler();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
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
            <div className={styles.button} onClick={e => handleScroll(e, "/", "contact")}>CHCI ZAČÍT!</div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdownSelected}>{language}<div className={styles.arrow}>{">"}</div></div>
            <ol className={styles.dropdownList}>
              {(language === "ENG") && <li className={styles.dropdownItem} onClick={handleLanguageCZ}>CZ</li>}
              {(language === "CZ") && <li className={styles.dropdownItem} onClick={handleLanguageEN}>ENG</li>}
            </ol>
          </div>
          <div className={`${styles.czenhidden} ${isMenuOpen ? styles.czen : ""}`}>
            <Link href="#" className={styles.link1}>CZ</Link>
            <Link href="#" className={styles.link2}>ENG</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
