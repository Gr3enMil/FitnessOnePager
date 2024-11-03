import Image from 'next/image';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.title}>SLUŽBY</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Osobní trénink</h3>
          <div className={styles.serviceContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/service1.jpeg"
                alt="Osobní trénink"
                width={400}
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <p>Během 60 minut ti ukážu, že posilovna může být i zábavné místo.</p>
              
              <ul>
                <li>Úvodní konzultace cílů a priorit.</li>
                <li>Ukážeme si cviky na zlepšení mobility těla.</li>
                <li>Naučíme se efektivní cviky kopírující základní pohybové vzorce.</li>
                <li>Ukážu ti různé variace cviků, ze kterých si pak můžeš vybrat.</li>
              </ul>
              <p className={styles.price}>800,- Kč / hodina</p>
            </div>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Jídelníček a suplementační plán</h3>
          <div className={styles.serviceContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/service2.jpeg"
                alt="Jídelníček a suplementační plán"
                width={400}
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <ul>
                <li>Příklad jídelníčku na týden s vypočítanou energetickou hodnotou.</li>
                <li>Různé varianty potravin podle toho, co ti chutná a po čem se cítíš nejlépe.</li>
                <li>Vedení v případě, že by sis chtěl/a vyzkoušet konkrétní styl stravování (carnivore, vegan).</li>
                <li>Edukační informace ohledně vědomého stravování, vlivu hormonů na chuť a chronobiologii.</li>
              </ul>
              <p className={styles.price}>800,- Kč / hodina</p>
            </div>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Online Coaching 1:1</h3>
          <div className={styles.serviceContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/service3.jpeg"
                alt="Online Coaching 1:1"
                width={400}
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <ul>
                <li>Výživový a Tréninkový plán na míru tvým cílům, posilovně a časovým možnostem.</li>
                <li>Analýza techniky a zpětná vazba k tréninku.</li>
                <li>Týdenní kontrola a zpětná vazba z videa.</li>
                <li>Denní kontakt přes Whatsapp.</li>
                <li>Vzdělávání v oblasti spánku, zvládání stresu, biohackingu, rutiny a mindsetu, které ti zaručí, že budeš svým nejlepším a nejproduktivnějším já.</li>
              </ul>
              <p className={styles.note}>Z důvodů vybudování návyků a prvních výsledků je minimální doba spolupráce stanovena na tři měsíce</p>
              <p className={styles.price}>2 500,- až 3 500,- Kč / měsíc</p>
            </div>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <h3 className={styles.serviceTitle}>Tréninkový plán</h3>
          <div className={styles.serviceContent}>
            <div className={styles.imageWrapper}>
              <Image
                src="/service4.jpeg"
                alt="Tréninkový plán"
                width={400}
                height={400}
                className={styles.serviceImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <ul>
                <li>Týdenní rozpis tréninků přizpůsobený tvým časovým možnostem.</li>
                <li>Ke každému cviku video popisující správnou techniku.</li>
                <li>Google Sheets dokument, kde si budeš moct zapisovat výkony u každého cviku.</li>
                <li>Možnost konzultace techniky formou videí a chatu po dobu trvání spolupráce.</li>
                <li>Osobní tréninky za sníženou cenu.</li>
              </ul>
              <p className={styles.note}>Z důvodů vybudování návyků a prvních výsledků je minimální doba spolupráce stanovena na tři měsíce</p>
              <p className={styles.price}>1 500,- Kč / měsíc</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
