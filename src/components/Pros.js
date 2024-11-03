import Image from 'next/image';
import styles from './Pros.module.css';

export default function Pros() {
  return (
    <section className={styles.prosSection} id="advantages">
      <h2 className={styles.title}>VÝHODY SPOLUPRÁCE</h2>
      <div className={styles.prosContainer}>
        <div className={styles.proItem}>
          <Image
            src="/pro1.png"
            alt="Odborné poradenství"
            width={64}
            height={64}
            className={styles.proImage}
          />
          <h3 className={styles.proTitle}>Odborné poradenství</h3>
          <p className={styles.proDescription}>
            Bude vás vést někdo, kdo prošel touto cestou a byl ve vaší kůži.
          </p>
        </div>
        <div className={styles.proItem}>
          <Image
            src="/pro2.png"
            alt="Evidence-based přístup"
            width={64}
            height={64}
            className={styles.proImage}
          />
          <h3 className={styles.proTitle}>Evidence-based přístup</h3>
          <p className={styles.proDescription}>
            Koučování je založeno na nejnovějších vědeckých výzkumech, což ti zaručí, že získáš nejúčinnější a nejaktuálnější strategie.
          </p>
        </div>
        <div className={styles.proItem}>
          <Image
            src="/pro3.png"
            alt="Celostní přístup"
            width={64}
            height={64}
            className={styles.proImage}
          />
          <h3 className={styles.proTitle}>Celostní přístup</h3>
          <p className={styles.proDescription}>
            Věřím v péči o tvé fyzické i duševní zdraví a ve vytvoření udržitelného životního stylu. Chci, abys fitness vnímala jako něco, co zlepšuje tvůj život a přispívá k tvému štěstí.
          </p>
        </div>
        <div className={styles.proItem}>
          <Image
            src="/pro4.png"
            alt="Edukace"
            width={64}
            height={64}
            className={styles.proImage}
          />
          <h3 className={styles.proTitle}>Edukace</h3>
          <p className={styles.proDescription}>
            Mým cílem je nejen ti pomoci dosáhnout tvých fitness cílů, ale také tě vybavit znalostmi, které ti vydrží po celý život. Chci být posledním trenérem, kterého kdy budeš potřebovat.
          </p>
        </div>
      </div>
    </section>
  );
}
