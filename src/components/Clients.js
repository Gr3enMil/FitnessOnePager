import styles from "../app/styles/page.module.css";
import Image from "next/image";


export default function Clients() {
  return (
    <section id="clients" className={styles.section}>
      <h2>Clients/References</h2>
      <p>
        We have worked with a variety of clients and have received many
        positive reviews. Here are a few of our clients:
      </p>
      <div className={styles.burti}>
        <div className={styles.burt}>
          <p>KARLIČKA</p>
          <Image src="/bbb.jpg" alt="KARLIČKA" width={100} height={110} />
        </div>
        <div>
          <p>VOJTÍK</p>
          <Image src="/aaa.jpg" alt="KARLIČKA" width={100} height={110} />
        </div>
        <div>
          <p>ANIČKA</p>
          <Image src="/ccc.jpg" alt="KARLIČKA" width={100} height={110} />
        </div>
      </div>
      
    </section>
  );
}