import Image from "next/image";
import styles from "../app/styles/page.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <h2>About</h2>
      <div className={styles.aboutSection}>
        <Image src="/Barbara.jpg" alt="BARBER balance" width={300} height={400} />
        <div className={styles.aboutRight}>
          <p>
            BARBER balance is a fitness studio that offers a variety of training
            options to help you reach your fitness goals. We offer personal training
            and group classes in fitness, aerial silks, and complex training.
          </p>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
}