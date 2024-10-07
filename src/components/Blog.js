import Image from "next/image";
import styles from "../app/styles/page.module.css";

export default function Blog() {
  return (
    <section id="about" className={styles.section}>
      <h2>BLOG</h2>
        <div className={styles.blog}>
          <div className={styles.blogMain}>
            <h4>PROČ NEPAPAT PÁRKY</h4>
            <div className={styles.blogPart}>
              <Image src="/ccc.jpg" alt="BARBER balance" 
              width={120} height={150} />
              <p>ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla blu </p>
            </div>
          </div>
          <div className={styles.blogMain}>
            <h4>PROČ ŽRÁT SALÁTY</h4>
            <div className={styles.blogPart}>
              <Image src="/ccc.jpg" alt="BARBER balance" 
              width={120} height={150} />
              <p>ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla 
                blu ze bla blu ze bla blu ze bla blu ze bla blu </p>
            </div>
          </div>
        </div>
    </section>
  );
}