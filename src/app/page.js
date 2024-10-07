"use client";
import styles from "./styles/page.module.css";
import Link from "next/link";
import Image from "next/image";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Blog from "../components/Blog";


export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/picture.jpg"
          width={250}
          height={400}
          alt="description"
        />
        <div>
          <nav className={styles.navBar}>
            <ul className={styles.list}>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#clients">References</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </nav> 
          <h1>BARBER balance</h1>
          <h2>Fitness | Aerial Silks | Complex Training</h2>
        </div>
        <Image
          src="/picture.jpg"
          width={250}
          height={400}
          alt="description"
        />         
      </header>
      <main className={styles.main}>
        <About />
        <Services />
        <Clients />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Barber Balance</p>
      </footer>
    </div>
    
  );
}
