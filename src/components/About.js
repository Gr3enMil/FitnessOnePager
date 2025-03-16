import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className={styles.title}>O TRENÉRCE</h2>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/barbara2.png"
            alt="Barbara Maiarino"
            width={400}
            height={700}
            className={styles.mainImage}
          />
          
          <Image
            src="/images/barbara3.png"
            alt="Barbara Maiarino"
            width={400}
            height={300}
            className={styles.sideImage}
          />
        </div>
        <div className={styles.textWrapper}>
          <p>
          Když si vybíráte trenéra nebo kouče, který by vás podpořil v dosahování vašich cílů, myslím, že je důležité znát jeho zkušenosti a přístup.
          </p>
          <p>
          Před deseti lety jsem začala svou cestu za fitness úplně sama bez jakéhokoli vedení. Prošla jsem si všemi chybami, kterých se začátečník může na této cestě dopustit. Vím, jaké to je být v koloběhu hubnutí tuku a příbytku svalů, ale nikdy se necítit dost dobře.
          </p>
          <p>
          Během tohoto procesu jsem si zamilovala zkoumání lidského těla a mysli natolik, že jsem vystudovala fyziologii člověka a neurovědy na Karlově univerzitě v Praze a také jsem získala akreditovaný certifikát osobního trenéra.           </p>
          <p>
          Díky tomu se dokážu na problémy dívat komplexně a nedržet se dogmat - což je přístup, který se snažím předávat dál. Naučila jsem se, že ke změně života k lepšímu nestačí jen dodržovat cvičební plán a dietu, ale že největší změna se musí odehrát v hlavě.          </p>
          <p>
          Věřím, že se správným tréninkem, při kterém se cítíme dobře, zaměřený na sílu a výkon, správnou stravou, a osvobozením se od myšlení „všechno nebo nic“ můžeme dosáhnout spokojenosti se svým tělem.           </p>
        </div>
        <div className={styles.iconsWrapper}>
          <div className={styles.iconItem}>
            <Image src="/images/about1.png" alt="Deset let zkušeností" width={64} height={64} />
            <p>Vice jak deset let zkušeností s posilováním</p>
          </div>
          <div className={styles.iconItem}>
            <Image src="/images/about2.png" alt="EVLS Prague 2023" width={64} height={64}
              style={{ objectFit: 'cover', objectPosition: "50% 0%" }}
            />
            <p>Druhé místo na EVLS Prague 2023 v bikini fitness</p>
          </div>
          <div className={styles.iconItem}>
            <Image src="/images/about3.png" alt="Silový trojboj" width={64} height={64}
              style={{ objectFit: 'cover', objectPosition: "50% 0%" }}
            />
            <p>Zkušenosti se silovým trojbojem a pole dance</p>
          </div>
          <div className={styles.iconItem}>
            <Image src="/images/about4.png" alt="VŠ vzdělání" width={64} height={64} />
            <p>VŠ vzdělání v oboru lidské fyziologie a neurobiologie</p>
          </div>
          <div className={styles.iconItem}>
            <Image src="/images/about5.png" alt="Medaile v Aerial Arts" width={64} height={64} />
            <p>Medailistka v Aerial Arts (Akrobacie na šále)</p>
          </div>
        </div>

      </div>
    </section>
  );
}
