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
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.descriptionWrapper}>
            <p>
              Se silovým tréninkem mám desetiletou zkušenost, kdy jsem začínala
              úplně sama bez žádného vedení. Prošla jsem všemi chybami, které
              může začátečník na své cestě udělat, bez kterých bych si cestu dost
              zkrátila. Ale získala jsem se během toho mnoho znalostí, které teď
              předávám dál. Naučila jsem se, že ke změně života k lepšímu nestačí
              jen držet se tréninkového plánu a jídelníčku, ale že ta největší změna
              musí proběhnout v hlavě. Zamilovala jsem se do zkoumání lidského těla
              a mysli natolik, že jsem vystudovala lidskou fyziologii a
              neurobiologii na vysoké škole. Díky tomu teď zvládám koukat na
              problémy komplexně a nedržím se zajetých dogmat, což se snažím
              předávat dál.
            </p>
            <p>
              Mezi mé sportovní úspěchy patří druhé místo na prestižní soutěži EVLS
              Prague v roce 2023, kde jsem soutěžila v kategorii bikini fitness. Mimo
              to mám medaili z mistrovství České republiky v Aerial Art na šále, díky
              které jsem se kvalifikovala na mistrovství světa. Také jsem soutěžila
              jako juniorka v silovém trojboji a pole dance.
            </p>
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
      </div>
    </section>
  );
}
