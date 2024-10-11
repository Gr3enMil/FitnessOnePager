"use client";
import styles from "./styles/page.module.css";
import About from "../components/About";
import Services from "../components/Services";
import Clients from "../components/Clients";
 import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Logo from "../components/Logo";
import Pros from "../components/Pros";


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Logo />  
        <About />
        <Pros />
        <Services />
        <Clients />
        <Blog />
        <Contact />
      </main>
    </div>
    
  );
}
